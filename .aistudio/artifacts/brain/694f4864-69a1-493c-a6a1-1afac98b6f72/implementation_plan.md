# AIA Hong Kong Policy Owner Services: Comprehensive Executive Strategy & Innovation Deck

An exhaustive, high-density 18-slide executive presentation platform and Google Slides integration tailored for the AIA Hong Kong Policy Owner Services (POS) department, synthesizing the Operations Strategy, Functional Priorities & Commitments, and Lesson-Learned & Innovation Milestones.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your confirmed selections, this implementation adheres to:
> - **Visual Theme**: AIA Corporate Signature (`#D31145` AIA Red, Deep Navy `#0B192C`, Slate Neutral `#1E293B`, Clean Off-White `#F8FAFC` cards with crisp hairline borders and zero pill enclosures).
> - **Slide Granularity**: Exhaustive 18-slide deep-dive covering every strategic pillar, technical architecture, regulatory milestone, and operational metric with maximum information density and minimal empty space.
> - **Google Workspace Integration**: Full interactive in-app presenter with 1-click direct export to **Google Slides** via Google Slides API (`https://www.googleapis.com/auth/presentations` & `https://www.googleapis.com/auth/drive.file`), complete with Google OAuth client authentication and offline backup options.

- **Confirmed Decision 1**: Visual theme locked to AIA Corporate Signature with executive data grids and process diagrams.
- **Confirmed Decision 2**: Exhaustive 18-slide breakdown across Operations Strategy, Functional Priorities, and Innovation/Lessons Learned.
- **Confirmed Decision 3**: Dual delivery consisting of an interactive in-browser executive deck viewer and 1-click Google Slides API creation with direct link to Google Drive.

---

## 1. Overview & Core Concept

- **What It Does**: A dedicated enterprise-grade presentation suite for AIA Hong Kong Policy Owner Services. The application provides an interactive, full-screen executive slide viewer featuring dense, structured business frameworks, process flowcharts, regulatory timelines (2026–2028), and quantitative impact metrics. Users can present directly in-app, filter slides by category, customize speaker notes, and trigger a 1-click export that programmatically creates a fully formatted Google Slides deck in their Google Drive.
- **Target Audience / Persona**: POS Senior Leadership, Department Heads, Regional Operations Executives, Agency Distribution Partners, and Regulatory & Compliance Auditors.
- **Key Value**: Delivers complete transparency and structured documentation across all POS transformation initiatives (IBM POS Modernization, GenAI AML Screening, CRS 2.0 Compliance, HNW MonQ Framework, Autopay Fast Track, and Digital Servicing Innovations) while eliminating manual presentation formatting.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Executive Deck Navigation**:
   - Sidebar thumbnail list and top category segment controls (`All Slides`, `1. Overall Strategy`, `2. Functional Priorities`, `3. Lessons Learned & Innovation`).
   - Smooth slide transitions with keyboard arrow keys (`Left`/`Right`), full-screen presentation mode (`F`), and presentation index drawer.
2. **Slide Deep-Dive & Inspection**:
   - Each slide provides high-density business layouts: executive KPI strips, multi-step process flows, architecture matrices, and milestone roadmaps with zero empty space.
   - Expandable "Presenter Notes & Regulatory Context" drawer for executive speaking points.
3. **Google Slides Export Flow**:
   - Prominently positioned `Export to Google Slides` button with standard Google branding.
   - Client-side Firebase Google OAuth popup flow requesting `presentations` and `drive.file` scopes.
   - Live generation progress indicator creating slides, shapes, text frames, and formatting via batchUpdate.
   - Instant launch button opening the generated deck directly in Google Slides (`https://docs.google.com/presentation/d/...`).
   - Alternative offline quick export (Download HTML/Print-ready presentation).

### Visual Identity & Theme
- **Aesthetic Direction**: AIA Corporate Signature — rigorous institutional insurance and financial operations aesthetic, high-density executive grid, crisp borders, and zero-pill typographic discipline.
- **Color Palette**:
  - Primary Brand: AIA Crimson Red (`#D31145`)
  - Accent / Authority: Deep Sapphire / Slate Navy (`#0B192C` & `#1E293B`)
  - Neutral Canvas: Crisp Light Warm Gray (`#F8FAFC`) with card surfaces in `#FFFFFF`
  - Dividing Lines: Hairline borders (`border-slate-200` / `border-slate-300`)
  - Status Accents: Muted Emerald (`#059669`) for completions, Amber (`#D97706`) for in-flight/regulatory review, and Crimson (`#D31145`) for critical governance items.
- **Typography & Layout Density**:
  - Display & Headings: `Plus Jakarta Sans` / `Outfit` (sharp, modern neo-grotesque sans).
  - Body & Content: `Public Sans` / `DM Sans` (highly legible at 12–14px dense informational layouts).
  - Metrics & Timelines: Monospace tabular numerals (`tabular-nums font-mono`).
  - No pill badges; metadata rendered using unboxed text with subtle typographic dot dividers (`·`).

---

## 3. Exhaustive 18-Slide Content Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       AIA HK POS 18-SLIDE MASTER INDEX                      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 01. Executive Charter: Policy Owner Services Operations Strategy & Mandate  │
│ 02. Operations Overall Strategy: Resilience, Sustainable Workload & Ownership│
│ 03. BAU Priority 1: OTP Verification & Dual-Language 510-Char Pending Revamp│
│ 04. Automation Priority: IBM Systems Integration & 30+ Microservices APIs   │
│ 05. Governance Priority 1: GenAI AML & Nice Actimize Executive Screening    │
│ 06. Governance Priority 2: CRS 2.0 Regulatory Target & CRS Statement Engine │
│ 07. Governance Priority 3: IRD 700 Audit Remediation, GIA & Smart ID eKYC   │
│ 08. HNW Priority: TxH Handler Readiness & Agency Distribution Expansion     │
│ 09. Business Partner Priority: Single POC Case Resolution & AI Onboarding   │
│ 10. Cashier Priority: 24/7 Virtual Cashier Kiosk Feasibility & Multi-Pay    │
│ 11. Payment Solutions Priority: Stablecoin Settlement & 2-Week FPS Autopay  │
│ 12. Payment Solutions Priority: Project Bamboo AIAE Transition & AML Audit  │
│ 13. Lessons Learned 1: Witness Signature Streamlining & Bi-Monthly POS Tips │
│ 14. Lessons Learned 2: Product SelectWise In-Line Exclusion Declaration     │
│ 15. Lessons Learned 3: Change of Ownership Digital Leap (iVerify & POSA)   │
│ 16. Lessons Learned 4: Mandatory e-Advice Transformation & ESG Carbon Gains │
│ 17. Lessons Learned 5: IRD CRS On-Site Inspection & MonQ HNW SLA Framework  │
│ 18. Lessons Learned 6: Citibank Lockbox Migration & Secure Payment Infra    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Google Slides API Client Integration**:
  - *Chosen Approach*: Use client-side Google OAuth with Firebase Auth (popup flow) and direct calls to `https://slides.googleapis.com/v1/presentations` via `batchUpdate` requests.
  - *Why*: Eliminates complex backend proxy requirements and conforms strictly to Google Workspace guidelines for AI Studio preview apps.
  - *Trade-off*: Handles Google Slides API quota and batch limits cleanly by chunking slide creation calls.
- **Decision 2: Rich SVG & CSS Visual Frameworks In-App**:
  - *Chosen Approach*: Each slide in the web presenter is rendered with native SVG process diagrams, timeline bars, and multi-column architecture cards.
  - *Why*: Delivers crisp vector fidelity on desktop viewports, responsive scaling, and instant printability.
- **Decision 3: Speaker Notes and Context Engine**:
  - *Chosen Approach*: Embed complete operational commentary, background context, and talking points directly into each slide data model, exported both to Google Slides Speaker Notes and visible in the in-app presenter.

---

## 5. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          SYSTEM ARCHITECTURE FLOW                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                         Presentation Data                           │   │
│   │  (18 Exhaustive Slides: Strategy, Priorities, Innovation Artifacts) │   │
│   └──────────────────────────────────┬──────────────────────────────────┘   │
│                                      │                                      │
│                  ┌───────────────────┴───────────────────┐                  │
│                  ▼                                       ▼                  │
│   ┌──────────────────────────────┐        ┌─────────────────────────────┐   │
│   │  Interactive Slide Presenter │        │  Google Workspace Exporter  │   │
│   │  - Executive High-Density UI │        │  - Firebase Google Auth     │   │
│   │  - Category Filter & Nav     │        │  - Google Slides REST API   │   │
│   │  - Process Flow & SVG Timelines│      │  - presentations.batchUpdate│   │
│   │  - Speaker Notes Drawer      │        │  - Direct Drive Link Launch │   │
│   │  - Fullscreen Presentation   │        └──────────────┬──────────────┘   │
│   └──────────────────────────────┘                       │                  │
│                                                          ▼                  │
│                                           ┌─────────────────────────────┐   │
│                                           │ Google Slides Presentation  │   │
│                                           │ in User's Google Drive      │   │
│                                           └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Planned Implementation Steps
1. **OAuth Setup**: Configure OAuth scopes (`https://www.googleapis.com/auth/presentations`, `https://www.googleapis.com/auth/drive.file`) using the `set_up_oauth` tool.
2. **Slide Dataset Assembly**: Construct the structured 18-slide dataset in `src/data/slidesData.ts` with comprehensive business copy, frameworks, timelines, metrics, and diagrams.
3. **Presenter Components**:
   - `SlidePresenter.tsx`: Master slide frame, aspect ratio container (16:9), header contract, and presentation controls.
   - `SlideDiagrams.tsx`: Dedicated diagram components (IBM Microservices architecture, AML GenAI pipeline, CRS timeline, Virtual Cashier kiosk flow, and Ownership change sequence).
   - `SlideIndexModal.tsx`: Grid overview of all 18 slides for quick navigation.
   - `SpeakerNotesDrawer.tsx`: Collapsible notes with audit references and operational talking points.
4. **Google Slides Export Engine (`src/services/slidesExporter.ts`)**:
   - Firebase Google Auth popup integration with cached token.
   - Presentation creation via Google Slides API (`POST /v1/presentations`).
   - Batch requests injecting structured slides, title banners, content containers, timeline boxes, and speaker notes.
5. **AIA Branding Polish**:
   - Header with AIA POS insignia, title wordmark, slide counters, category tabs, and export actions.
   - Full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Space`, `Escape`).
