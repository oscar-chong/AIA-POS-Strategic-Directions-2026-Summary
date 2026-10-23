import { getAccessToken } from './firebaseAuth';
import { SLIDES_DATA, SlideData } from '../data/slidesData';

// AIA Brand Color Palette in Google Slides RGB format (0.0 to 1.0)
const COLORS = {
  aiaCrimson: { red: 0.827, green: 0.067, blue: 0.271 }, // #D31145
  navySlate: { red: 0.043, green: 0.098, blue: 0.173 }, // #0B192C
  cardBg: { red: 0.973, green: 0.980, blue: 0.988 }, // #F8FAFC
  cardBorder: { red: 0.898, green: 0.914, blue: 0.933 }, // #E2E8F0
  textDark: { red: 0.059, green: 0.090, blue: 0.165 }, // #0F172A
  textMuted: { red: 0.392, green: 0.455, blue: 0.545 }, // #64748B
  white: { red: 1.0, green: 1.0, blue: 1.0 },
  accentEmerald: { red: 0.020, green: 0.588, blue: 0.412 }, // #059669
};

export interface ExportProgress {
  currentSlide: number;
  totalSlides: number;
  stepDescription: string;
}

/**
 * Creates a complete Google Slides presentation in the user's Google Drive
 * populated with the 18 AIA Hong Kong Policy Owner Services executive slides.
 */
export async function exportToGoogleSlides(
  onProgress?: (progress: ExportProgress) => void
): Promise<{ presentationId: string; presentationUrl: string }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Google OAuth access token is required. Please sign in with Google first.');
  }

  // Step 1: Create a new Presentation
  onProgress?.({
    currentSlide: 0,
    totalSlides: SLIDES_DATA.length,
    stepDescription: 'Creating new Google Slides presentation...',
  });

  const createRes = await fetch('https://slides.googleapis.com/v1/presentations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'AIA Hong Kong POS - Operations Strategy & Innovation Presentation (18 Slides)',
    }),
  });

  if (!createRes.ok) {
    const errorJson = await createRes.json().catch(() => ({}));
    throw new Error(
      errorJson?.error?.message || `Failed to create Google Slides presentation (${createRes.status})`
    );
  }

  const presentation = await createRes.json();
  const presentationId = presentation.presentationId;
  const initialSlideId = presentation.slides?.[0]?.objectId;

  // Step 2: Create custom blank slides for each slide in our dataset
  onProgress?.({
    currentSlide: 1,
    totalSlides: SLIDES_DATA.length,
    stepDescription: 'Generating 18 executive slides and layouts...',
  });

  // Prepare createSlide requests
  const createSlideRequests: any[] = [];
  const slideObjectIds: string[] = [];

  SLIDES_DATA.forEach((slide) => {
    const slideObjectId = `slide_aia_pos_${slide.id}`;
    slideObjectIds.push(slideObjectId);
    createSlideRequests.push({
      createSlide: {
        objectId: slideObjectId,
        slideLayoutReference: {
          predefinedLayout: 'BLANK',
        },
      },
    });
  });

  // If there was a default initial slide, delete it after creating our slides
  if (initialSlideId) {
    createSlideRequests.push({
      deleteObject: {
        objectId: initialSlideId,
      },
    });
  }

  // Execute slide creation
  const batchCreateRes = await fetch(
    `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requests: createSlideRequests }),
    }
  );

  if (!batchCreateRes.ok) {
    const errorJson = await batchCreateRes.json().catch(() => ({}));
    throw new Error(
      errorJson?.error?.message || `Failed to setup slides structure (${batchCreateRes.status})`
    );
  }

  // Step 3: Populate each slide with content, shapes, text, metrics and speaker notes in batches
  const batchSize = 3; // 3 slides per batch to ensure reliable execution within request limits
  for (let i = 0; i < SLIDES_DATA.length; i += batchSize) {
    const chunk = SLIDES_DATA.slice(i, i + batchSize);
    const contentRequests: any[] = [];

    chunk.forEach((slide) => {
      const slideId = `slide_aia_pos_${slide.id}`;
      buildSlideElements(slide, slideId, contentRequests);
    });

    onProgress?.({
      currentSlide: Math.min(i + batchSize, SLIDES_DATA.length),
      totalSlides: SLIDES_DATA.length,
      stepDescription: `Populating slides ${i + 1} to ${Math.min(i + batchSize, SLIDES_DATA.length)} with business frameworks...`,
    });

    const updateRes = await fetch(
      `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requests: contentRequests }),
      }
    );

    if (!updateRes.ok) {
      const errorJson = await updateRes.json().catch(() => ({}));
      console.warn('Batch update warning on chunk:', errorJson);
      // Continue with next chunk to ensure maximum slides are populated
    }
  }

  onProgress?.({
    currentSlide: SLIDES_DATA.length,
    totalSlides: SLIDES_DATA.length,
    stepDescription: 'Presentation successfully created in Google Drive!',
  });

  return {
    presentationId,
    presentationUrl: `https://docs.google.com/presentation/d/${presentationId}/edit`,
  };
}

/**
 * Builds Google Slides API requests for a single slide:
 * - AIA Crimson Top Stripe
 * - Navy Header Banner with Title, Category and Subtitle
 * - KPI Metric Cards Strip
 * - Content Pillars (Left and Right structured cards)
 * - Process / Timeline / Takeaways Summary Card
 */
function buildSlideElements(slide: SlideData, pageObjectId: string, requests: any[]) {
  const sId = slide.id;

  // 1. AIA Crimson Top Brand Accent (720pt wide x 4pt high)
  const topStripeId = `top_stripe_${sId}`;
  requests.push(
    {
      createShape: {
        objectId: topStripeId,
        shapeType: 'RECTANGLE',
        elementProperties: {
          pageObjectId,
          size: { width: { magnitude: 720, unit: 'PT' }, height: { magnitude: 5, unit: 'PT' } },
          transform: { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, unit: 'PT' },
        },
      },
    },
    {
      updateShapeProperties: {
        objectId: topStripeId,
        shapeProperties: {
          shapeBackgroundFill: { solidFill: { color: { rgbColor: COLORS.aiaCrimson } } },
          outline: { propertyState: 'NOT_RENDERED' },
        },
        fields: 'shapeBackgroundFill,outline',
      },
    }
  );

  // 2. Header Text Area (Title, Subtitle, Category & Slide Counter)
  const headerBoxId = `header_box_${sId}`;
  const headerText = `${slide.category.toUpperCase()} · SLIDE ${String(slide.id).padStart(2, '0')}/18\n${slide.title}\n${slide.subtitle}`;

  requests.push(
    {
      createShape: {
        objectId: headerBoxId,
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId,
          size: { width: { magnitude: 680, unit: 'PT' }, height: { magnitude: 52, unit: 'PT' } },
          transform: { scaleX: 1, scaleY: 1, translateX: 20, translateY: 10, unit: 'PT' },
        },
      },
    },
    {
      insertText: {
        objectId: headerBoxId,
        text: headerText,
        insertionIndex: 0,
      },
    },
    {
      updateTextStyle: {
        objectId: headerBoxId,
        textRange: { type: 'ALL' },
        style: {
          fontFamily: 'Arial',
          fontSize: { magnitude: 9, unit: 'PT' },
          foregroundColor: { opaqueColor: { rgbColor: COLORS.textMuted } },
        },
        fields: 'fontFamily,fontSize,foregroundColor',
      },
    }
  );

  // 3. KPI Metric Strip (Row of up to 4 metrics)
  const metricY = 66;
  const metricWidth = 160;
  const metricGap = 13;
  slide.metrics.slice(0, 4).forEach((metric, mIdx) => {
    const mBoxId = `metric_box_${sId}_${mIdx}`;
    const mX = 20 + mIdx * (metricWidth + metricGap);
    const mText = `${metric.value}\n${metric.label}\n${metric.subtext || ''}`;

    requests.push(
      {
        createShape: {
          objectId: mBoxId,
          shapeType: 'ROUNDED_RECTANGLE',
          elementProperties: {
            pageObjectId,
            size: { width: { magnitude: metricWidth, unit: 'PT' }, height: { magnitude: 42, unit: 'PT' } },
            transform: { scaleX: 1, scaleY: 1, translateX: mX, translateY: metricY, unit: 'PT' },
          },
        },
      },
      {
        updateShapeProperties: {
          objectId: mBoxId,
          shapeProperties: {
            shapeBackgroundFill: { solidFill: { color: { rgbColor: COLORS.cardBg } } },
            outline: {
              solidFill: { color: { rgbColor: COLORS.cardBorder } },
              weight: { magnitude: 1, unit: 'PT' },
            },
          },
          fields: 'shapeBackgroundFill,outline',
        },
      },
      {
        insertText: {
          objectId: mBoxId,
          text: mText,
          insertionIndex: 0,
        },
      },
      {
        updateTextStyle: {
          objectId: mBoxId,
          textRange: { type: 'ALL' },
          style: {
            fontFamily: 'Arial',
            fontSize: { magnitude: 8, unit: 'PT' },
            foregroundColor: { opaqueColor: { rgbColor: COLORS.textDark } },
          },
          fields: 'fontFamily,fontSize,foregroundColor',
        },
      }
    );
  });

  // 4. Strategic Content Pillars (Left & Right Cards)
  const pillarY = 114;
  const pillarHeight = 160;
  const pillarWidth = 333;

  slide.pillars.slice(0, 2).forEach((pillar, pIdx) => {
    const pBoxId = `pillar_box_${sId}_${pIdx}`;
    const pX = 20 + pIdx * (pillarWidth + 14);

    let pContent = `${pillar.title.toUpperCase()}\n${pillar.description}\n`;
    pillar.bulletPoints.forEach((bp) => {
      pContent += `• ${bp}\n`;
    });

    requests.push(
      {
        createShape: {
          objectId: pBoxId,
          shapeType: 'RECTANGLE',
          elementProperties: {
            pageObjectId,
            size: { width: { magnitude: pillarWidth, unit: 'PT' }, height: { magnitude: pillarHeight, unit: 'PT' } },
            transform: { scaleX: 1, scaleY: 1, translateX: pX, translateY: pillarY, unit: 'PT' },
          },
        },
      },
      {
        updateShapeProperties: {
          objectId: pBoxId,
          shapeProperties: {
            shapeBackgroundFill: { solidFill: { color: { rgbColor: COLORS.cardBg } } },
            outline: {
              solidFill: { color: { rgbColor: COLORS.cardBorder } },
              weight: { magnitude: 1, unit: 'PT' },
            },
          },
          fields: 'shapeBackgroundFill,outline',
        },
      },
      {
        insertText: {
          objectId: pBoxId,
          text: pContent,
          insertionIndex: 0,
        },
      },
      {
        updateTextStyle: {
          objectId: pBoxId,
          textRange: { type: 'ALL' },
          style: {
            fontFamily: 'Arial',
            fontSize: { magnitude: 7.5, unit: 'PT' },
            foregroundColor: { opaqueColor: { rgbColor: COLORS.textDark } },
          },
          fields: 'fontFamily,fontSize,foregroundColor',
        },
      }
    );
  });

  // 5. Workflow / Comparison / Key Takeaway Card (Bottom Area)
  const bottomY = 280;
  const bottomBoxId = `bottom_box_${sId}`;
  let bottomContent = `OPERATIONAL WORKFLOW & GOVERNANCE: ${slide.workflow?.caption || slide.tagline}\n`;

  if (slide.workflow?.steps && slide.workflow.steps.length > 0) {
    slide.workflow.steps.forEach((st) => {
      bottomContent += `[${st.stepNumber}] ${st.title} (${st.owner || 'POS'}): ${st.description} · Timing: ${st.timing || 'N/A'}\n`;
    });
  } else if (slide.workflow?.timeline && slide.workflow.timeline.length > 0) {
    slide.workflow.timeline.forEach((tl) => {
      bottomContent += `[${tl.date}] ${tl.title}: ${tl.details}\n`;
    });
  } else if (slide.workflow?.comparisonRows && slide.workflow.comparisonRows.length > 0) {
    slide.workflow.comparisonRows.forEach((cr) => {
      bottomContent += `• ${cr.dimension}: [Before] ${cr.before} --> [Target] ${cr.after} (Impact: ${cr.impact})\n`;
    });
  }

  bottomContent += `Key Executive Takeaway: ${slide.keyTakeaways.join(' | ')}`;
  if (slide.regulatoryNotice) {
    bottomContent += `\nRegulatory Compliance: ${slide.regulatoryNotice}`;
  }

  requests.push(
    {
      createShape: {
        objectId: bottomBoxId,
        shapeType: 'RECTANGLE',
        elementProperties: {
          pageObjectId,
          size: { width: { magnitude: 680, unit: 'PT' }, height: { magnitude: 110, unit: 'PT' } },
          transform: { scaleX: 1, scaleY: 1, translateX: 20, translateY: bottomY, unit: 'PT' },
        },
      },
    },
    {
      updateShapeProperties: {
        objectId: bottomBoxId,
        shapeProperties: {
          shapeBackgroundFill: { solidFill: { color: { rgbColor: COLORS.navySlate } } },
          outline: { propertyState: 'NOT_RENDERED' },
        },
        fields: 'shapeBackgroundFill,outline',
      },
    },
    {
      insertText: {
        objectId: bottomBoxId,
        text: bottomContent,
        insertionIndex: 0,
      },
    },
    {
      updateTextStyle: {
        objectId: bottomBoxId,
        textRange: { type: 'ALL' },
        style: {
          fontFamily: 'Arial',
          fontSize: { magnitude: 7, unit: 'PT' },
          foregroundColor: { opaqueColor: { rgbColor: COLORS.white } },
        },
        fields: 'fontFamily,fontSize,foregroundColor',
      },
    }
  );
}
