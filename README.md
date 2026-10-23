# AIA Hong Kong Policy Owner Services (POS) — Operations Strategy & Innovation Presentation

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Google Workspace](https://img.shields.io/badge/Google%20Slides-Integrated-EA4335.svg)](https://developers.google.com/slides)
[![PowerPoint](https://img.shields.io/badge/PowerPoint-.PPTX%20Available-D24726.svg)](public/AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx)

An executive presentation platform, interactive deck viewer, and Google Slides/PowerPoint generator built for **AIA Hong Kong Policy Owner Services (POS)**.

This repository contains the complete **18-slide high-density operational roadmap**, synthesizing POS operations overall strategy, 2026–2028 functional priorities, and lesson-learned innovation achievements.

---

## Quick Links & Presentation Assets

| Asset | Format | GitHub Visibility | Description |
| :--- | :--- | :--- | :--- |
| **[Interactive Slide Document](PRESENTATION.md)** | Markdown (`.md`) | **100% Native on GitHub** | View and read all 18 slides with tables, ASCII diagrams, and speaker notes directly on GitHub. |
| **[PowerPoint Deck Binary](public/AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx)** | Binary (`.pptx`) | Downloadable | Full 18-slide 16:9 widescreen presentation compatible with Microsoft PowerPoint and Google Slides. |
| **Interactive Web Presenter** | Web SPA | Interactive | In-app presentation mode with keyboard controls (`←` / `→` / `F`), category filtering, and direct Google Slides cloud export. |

---

## 18-Slide Master Index

### Section 1: Operations Overall Strategy
- **Slide 01**: Executive Operational Charter & 3-Year Strategic Horizon (2026–2028)
- **Slide 02**: Operations Overall Strategy: Change Resilience, Sustainable Workload & Cross-Team Accountability

### Section 2: Functional Priorities and Commitments
- **Slide 03**: BAU Priority: Digital OTP Verification & 510-Character Dual-Language Pending Message Revamp
- **Slide 04**: Automation Priority: IBM Systems Integration & ~30 Microservices APIs (26-Week Cadence)
- **Slide 05**: Governance Priority: GenAI AML Project (Nice Actimize Name Screening Target Q1 2027) & EDD Modules
- **Slide 06**: Governance Priority: CRS 2.0 Regulatory Roadmap (1 Jan 2027 Admin / 1 Jan 2028 Reporting) & CRS Statement
- **Slide 07**: Governance Priority: IRD 700 Policy Audit Review Action, GIA Continuous Audits & Smart ID eKYC
- **Slide 08**: HNW Priority: TxH Handler Readiness (Trusts & Assignments) & Agency Servicing Model Expansion
- **Slide 09**: Business Partner Priority: One Stop Case Resolution (Single Point of Contact) & 3-Year Agency Education
- **Slide 10**: Cashier Priority: 24/7 Virtual Cashier Kiosk (Cash Deposit Machine Terminal) Feasibility Study
- **Slide 11**: Payment Solutions: Stablecoin Settlement Exploration & Accelerated Autopay (2 Weeks via CitiDirect/FPS)
- **Slide 12**: Payment Solutions: Project Bamboo AIAE-to-AIAI Transition & Strengthened Payment Risk AML Monitoring

### Section 3: Lessons Learned & Innovation Sharing
- **Slide 13**: Lessons Learned 1: Witness Signature Streamlining & Bi-Monthly POS Tips for Agency Force
- **Slide 14**: Lessons Learned 2: Product "SelectWise" In-Line Declaration for Existing Exclusions and Loadings
- **Slide 15**: Lessons Learned 3: Change of Ownership Digital Leap: iChange-iVerify Linkage & POSA Auto-Population
- **Slide 16**: Lessons Learned 4: Mandatory e-Advice Rollout, Customer Exception Management & ESG Sustainability
- **Slide 17**: Lessons Learned 5: IRD On-Site CRS Audit Inspection (700 Accounts) & MonQ HNW SLA Framework
- **Slide 18**: Lessons Learned 6: Citibank Lockbox Migration & Payment Infrastructure Modernization (WS_FTP to CitiDirect)

---

## Key Features

1. **AIA Corporate Signature Design**:
   - Institutional insurance palette (`#D31145` AIA Red, Deep Sapphire `#0B192C`, Slate `#1E293B`, and Clean Warm Gray `#F8FAFC`).
   - High-density information design leaving zero blank spaces, complete with business frameworks and process diagrams.
   - Monospace tabular numerals (`tabular-nums font-mono`) for all operational metrics, turnaround times, and SLAs.

2. **1-Click Export to Google Slides**:
   - Client-side Firebase Google Workspace OAuth flow requesting `presentations` and `drive.file` scopes.
   - Automated `batchUpdate` requests generating a complete 18-slide deck directly in your Google Drive with title cards, KPI strips, structured content pillars, and speaker notes.

3. **Client & Server-Side PPTX Generator**:
   - Generates native PowerPoint `.pptx` presentations on-the-fly both via Node.js script (`scripts/generate_pptx.ts`) and directly in the browser via `pptxgenjs`.

4. **Executive Presenter Experience**:
   - Fullscreen presentation mode (`F` key) with responsive 16:9 widescreen scaling.
   - Expandable **Executive Speaker Notes & Regulatory Context Drawer** for talking points and compliance guardrails.
   - Offline **Print / Save as PDF** support rendering all 18 slides continuously.

---

## Local Development & Setup

### Prerequisites
- Node.js (v20+ recommended)
- npm or bun

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/aia-hk-pos-presentation.git
cd aia-hk-pos-presentation

# Install dependencies
npm install
```

### Running the Dev Server
```bash
npm run dev
# The application will start at http://localhost:3000
```

### Re-generating the PowerPoint File
```bash
npx tsx scripts/generate_pptx.ts
# Generates and outputs public/AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx
```

### Building for Production
```bash
npm run build
```

---

## Technology Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       AIA HK POS PRESENTATION SUITE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      18-Slide Master Dataset                        │   │
│   │                    (src/data/slidesData.ts)                         │   │
│   └──────────────────────────────────┬──────────────────────────────────┘   │
│                                      │                                      │
│                  ┌───────────────────┼───────────────────┐                  │
│                  ▼                   ▼                   ▼                  │
│   ┌────────────────────────┐ ┌────────────────┐ ┌───────────────────────┐   │
│   │ Interactive Web Deck   │ │ GitHub Document│ │ Google Slides API     │   │
│   │ - Responsive 16:9      │ │ - PRESENTATION │ │ - Firebase Auth Popup │   │
│   │ - Fullscreen / Print   │ │   .md Markdown │ │ - Direct Drive Link   │   │
│   │ - Speaker Notes Drawer │ │ - Tables & SVG │ │ - batchUpdate Chunks  │   │
│   └────────────────────────┘ └────────────────┘ └───────────────────────┘   │
│                  │                                       │                  │
│                  └───────────────────┬───────────────────┘                  │
│                                      ▼                                      │
│                       ┌──────────────────────────────┐                      │
│                       │   pptxgenjs PowerPoint Build │                      │
│                       │   (.pptx binary in /public)  │                      │
│                       └──────────────────────────────┘                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Governance & Compliance

All initiatives and frameworks documented within this deck preserve strict segregation of duties (SoD), internal audit traceability, and full compliance with:
- Insurance Authority Guideline on Anti-Money Laundering and Counter-Terrorist Financing (GL3)
- Hong Kong Inland Revenue Department (IRD) Automatic Exchange of Financial Account Information (AEOI / CRS)
- HKMA Cybersecurity Fortification Initiative and AIA Group InfoSec Standards

---
*Maintained by AIA Hong Kong Policy Owner Services Operations Team*
