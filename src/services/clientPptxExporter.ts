import pptxgen from 'pptxgenjs';
import { SLIDES_DATA } from '../data/slidesData';

/**
 * Client-side PowerPoint (.pptx) generator.
 * Runs directly in the browser and triggers an instant browser file download.
 */
export async function downloadPptxInBrowser(): Promise<void> {
  const pres = new pptxgen();

  pres.layout = 'LAYOUT_16x9'; // 10" x 5.625"
  pres.title = 'AIA Hong Kong Policy Owner Services - Operations Strategy & Innovation';
  pres.company = 'AIA Hong Kong';
  pres.subject = 'Policy Owner Services Strategy & Innovation Presentation (18 Slides)';

  for (const slide of SLIDES_DATA) {
    const s = pres.addSlide();

    // 1. Top AIA Crimson Accent Stripe
    s.addShape(pres.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 10.0,
      h: 0.08,
      fill: { color: 'D31145' },
      line: { color: 'D31145' },
    });

    // 2. Category Kicker and Slide Counter
    s.addText(
      `SECTION ${slide.categoryNumber} · ${slide.category.toUpperCase()}   |   AIA HONG KONG POS   |   SLIDE ${String(slide.id).padStart(2, '0')}/18`,
      {
        x: 0.4,
        y: 0.15,
        w: 9.2,
        h: 0.22,
        fontSize: 7.5,
        fontFace: 'Arial',
        bold: true,
        color: 'D31145',
      }
    );

    // 3. Slide Headline
    s.addText(slide.title, {
      x: 0.4,
      y: 0.38,
      w: 9.2,
      h: 0.4,
      fontSize: 15,
      fontFace: 'Arial',
      bold: true,
      color: '0F172A',
    });

    // 4. Slide Subheadline
    s.addText(slide.subtitle, {
      x: 0.4,
      y: 0.78,
      w: 9.2,
      h: 0.28,
      fontSize: 9,
      fontFace: 'Arial',
      color: '475569',
    });

    // 5. Four Executive KPI Cards
    const metricW = 2.15;
    const metricGap = 0.2;
    const metricY = 1.12;
    const metricH = 0.65;

    slide.metrics.slice(0, 4).forEach((m, idx) => {
      const mX = 0.4 + idx * (metricW + metricGap);

      s.addShape(pres.ShapeType.roundRect, {
        x: mX,
        y: metricY,
        w: metricW,
        h: metricH,
        fill: { color: 'F8FAFC' },
        line: { color: 'CBD5E1', width: 0.75 },
        rectRadius: 0.05,
      });

      s.addText(
        [
          { text: m.value + '\n', options: { fontSize: 13, bold: true, color: '0F172A' } },
          { text: m.label + '\n', options: { fontSize: 7.5, bold: true, color: '334155' } },
          { text: m.subtext || '', options: { fontSize: 6.5, color: '64748B' } },
        ],
        {
          x: mX + 0.08,
          y: metricY + 0.04,
          w: metricW - 0.16,
          h: metricH - 0.08,
          fontFace: 'Arial',
          margin: 0,
        }
      );
    });

    // 6. Two Strategic Pillar Content Cards
    const pillarW = 4.45;
    const pillarH = 2.05;
    const pillarY = 1.86;

    slide.pillars.slice(0, 2).forEach((p, idx) => {
      const pX = 0.4 + idx * (pillarW + 0.3);

      s.addShape(pres.ShapeType.rect, {
        x: pX,
        y: pillarY,
        w: pillarW,
        h: pillarH,
        fill: { color: 'FFFFFF' },
        line: { color: 'E2E8F0', width: 0.75 },
      });

      const textParts: any[] = [];
      if (p.kicker) {
        textParts.push({ text: p.kicker.toUpperCase() + '\n', options: { fontSize: 7, bold: true, color: 'D31145' } });
      }
      textParts.push({ text: p.title + '\n', options: { fontSize: 10, bold: true, color: '0F172A' } });
      textParts.push({ text: p.description + '\n', options: { fontSize: 7.5, color: '475569' } });

      p.bulletPoints.forEach((bp) => {
        textParts.push({ text: '• ' + bp + '\n', options: { fontSize: 7, color: '1E293B' } });
      });

      if (p.tags) {
        textParts.push({ text: 'Focus: ' + p.tags.join(' · '), options: { fontSize: 6.5, color: '64748B', italic: true } });
      }

      s.addText(textParts, {
        x: pX + 0.12,
        y: pillarY + 0.08,
        w: pillarW - 0.24,
        h: pillarH - 0.16,
        fontFace: 'Arial',
        margin: 0,
      });
    });

    // 7. Bottom Governance & Framework Card (Navy Theme)
    const bottomY = 4.0;
    const bottomH = 1.35;

    s.addShape(pres.ShapeType.rect, {
      x: 0.4,
      y: bottomY,
      w: 9.2,
      h: bottomH,
      fill: { color: '0B192C' },
      line: { color: '1E293B', width: 0.5 },
    });

    let workflowDetails = '';
    if (slide.workflow?.steps) {
      workflowDetails = slide.workflow.steps
        .map((st) => `[${st.stepNumber}] ${st.title} (${st.owner || 'POS'}): ${st.description}`)
        .join('   |   ');
    } else if (slide.workflow?.timeline) {
      workflowDetails = slide.workflow.timeline
        .map((tl) => `[${tl.date}] ${tl.title}: ${tl.details}`)
        .join('   |   ');
    } else if (slide.workflow?.comparisonRows) {
      workflowDetails = slide.workflow.comparisonRows
        .map((cr) => `${cr.dimension}: ${cr.before} ➔ ${cr.after} (Impact: ${cr.impact})`)
        .join('   |   ');
    }

    s.addText(
      [
        { text: `OPERATIONAL ARCHITECTURE & GOVERNANCE: ${slide.workflow?.caption || slide.tagline}\n`, options: { fontSize: 7.5, bold: true, color: 'E2E8F0' } },
        { text: workflowDetails + '\n\n', options: { fontSize: 6.5, color: 'CBD5E1' } },
        { text: `Key Operational Value: ${slide.keyTakeaways.join(' · ')}`, options: { fontSize: 6.5, color: 'F43F5E', bold: true } },
      ],
      {
        x: 0.5,
        y: bottomY + 0.08,
        w: 9.0,
        h: bottomH - 0.16,
        fontFace: 'Arial',
        margin: 0,
      }
    );

    // 8. Add Speaker Notes to Slide
    let notesText = `EXECUTIVE SPEAKER NOTES (Slide ${slide.id}: ${slide.title})\n\n`;
    notesText += slide.speakerNotes + '\n\n';
    notesText += 'STRATEGIC TAKEAWAYS:\n';
    slide.keyTakeaways.forEach((t) => {
      notesText += `• ${t}\n`;
    });
    if (slide.regulatoryNotice) {
      notesText += `\nREGULATORY COMPLIANCE GUARDRAIL:\n${slide.regulatoryNotice}\n`;
    }
    s.addNotes(notesText);
  }

  // Trigger client-side browser file download
  await pres.writeFile({ fileName: 'AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx' });
}
