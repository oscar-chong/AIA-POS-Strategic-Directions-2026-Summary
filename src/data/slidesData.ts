export interface MetricCard {
  label: string;
  value: string;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral' | 'target';
}

export interface PillarCard {
  title: string;
  kicker?: string;
  description: string;
  bulletPoints: string[];
  tags?: string[];
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  owner?: string;
  description: string;
  timing?: string;
}

export interface TimelineMilestone {
  date: string;
  title: string;
  status: 'completed' | 'in_progress' | 'target' | 'planned';
  details: string;
}

export interface SlideData {
  id: number;
  category: 
    | 'Overall Strategy'
    | 'BAU Priorities'
    | 'Automation'
    | 'Governance'
    | 'HNW Servicing'
    | 'Business Partner'
    | 'Cashier & Payment'
    | 'Lessons Learned & Innovation';
  categoryNumber: '01' | '02' | '03';
  title: string;
  subtitle: string;
  tagline: string;
  metrics: MetricCard[];
  pillars: PillarCard[];
  workflow?: {
    type: 'process' | 'architecture' | 'comparison' | 'timeline' | 'governance';
    caption: string;
    steps?: WorkflowStep[];
    timeline?: TimelineMilestone[];
    comparisonRows?: { dimension: string; before: string; after: string; impact: string }[];
  };
  keyTakeaways: string[];
  speakerNotes: string;
  regulatoryNotice?: string;
}

export const SLIDES_DATA: SlideData[] = [
  // -------------------------------------------------------------
  // SLIDE 1: Executive Title & Operational Mandate
  // -------------------------------------------------------------
  {
    id: 1,
    category: 'Overall Strategy',
    categoryNumber: '01',
    title: 'AIA Hong Kong Policy Owner Services (POS)',
    subtitle: 'Operations Strategy, 2026–2028 Functional Priorities & Innovation Roadmap',
    tagline: 'Delivering change resilience, sustainable capacity, risk governance, and customer-first digital modernization.',
    metrics: [
      { label: 'Strategic Pillars', value: '3', subtext: 'Resilience · Wellbeing · Accountability' },
      { label: 'Core Functional Domains', value: '6', subtext: 'BAU · Auto · Gov · HNW · BP · Cashier' },
      { label: 'Key Digital Initiatives', value: '18+', subtext: '2026–2028 Delivery Roadmap' },
      { label: 'Microservices APIs', value: '~30', subtext: 'IBM POS Modernization Architecture' },
    ],
    pillars: [
      {
        title: 'Executive Operational Mandate',
        kicker: 'Strategic Direction',
        description: 'Positioning AIA Hong Kong Policy Owner Services as a high-performing, digitally connected, and risk-resilient operations powerhouse.',
        bulletPoints: [
          'Strengthening operational resilience through proactive employee decision-making and sustainable workload management.',
          'Accelerating end-to-end customer and agent turnaround times across digital channels (AIA+, iChange, iVerify).',
          'Institutionalizing enterprise governance across Anti-Money Laundering (AML), Common Reporting Standard (CRS 2.0), and IRD audits.',
          'Deepening High-Net-Worth (HNW) multi-channel expansion across brokerage, bancassurance, and agency forces.',
        ],
        tags: ['Resilience', 'Customer-First', 'Governance', 'Digital Scale'],
      },
      {
        title: 'Three-Year Transformation Horizon',
        kicker: 'Roadmap Cadence',
        description: 'Multi-stage evolution from foundational BAU simplification in 2026 to automated microservices and GenAI servicing in 2027–2028.',
        bulletPoints: [
          '2026 Foundations: Witness signature streamlining, MonQ HNW SLA rollout, lockbox transition, and mandatory e-advice.',
          '2027 Accelerations: IBM microservices API deployment (~30 integrations), Nice Actimize GenAI AML, and 2-week FPS Autopay.',
          '2028 Horizons: CRS 2.0 full reporting mandate, extended GenAI transaction review modules, and stablecoin payment readiness.',
        ],
        tags: ['2026 Milestones', '2027 Targets', '2028 Horizon'],
      },
    ],
    workflow: {
      type: 'timeline',
      caption: 'Three-Year Strategic Horizon Timeline',
      timeline: [
        { date: '2026 H1–H2', title: 'Operational Streamlining & Governance', status: 'completed', details: 'MonQ HNW launch, e-Advice rollout, IRD 700 audit response, and Citibank lockbox migration.' },
        { date: '2027 Q1', title: 'GenAI AML & Core Modernization', status: 'target', details: 'Nice Actimize Name Screening with GenAI decision support; IBM 30+ microservices API build.' },
        { date: '2027 H2', title: 'Payment & Customer Autopay Acceleration', status: 'target', details: 'DDM CitiDirect & FPS Autopay (2-week turnaround), Project Bamboo AIAE portfolio transfer.' },
        { date: '2028 Jan 1', title: 'CRS 2.0 Statutory Reporting Regime', status: 'planned', details: 'Full regulatory compliance with tightened OECD Common Reporting Standard reporting framework.' },
      ],
    },
    keyTakeaways: [
      'POS Operations is advancing on three unified fronts: People Resilience, Systems Automation, and Rigorous Governance.',
      'Execution spans day-to-day servicing (BAU) through enterprise-level partnerships (IBM, CitiDirect, Nice Actimize).',
    ],
    speakerNotes: 'Welcome executive leadership. This deck encapsulates our comprehensive operational agenda for AIA HK Policy Owner Services. We will review our strategic pillars, functional project commitments, and the concrete lessons learned and innovations delivered across 2026.',
  },

  // -------------------------------------------------------------
  // SLIDE 2: Operations Overall Strategy
  // -------------------------------------------------------------
  {
    id: 2,
    category: 'Overall Strategy',
    categoryNumber: '01',
    title: 'Operations Overall Strategy: Three Core Pillars',
    subtitle: 'Strengthening Change Resilience, Sustainable Workload, and Cross-Team Accountability',
    tagline: 'Fostering an adaptive, high-trust workforce that turns continuous organizational change into operational excellence.',
    metrics: [
      { label: 'Focus Areas', value: '3 Pillars', subtext: 'Resilience · Wellbeing · Accountability' },
      { label: 'Workload Audits', value: 'Quarterly', subtext: 'Proactive capacity & stress reviews' },
      { label: 'Rework Target', value: '-35%', subtext: 'Lowering avoidable pending iterations' },
      { label: 'Escalation Speed', value: 'Real-Time', subtext: 'Early impediment identification' },
    ],
    pillars: [
      {
        title: 'Strengthen Change Resilience',
        kicker: 'People & Adaptability',
        description: 'Building on elevated employee engagement by empowering staff to understand macro priorities and navigate organizational transitions.',
        bulletPoints: [
          'Empower frontline staff to contribute improvement ideas, make confident decentralized decisions, and resolve standard exceptions.',
          'Demystify complex system transformations (IBM microservices, GenAI) through clear milestone communication and role-specific roadmaps.',
          'Build psychological safety and change-agility so teams adapt smoothly to regulatory mandates (CRS 2.0, IRD guidelines).',
        ],
        tags: ['Empowerment', 'Decentralized Decisions', 'Change Agility'],
      },
      {
        title: 'Wellbeing & Sustainable Workload',
        kicker: 'Capacity & Longevity',
        description: 'Balancing peak servicing demands with proactive workload governance, realistic sprint planning, and dedicated recovery time.',
        bulletPoints: [
          'Regularly audit team capacity allocations, setting achievable servicing SLAs and realistic deployment timelines.',
          'Encourage early escalation of processing bottlenecks and backlog surges to prevent frontline burnout and cognitive fatigue.',
          'Provide structured employee wellbeing, mental health support, and adequate post-cycle recovery following major regulatory filings.',
        ],
        tags: ['Capacity Governance', 'Early Escalation', 'Burnout Prevention'],
      },
      {
        title: 'Enhance Collaboration & Accountability',
        kicker: 'Cross-Functional Execution',
        description: 'Eliminating functional silos between POS operations, agency forces, legal/compliance, IT, and external banking partners.',
        bulletPoints: [
          'Establish unambiguous operating expectations, shared OKRs, and mutual accountability across servicing handoffs.',
          'Institutionalize regular multi-stakeholder feedback loops with Agency, Brokerage, and Compliance to address root causes.',
          'Radically reduce operational rework and duplicate document submissions to achieve superior first-time-right case completion.',
        ],
        tags: ['Shared Ownership', 'Silo Elimination', 'Zero Rework'],
      },
    ],
    workflow: {
      type: 'comparison',
      caption: 'Operational Culture Shift: Legacy vs. Future Target Operating State',
      comparisonRows: [
        { dimension: 'Decision Authority', before: 'Centralized senior escalations for standard exceptions', after: 'Empowered frontline handlers guided by automated rule engines', impact: 'Turnaround time reduced by 40%' },
        { dimension: 'Workload Management', before: 'Reactive overtime during month-end / audit spikes', after: 'Continuous capacity monitoring & dynamic cross-pod load balancing', impact: 'Lower staff turnover & sustained morale' },
        { dimension: 'Inter-team Handoffs', before: 'Fragmented blame between Agency submissions and POS pending', after: 'Shared accountability, clear SLA contracts, and Bi-monthly POS tips', impact: 'Avoidable pending cases halved' },
      ],
    },
    keyTakeaways: [
      'Change resilience is our bedrock: we equip teams to actively shape improvements rather than reactively absorb changes.',
      'Sustainable workload management directly protects accuracy and reduces risk in high-stakes regulatory processing.',
    ],
    speakerNotes: 'Our operations strategy rests on human capability. Without change resilience and sustainable workloads, large-scale automation projects fail to achieve operational adoption. We are shifting from reactive firefighting to proactive, accountable case stewardship.',
  },

  // -------------------------------------------------------------
  // SLIDE 3: BAU Priority 1 - OTP Verification & Pending Revamp
  // -------------------------------------------------------------
  {
    id: 3,
    category: 'BAU Priorities',
    categoryNumber: '02',
    title: 'BAU Modernization: Digital OTP Verification & Pending Revamp',
    subtitle: 'Eliminating Signature Pending Discrepancies and Clarifying Agent Communication Channels',
    tagline: 'Replacing error-prone ink signature verification with instant SMS/email OTP while radically upgrading pending message clarity.',
    metrics: [
      { label: 'Pending Msg Limit', value: '510 Chars', subtext: 'Up from 70 EN / 31 ZH (+628%)' },
      { label: 'Language Format', value: 'Dual EN/ZH', subtext: 'Separate 510-character buffers' },
      { label: 'Signature Pendings', value: '-60% Est.', subtext: 'OTP eliminates discrepancy checks' },
      { label: 'Adoption Target', value: '2027', subtext: 'Legal & Compliance review in-flight' },
    ],
    pillars: [
      {
        title: 'iChange OTP Authentication Enablement',
        kicker: 'Digital Security',
        description: 'Transitioning customer request authentication from manual signature verification to secure One-Time Password (OTP) verification.',
        bulletPoints: [
          'Targeting high-volume policy servicing request types to eliminate signature discrepancy pending cases.',
          'Dramatically reduces customer friction, avoids branch/agent re-signing visits, and accelerates straight-through processing (STP).',
          'Currently undergoing rigorous review with Legal & Compliance to expand approved servicing request types throughout 2027.',
        ],
        tags: ['iChange OTP', 'Signature Elimination', '2027 Compliance Expansion'],
      },
      {
        title: 'Comprehensive Pending Message Revamp',
        kicker: 'Clear Communication',
        description: 'Expanding message limits from legacy 70 (EN) / 31 (ZH) characters to 510 separate characters for English and Chinese.',
        bulletPoints: [
          'Eliminates cryptic legacy abbreviations, truncated explanations, split pending notices, and obsolete alphanumeric codes.',
          'Embeds clear, dual-language comprehensive requirement descriptions that agents and policyholders can understand on first read.',
          'Directly slashes incoming agent enquiry calls and back-and-forth clarifications, driving immediate submission remediation.',
        ],
        tags: ['510 Characters', 'Dual Language', 'Zero Cryptic Codes'],
      },
    ],
    workflow: {
      type: 'process',
      caption: 'Streamlined Customer Request Journey with OTP vs. Legacy Signature Verification',
      steps: [
        { stepNumber: '01', title: 'Request Submission', owner: 'Customer / Agent', description: 'Customer initiates policy change in iChange or AIA+ portal', timing: 'Instant' },
        { stepNumber: '02', title: 'Dual-Factor OTP Auth', owner: 'AIA Auth Engine', description: 'SMS / Email OTP sent to verified mobile; instant biometric/OTP verification', timing: '< 30 sec' },
        { stepNumber: '03', title: 'Validation & Servicing', owner: 'Core POS Engine', description: 'Automated rules engine validates request without signature comparison queue', timing: 'Automated' },
        { stepNumber: '04', title: 'Revamped Pending Notice', owner: 'Messaging Subsystem', description: 'If exception occurs, 510-char dual-language explicit guidance is dispatched', timing: 'Immediate' },
      ],
    },
    keyTakeaways: [
      'Signature discrepancies represent one of our largest historical pending drivers; OTP is the structural cure.',
      'Expanding message character limits from 70 to 510 characters eradicates ambiguous instructions and agent confusion.',
    ],
    speakerNotes: 'Slide 3 covers our core BAU commitments. For years, signature discrepancy pending notices caused frustration between agents and POS. With OTP verification in iChange and 510-character clear dual-language pending messages, we cut rework at the source.',
    regulatoryNotice: 'OTP expansion across high-risk transaction types remains subject to Legal & Compliance risk assessment and HKMA/IA guidelines.',
  },

  // -------------------------------------------------------------
  // SLIDE 4: Automation Priority - IBM Partnership & Systems Integration
  // -------------------------------------------------------------
  {
    id: 4,
    category: 'Automation',
    categoryNumber: '02',
    title: 'Automation Priority: IBM POS Modernization & Systems Integration',
    subtitle: 'Deploying ~30 Core APIs and a Microservices Target Operating Model over a 26-Week Cadence',
    tagline: 'Partnering with IBM as end-to-end Systems Integrator to dismantle legacy monolithic barriers and unlock agile digital servicing.',
    metrics: [
      { label: 'API Integrations', value: '~30 APIs', subtext: 'Policy Admin · CRM · Data Lake' },
      { label: 'Delivery Cadence', value: '26 Weeks', subtext: 'Structured sprint delivery model' },
      { label: 'Hypercare Support', value: '60 Days', subtext: 'Post-implementation warranty' },
      { label: 'Testing Rigor', value: 'SIT/UAT/NFT', subtext: 'Full formal test artifact governance' },
    ],
    pillars: [
      {
        title: 'IBM as Systems Integrator (Beyond Advisory)',
        kicker: 'Strategic Partnership',
        description: 'IBM engaged not merely for architectural advice, but as the accountable Systems Integrator executing the full software build.',
        bulletPoints: [
          'End-to-end architectural engineering, custom microservices development, and core system integration.',
          'Seamless linkage across core policy administration systems (PAS), enterprise CRM platforms, and corporate data lakes.',
          'Modern target operating model (TOM) providing high-throughput, decoupled servicing capabilities.',
        ],
        tags: ['Systems Integrator', 'End-to-End Build', 'Decoupled Core'],
      },
      {
        title: 'Rigorous 26-Week Delivery Cadence',
        kicker: 'Engineering Discipline',
        description: 'Structured 26-week software development lifecycle backed by comprehensive verification artifacts and post-go-live stabilization.',
        bulletPoints: [
          'Full SIT (System Integration Testing), UAT (User Acceptance Testing), and NFT (Non-Functional Performance & Security Testing).',
          'Production readiness gates and automated deployment pipelines ensuring zero unscheduled downtime.',
          '60-day dedicated post-implementation hypercare support to monitor latency, resolve defects, and tune system throughput.',
        ],
        tags: ['26-Week SDLC', '60-Day Hypercare', 'NFT Performance'],
      },
    ],
    workflow: {
      type: 'architecture',
      caption: 'Target Microservices Integration Architecture (IBM POS Modernization)',
      steps: [
        { stepNumber: 'Frontends', title: 'Channel Layer', owner: 'AIA+ / iChange / Agent POSA', description: 'Unified customer & agent digital endpoints sending standardized JSON requests', timing: 'Omnichannel' },
        { stepNumber: 'Gateway', title: 'API Management Layer', owner: 'IBM Integration Bus', description: 'Rate limiting, OAuth security validation, and intelligent request routing (~30 APIs)', timing: '< 20ms' },
        { stepNumber: 'Services', title: 'Microservices Core', owner: 'Containerized Services', description: 'Independent policy servicing domains (Ownership, Beneficiary, Contact, Premium)', timing: 'Event-driven' },
        { stepNumber: 'Backends', title: 'Core Enterprise Legacy', owner: 'Mainframe PAS & CRM', description: 'Decoupled legacy policy admin engines, data lakes, and financial ledgers', timing: 'Batch & Real-time' },
      ],
    },
    keyTakeaways: [
      'IBM is on the hook for concrete code delivery, not just high-level PowerPoint roadmaps.',
      'The ~30 APIs unlock straight-through processing for policy alterations, directly powering our digital customer journeys.',
    ],
    speakerNotes: 'Slide 4 presents our largest technology capital investment: the IBM POS Modernization. IBM is acting as our end-to-end Systems Integrator. They are deploying 30 microservices APIs over a strict 26-week cadence with 60 days of post-implementation hypercare.',
  },

  // -------------------------------------------------------------
  // SLIDE 5: Governance Priority 1 - GenAI AML Project
  // -------------------------------------------------------------
  {
    id: 5,
    category: 'Governance',
    categoryNumber: '02',
    title: 'Governance: GenAI Project on Anti-Money Laundering (AML)',
    subtitle: 'Nice Actimize Automated Screening and Multi-Phase Enhanced Due Diligence (EDD) Workflow',
    tagline: 'Harnessing generative AI to elevate sanctions screening precision, synthesize complex dossiers, and streamline executive approvals.',
    metrics: [
      { label: 'Initial Target', value: 'Q1 2027', subtext: 'Nice Actimize Name Screening' },
      { label: 'Subsequent Modules', value: '5 Modules', subtext: 'Dow Jones · IDV · SOW/SOF · Trans' },
      { label: 'Scope of Review', value: 'POS & HRC', subtext: 'POS Change EDD · Ad Hoc · HRC' },
      { label: 'Decisioning', value: 'AI Assisted', subtext: 'Human-in-the-loop senior sign-off' },
    ],
    pillars: [
      {
        title: 'Phase 1: Nice Actimize Screening (Q1 2027 Target)',
        kicker: 'Name Screening & Triage',
        description: 'Deploying an end-to-end automated screening workflow connecting Nice Actimize with generative AI assessment engines.',
        bulletPoints: [
          'Automated case intake and intelligent assignment based on risk score, policy size, and alert typology.',
          'AI-assisted preliminary assessment: model contextualizes false positives against customer transaction histories and official lists.',
          'Structured decision summary generated for compliance officers, streamlining the path to Senior Management approval.',
        ],
        tags: ['Nice Actimize', 'Q1 2027 Target', 'Senior Approval Flow'],
      },
      {
        title: 'Phase 2: Advanced EDD Assessment Modules',
        kicker: 'Subsequent Expansion',
        description: 'Scaling generative capabilities into deep investigative modules for complex customer profiles and High-Risk Customer (HRC) reviews.',
        bulletPoints: [
          'Dow Jones Adverse Media & PEP Search integration with automated relevance scoring and summary extraction.',
          'Identity Verification (IDV) cross-referencing and Source of Wealth / Source of Funds (SOW/SOF) plausibility evaluation.',
          'Specialized transaction review modules supporting POS Change EDD, Ad Hoc EDD, and periodic HRC compliance reassessments.',
        ],
        tags: ['Dow Jones Search', 'SOW/SOF Analysis', 'HRC Case Reviews'],
      },
    ],
    workflow: {
      type: 'process',
      caption: 'End-to-End GenAI AML Screening & Senior Management Approval Pipeline',
      steps: [
        { stepNumber: '01', title: 'Automated Case Intake', owner: 'Nice Actimize Engine', description: 'Screening alert generated on policy change request or periodic name batch', timing: 'Instant' },
        { stepNumber: '02', title: 'GenAI Contextualization', owner: 'AIA GenAI Copilot', description: 'Aggregates Dow Jones hits, historical filings, and cross-checks customer profile', timing: '< 2 mins' },
        { stepNumber: '03', title: 'Investigator Review', owner: 'AML Compliance Officer', description: 'Officer reviews AI synthesized dossier, notes discrepancies, validates facts', timing: 'Streamlined' },
        { stepNumber: '04', title: 'Senior Approval', owner: 'Senior Management', description: 'One-click executive approval pack with complete regulatory audit trail', timing: 'Same-day SLA' },
      ],
    },
    keyTakeaways: [
      'GenAI dramatically cuts false-positive research time while strengthening audit consistency.',
      'Strict human-in-the-loop governance: AI assists and synthesizes, but Senior Management retains ultimate sign-off.',
    ],
    speakerNotes: 'Slide 5 highlights our GenAI AML initiative. We are partnering with Nice Actimize, targeting Q1 2027 for phase 1. Generative AI will synthesize complex customer dossiers and Dow Jones media hits, dramatically cutting manual research time while ensuring Senior Management has full auditability.',
    regulatoryNotice: 'Full alignment with HKMA AML/CFT guidelines and Insurance Authority Guideline on Anti-Money Laundering (GL3).',
  },

  // -------------------------------------------------------------
  // SLIDE 6: Governance Priority 2 - CRS 2.0 & Statement Project
  // -------------------------------------------------------------
  {
    id: 6,
    category: 'Governance',
    categoryNumber: '02',
    title: 'Governance: CRS 2.0 Development & CRS Statement Project',
    subtitle: 'Preparing for Tightened OECD Due Diligence and Comprehensive Customer Tax Declaration Statements',
    tagline: 'Executing a multi-year regulatory overhaul to satisfy 1 Jan 2027 administrative rules and 1 Jan 2028 statutory reporting.',
    metrics: [
      { label: 'Admin Mandate', value: '1 Jan 2027', subtext: 'Tightened Due Diligence rules' },
      { label: 'Reporting Mandate', value: '1 Jan 2028', subtext: 'Inland Revenue Dept reporting' },
      { label: 'Stakeholder Team', value: 'Joint WG', subtext: 'POS · Legal · Tax · IT · Agency' },
      { label: 'Customer Tool', value: 'CRS Statement', subtext: 'Multi-jurisdiction tax declaration' },
    ],
    pillars: [
      {
        title: 'CRS 2.0 Comprehensive System Enhancements',
        kicker: 'Regulatory Overhaul',
        description: 'Implementing an extensive matrix of inter-related system enhancements and operational procedures per OECD tightened CRS rules.',
        bulletPoints: [
          'Upgrading self-certification forms, validation engines, and change-in-circumstance monitoring protocols.',
          'Enforcing strict automated controls across controlling persons, tax residency declarations, and TIN validations.',
          'Two-phase statutory timeline: Administrative framework live 1 Jan 2027; full reporting requirement live 1 Jan 2028.',
        ],
        tags: ['OECD CRS 2.0', '1 Jan 2027 Admin', '1 Jan 2028 Reporting'],
      },
      {
        title: 'Customer CRS Statement Project',
        kicker: 'Customer Transparency',
        description: 'Exploring and implementing customer-facing CRS statements to facilitate cross-border tax declaration across relevant jurisdictions.',
        bulletPoints: [
          'Formed dedicated cross-functional workgroup across POS, Tax, Legal, Compliance, and IT stakeholders.',
          'Provides policyholders with certified annual summaries of policy cash values, surrender amounts, and reportable gains.',
          'Directly addresses surging customer demand for transparent tax records, reducing ad-hoc inquiries to customer service centers.',
        ],
        tags: ['CRS Statement', 'Cross-Functional WG', 'Tax Declaration'],
      },
    ],
    workflow: {
      type: 'timeline',
      caption: 'CRS 2.0 Statutory Milestone & System Delivery Roadmap',
      timeline: [
        { date: '2026 Q3–Q4', title: 'Workgroup Formulation & Architecture Gap Analysis', status: 'completed', details: 'Establish cross-functional workgroup; finalize CRS Statement specification and system requirements.' },
        { date: '2027 Jan 1', title: 'CRS 2.0 Administrative Framework Effective Date', status: 'target', details: 'Deploy upgraded self-certification, TIN validation, and enhanced change-in-circumstance triggers.' },
        { date: '2027 Q3', title: 'CRS Statement Customer Portal Pilot', status: 'planned', details: 'Roll out automated downloadable CRS statements in AIA+ portal for eligible policyholders.' },
        { date: '2028 Jan 1', title: 'CRS 2.0 Statutory Reporting Regime Effective Date', status: 'planned', details: 'Full automated batch transmission of annual reportable accounts to Hong Kong Inland Revenue Department.' },
      ],
    },
    keyTakeaways: [
      'CRS 2.0 requires extensive systemic re-plumbing of account records and continuous due diligence.',
      'The CRS Statement project converts a pure regulatory burden into a high-value customer service touchpoint.',
    ],
    speakerNotes: 'Slide 6 outlines our CRS 2.0 roadmap. The OECD has tightened due diligence requirements significantly. The administrative framework becomes effective on 1 January 2027, followed by the reporting mandate on 1 January 2028. Our joint workgroup is also pioneering a customer-facing CRS Statement to facilitate tax declaration.',
  },

  // -------------------------------------------------------------
  // SLIDE 7: Governance Priority 3 - Risk, Audit & eKYC Modernization
  // -------------------------------------------------------------
  {
    id: 7,
    category: 'Governance',
    categoryNumber: '02',
    title: 'Governance: Risk & Compliance Engineering & IRD Remediation',
    subtitle: 'IRD 700 Policy Audit Implementation, GIA Continuous Audits & Smart ID eKYC Integration',
    tagline: 'Hardening operational servicing engines with automated format validators and biometric Smart ID document collection.',
    metrics: [
      { label: 'IRD Scope', value: '700 Policies', subtext: 'Audit feedback rule integration' },
      { label: 'Data Formatting', value: '100% Rules', subtext: 'Address, phone, email format checks' },
      { label: 'Identity Capture', value: 'Smart ID', subtext: 'eKYC embedded in AIA+ / iChange' },
      { label: 'Continuous Audit', value: 'GIA Aligned', subtext: 'Automated policy servicing guardrails' },
    ],
    pillars: [
      {
        title: 'IRD Review Action Implementation (700 Cases)',
        kicker: 'Tax Servicing Compliance',
        description: 'Direct integration of Inland Revenue Department audit findings into automated POS servicing rule engines.',
        bulletPoints: [
          'Rigorous systemic review across 700 sample policy cases identified during IRD compliance inspections.',
          'Hardcoded automated compliance checks within policy alteration rule engines to guarantee tax reporting accuracy.',
          'Eliminates potential for human oversight or discretionary bypass in reportable policy modifications.',
        ],
        tags: ['IRD 700 Cases', 'Automated Rule Engines', 'Tax Compliance'],
      },
      {
        title: 'GIA Continuous Audits & Smart ID eKYC',
        kicker: 'Data Integrity & Identity',
        description: 'Executing audit recommendations from Group Internal Audit (GIA) while modernizing customer identity collection.',
        bulletPoints: [
          'Deployed continuous format validation engines for customer residential addresses, international mobile numbers, and email syntax.',
          'Integrated eKYC technology into AIA+ and iChange to collect authenticated Hong Kong Smart Identity Card (Smart ID) copies.',
          'Guarantees pristine master customer data records, closing gaps identified during internal and external audit reviews.',
        ],
        tags: ['GIA Recommendations', 'Smart ID eKYC', 'Data Hygiene'],
      },
    ],
    workflow: {
      type: 'architecture',
      caption: 'Automated Regulatory Servicing Rule Engine Architecture',
      steps: [
        { stepNumber: 'Capture', title: 'AIA+ / iChange Intake', owner: 'Digital Channels', description: 'Customer inputs change details & scans updated HK Smart ID via camera eKYC', timing: 'Instant' },
        { stepNumber: 'Format Validation', title: 'GIA Continuous Filter', owner: 'Validation Microservice', description: 'Real-time format check: HK address standard, ITU-T phone format, RFC email check', timing: '< 10ms' },
        { stepNumber: 'Tax Compliance', title: 'IRD Rule Engine (700 Cases)', owner: 'Regulatory Servicing Engine', description: 'Evaluates tax classification, controlling person rules, and CRS reportability flags', timing: '< 50ms' },
        { stepNumber: 'Commitment', title: 'Master Core Update', owner: 'Core PAS DB', description: 'Approved update committed to policy ledger with immutable audit trail', timing: 'Synchronous' },
      ],
    },
    keyTakeaways: [
      'GIA and IRD audit feedback is systematically converted into automated software rules rather than manual checklists.',
      'Smart ID eKYC collection in AIA+ ensures regulatory document compliance without requiring branch paper submissions.',
    ],
    speakerNotes: 'Slide 7 details our response to IRD and GIA audit recommendations. We have taken the findings from the 700 policy review cases and baked them directly into automated rule engines. We are also integrating eKYC into AIA+ and iChange to collect updated HK Smart IDs digitally.',
  },

  // -------------------------------------------------------------
  // SLIDE 8: HNW Priority - Handler Readiness & Agency Expansion
  // -------------------------------------------------------------
  {
    id: 8,
    category: 'HNW Servicing',
    categoryNumber: '02',
    title: 'HNW Priority: Handler Readiness & Agency Distribution Expansion',
    subtitle: 'Elevating Complex Case Capabilities and Extending the Servicing Model from Brokerage to Agency',
    tagline: 'Transforming POS High-Net-Worth servicing into a multi-channel center of excellence across trust, ownership, and assignment.',
    metrics: [
      { label: 'Distribution Reach', value: '3 Channels', subtext: 'Brokerage · Bancassurance · Agency' },
      { label: 'Training Visit', value: 'TxH to HK', subtext: 'Deep-dive alignment on complex HNW' },
      { label: 'Complex Cases', value: 'Trust & Assign', subtext: 'Standardized SOPs & checklist rigor' },
      { label: 'Escalation Rate', value: '-45% Target', subtext: 'Frontline technical self-sufficiency' },
    ],
    pillars: [
      {
        title: 'HNW Handler Readiness & Technical Upskilling',
        kicker: 'Specialized Expertise',
        description: 'TxH delegation visit to Hong Kong HNW operations to deliver structured training and strengthen strategic business alignment.',
        bulletPoints: [
          'Substantially elevate frontline handler technical mastery in complex trust arrangements, ownership changes, and collateral assignments.',
          'Equip case officers with advanced legal and compliance frameworks to resolve sophisticated underwriting exceptions independently.',
          'Dramatically improve service quality and turnaround time while slashing unnecessary escalations to legal and senior leadership.',
        ],
        tags: ['TxH Training Visit', 'Trust & Assignments', 'Frontline Empowerment'],
      },
      {
        title: 'Expanding HNW Servicing Model to Agency',
        kicker: 'Channel Diversification',
        description: 'Transitioning the POS HNW servicing model from brokerage and bancassurance to full agency distribution inclusion.',
        bulletPoints: [
          'Creates high-touch operational touchpoints for premier agency leaders serving ultra-high-net-worth (UHNW) policyholders.',
          'Multi-channel distribution broadens customer reach, expands revenue diversification, and democratizes bespoke servicing.',
          'Provides agency clients with dedicated HNW servicing protocols, rapid SLA turnaround, and tailored documentation support.',
        ],
        tags: ['Agency Expansion', 'Multi-Channel Model', 'Revenue Diversification'],
      },
    ],
    workflow: {
      type: 'comparison',
      caption: 'Evolution of AIA HK POS High-Net-Worth Servicing Model',
      comparisonRows: [
        { dimension: 'Channel Coverage', before: 'Confined exclusively to Brokerage & Bancassurance', after: 'Omnichannel: Brokerage, Bancassurance, and Premier Agency Force', impact: 'Direct access for high-producing agents' },
        { dimension: 'Case Handling Capability', before: 'Heavy reliance on senior manager / legal escalations', after: 'Empowered, TxH-certified handlers using standardized trust checklists', impact: 'Case turnaround time shortened by 50%' },
        { dimension: 'Service Touchpoints', before: 'Transactional, reactive email queries', after: 'Proactive end-to-end case tracking and dedicated executive support', impact: 'Superior NPS among high-value clients' },
      ],
    },
    keyTakeaways: [
      'Agency expansion creates substantial new business momentum by bringing institutional HNW servicing to top agents.',
      'TxH training empowers frontline staff to handle intricate trusts and assignments without operational bottlenecks.',
    ],
    speakerNotes: 'Slide 8 presents our High-Net-Worth servicing expansion. Historically, our HNW unit supported brokerage and bancassurance. We are now extending this dedicated servicing model to the agency force, supported by TxH training visits to build deep technical readiness in trusts and assignments.',
  },

  // -------------------------------------------------------------
  // SLIDE 9: Business Partner Priority - One Stop Resolution & AI Learning
  // -------------------------------------------------------------
  {
    id: 9,
    category: 'Business Partner',
    categoryNumber: '02',
    title: 'Business Partner: One Stop Case Resolution & AI Onboarding',
    subtitle: 'Single Point of Contact Model, 3-Year Video Education, and Automated Knowledge Acceleration',
    tagline: 'Unifying request capture, document validation, and execution under dedicated Business Partners backed by AI learning tools.',
    metrics: [
      { label: 'Agency Program', value: '3-Year Rollout', subtext: 'Bite-sized videos & agency visits' },
      { label: 'Staff Onboarding', value: 'Weeks vs Mos', subtext: 'Accelerated by AI knowledge rules' },
      { label: 'Single POC', value: '1 Dedicated BP', subtext: 'End-to-end customer case accountability' },
      { label: 'Governance', value: 'Strict SoD', subtext: 'Segregation of duties for approvals' },
    ],
    pillars: [
      {
        title: 'One Stop Case Resolution Strategy',
        kicker: 'Single Point of Contact',
        description: 'Assigning a dedicated Business Partner as the customer and agent single point of contact from intake to final resolution.',
        bulletPoints: [
          'End-to-End Case Management: BP reviews requirements upfront, validates documents, manages coordination, and follows through.',
          'Enhanced Customer Experience: Seamless, faster, personalized service journey with minimal handoffs and clear ownership.',
          'Risk-Based Governance Controls: Preserves strict segregation of duties (SoD) for approvals, payment releases, and ownership changes.',
        ],
        tags: ['Single Point of Contact', 'End-to-End Ownership', 'Segregation of Duties'],
      },
      {
        title: 'Agency Education & AI-Powered Onboarding',
        kicker: 'Knowledge Acceleration',
        description: 'Comprehensive 3-year agency support initiative combined with an AI learning assistant for incoming POS staff.',
        bulletPoints: [
          'Rollout of bite-sized video tutorials and in-person agency branch visits focusing on first-time-right submissions.',
          'AI-powered learning assistant for new POS staff onboarding, codifying decades of operational rules and industry background.',
          'Accelerates new hire ramp-up time from months to weeks, ensuring immediate processing accuracy and high confidence.',
        ],
        tags: ['3-Year Video Guides', 'AI Learning Assistant', 'First-Time-Right'],
      },
    ],
    workflow: {
      type: 'process',
      caption: 'One Stop Case Resolution Lifecycle with Built-In Segregation of Duties',
      steps: [
        { stepNumber: '01', title: 'Request Intake', owner: 'Dedicated Business Partner', description: 'Single point of contact receives request, verifies completeness upfront', timing: 'Day 0' },
        { stepNumber: '02', title: 'Document Validation', owner: 'Dedicated Business Partner', description: 'Validates all identity, medical, or legal documents; prevents avoidable pending', timing: '< 4 hours' },
        { stepNumber: '03', title: 'Processing Coordination', owner: 'POS Specialist Pod', description: 'Coordinates system updates across core policy administration ledgers', timing: 'Same-day' },
        { stepNumber: '04', title: 'Segregated Approval', owner: 'Independent Approver (SoD)', description: 'Risk check & independent release approval for financial/ownership changes', timing: 'Controlled' },
        { stepNumber: '05', title: 'Customer Resolution', owner: 'Dedicated Business Partner', description: 'Single POC communicates completion directly to agent & customer', timing: 'Closed loop' },
      ],
    },
    keyTakeaways: [
      'The Business Partner acts as the single quarterback for the case, shielding the customer from internal handoffs.',
      'AI-powered learning assistants ensure rapid staff readiness, preventing knowledge loss and operational errors.',
    ],
    speakerNotes: 'Slide 9 details our One Stop Case Resolution strategy. We assign a dedicated Business Partner as the single point of contact. This eliminates ping-pong between departments while maintaining strict segregation of duties for approvals. We are also deploying an AI learning assistant to onboard staff in weeks rather than months.',
  },

  // -------------------------------------------------------------
  // SLIDE 10: Cashier Priority - 24/7 Virtual Cashier Kiosk
  // -------------------------------------------------------------
  {
    id: 10,
    category: 'Cashier & Payment',
    categoryNumber: '02',
    title: 'Cashier Priority: 24/7 Virtual Cashier (CDM Kiosk) Feasibility',
    subtitle: 'Evaluating Multi-Method Self-Service Terminals to Expand After-Hours Servicing and Lower Counter Footprint',
    tagline: 'Designing a 24/7 Cash Deposit Machine kiosk capable of verifying authorized payors and accepting cash, cheques, cards, and e-payments.',
    metrics: [
      { label: 'Operating Window', value: '24/7', subtext: 'Unrestricted round-the-clock access' },
      { label: 'Payment Types', value: '4 Modes', subtext: 'Cash · Cheque · Credit Cards · e-Pay' },
      { label: 'Payor Verification', value: 'Automated', subtext: 'Authorized payor policy check' },
      { label: 'Evaluation Stage', value: 'ROI Feasibility', subtext: 'Hardware · Security · Maintenance' },
    ],
    pillars: [
      {
        title: 'Virtual Cashier Concept & Capabilities',
        kicker: 'Self-Service Terminal',
        description: 'Feasibility study for a 24/7 automated Cash Deposit Machine (CDM) kiosk to handle routine customer premium settlements.',
        bulletPoints: [
          '24/7 self-service terminal capable of real-time validation of authorized payors for specific life and wealth policies.',
          'Multi-method payment acceptance: High-capacity cash recycler, automated cheque scanner, credit card EMV, and e-wallets.',
          'Direct integration with core cashiering ledger for real-time receipt generation and instant policy premium crediting.',
        ],
        tags: ['24/7 Terminal', 'Multi-Method Payment', 'Real-Time Crediting'],
      },
      {
        title: 'Rigorous Feasibility & ROI Evaluation',
        kicker: 'Business Case Rigor',
        description: 'Comprehensive cost-benefit analysis evaluating initial hardware acquisition against long-term counter operational savings.',
        bulletPoints: [
          'Detailed assessment of physical hardware procurement, armored cash collection logistics, and tamper-proof security measures.',
          'Ongoing software maintenance, telecom redundancy, and AML compliance monitoring costs factored into net present value.',
          'Clear ROI gate: Full rollout contingent on demonstrated branch counter queue reduction and customer adoption metrics.',
        ],
        tags: ['Cost-Benefit ROI', 'Security Architecture', 'Branch Optimization'],
      },
    ],
    workflow: {
      type: 'process',
      caption: '24/7 Virtual Cashier Terminal Customer Interaction & Validation Flow',
      steps: [
        { stepNumber: '01', title: 'Policy Identification', owner: 'Customer', description: 'Customer scans policy QR code or inputs policy number at terminal', timing: '10 sec' },
        { stepNumber: '02', title: 'Authorized Payor Check', owner: 'Cashier Rule Engine', description: 'Terminal validates payor relationship against AML & policy owner rules', timing: 'Real-time' },
        { stepNumber: '03', title: 'Multi-Method Tender', owner: 'Hardware Recycler', description: 'Customer deposits cash notes, drops cheque, or taps contactless credit card', timing: '30 sec' },
        { stepNumber: '04', title: 'Instant Ledger Receipt', owner: 'Core Financial Ledger', description: 'Receipt printed / SMS sent; premium credited instantly to policy account', timing: 'Immediate' },
      ],
    },
    keyTakeaways: [
      'The Virtual Cashier delivers 24/7 premium settlement flexibility for customers outside traditional branch banking hours.',
      'Rigorous ROI feasibility ensures capital is deployed effectively, balancing hardware costs against physical counter savings.',
    ],
    speakerNotes: 'Slide 10 reviews the Virtual Cashier kiosk feasibility study. We are evaluating 24/7 self-service terminals capable of verifying authorized payors and accepting cash, cheques, credit cards, and e-payments. A thorough ROI evaluation is underway before full-scale hardware deployment.',
  },

  // -------------------------------------------------------------
  // SLIDE 11: Payment Solutions Priority - Stablecoin & FPS Autopay
  // -------------------------------------------------------------
  {
    id: 11,
    category: 'Cashier & Payment',
    categoryNumber: '02',
    title: 'Payment Solutions: Stablecoin Exploration & Accelerated Autopay',
    subtitle: 'Exploring Digital Asset Premiums while Shortening End-to-End Autopay Setup from 2 Months to 2 Weeks',
    tagline: 'Pioneering future-ready payment rails while drastically compressing Direct Debit Authorization turnaround with bank partners.',
    metrics: [
      { label: 'Autopay Setup', value: '~2 Weeks', subtext: 'Down from ~2 months (-75% TAT)' },
      { label: 'Partner Rails', value: 'CitiDirect & FPS', subtext: 'Direct Debit Mandate modernization' },
      { label: 'Stablecoin Status', value: 'Bank Engaged', subtext: 'Pending regulatory & industry review' },
      { label: 'Target Go-Live', value: '2027', subtext: 'In-progress operational delivery' },
    ],
    pillars: [
      {
        title: 'Accelerate Autopay Customer Journey (Target 2027)',
        kicker: 'Customer Journey Overhaul',
        description: 'Modernizing Direct Debit Mandate (DDM) processing via CitiDirect and FPS-enabled digital setup in partnership with our bank.',
        bulletPoints: [
          'Shortens end-to-end Autopay mandate setup from historical ~2 months down to ~2 weeks, dramatically improving customer satisfaction.',
          'Provides real-time visibility into mandate approvals, bank rejections, and pending exception resolution.',
          'Empowers operations to execute immediate customer follow-ups upon bank return, preventing policy lapsation.',
        ],
        tags: ['CitiDirect & FPS', '2-Week Turnaround', 'Mandate Transparency'],
      },
      {
        title: 'Stablecoin as Premium Payment Currency',
        kicker: 'Next-Gen Currency Rail',
        description: 'Exploring stablecoin settlement for premium payments in close consultation with banking partners and industry regulators.',
        bulletPoints: [
          'Actively engaged by leading tier-1 partner banks to evaluate stablecoin settlement architectures and liquidity rails.',
          'Subject to forthcoming Hong Kong regulatory sandbox approvals and financial industry consensus guidelines.',
          'Positions AIA Hong Kong at the forefront of digital asset wealth management and international currency flexibility.',
        ],
        tags: ['Stablecoin Rail', 'Tier-1 Bank Engaged', 'Regulatory Sandbox'],
      },
    ],
    workflow: {
      type: 'comparison',
      caption: 'Direct Debit Mandate (Autopay) Journey: Legacy vs. CitiDirect + FPS Rail',
      comparisonRows: [
        { dimension: 'Turnaround Time', before: '6–8 weeks (~2 months) via paper mandate circulation', after: '~2 weeks via CitiDirect & FPS electronic verification', impact: '75% reduction in customer waiting time' },
        { dimension: 'Rejection Visibility', before: 'Delayed monthly paper return reports from clearing house', after: 'Near real-time rejection alerts with explicit failure codes', impact: 'Immediate customer outreach before next billing' },
        { dimension: 'Customer Experience', before: 'Multiple paper form re-submissions due to signature mismatches', after: 'Frictionless digital bank account mandate binding', impact: 'Significant reduction in mandate fallout' },
      ],
    },
    keyTakeaways: [
      'Compressing Autopay setup from 2 months to 2 weeks eliminates a major customer pain point and reduces policy lapse risk.',
      'Stablecoin engagement ensures AIA remains ahead of digital asset developments in the Hong Kong financial ecosystem.',
    ],
    speakerNotes: 'Slide 11 highlights our payment rail transformation. Through CitiDirect and FPS Autopay, we are shortening the setup cycle from 2 months to just 2 weeks. On the innovation front, we are actively engaged with banks exploring stablecoin premium payments pending regulatory clearances.',
  },

  // -------------------------------------------------------------
  // SLIDE 12: Payment Solutions Priority - Project Bamboo & Payment AML
  // -------------------------------------------------------------
  {
    id: 12,
    category: 'Cashier & Payment',
    categoryNumber: '02',
    title: 'Payment Continuity: Project Bamboo & Strengthened AML Controls',
    subtitle: 'Safeguarding AIAE-to-AIAI Portfolio Transfer and Hardening Bank-Draft Monitoring Rails',
    tagline: 'Ensuring zero disruption to policyholder premium deductions during corporate restructuring while reinforcing regulatory compliance.',
    metrics: [
      { label: 'Target Date', value: '2027', subtext: 'In-progress transition cadence' },
      { label: 'Portfolio Scope', value: 'AIAE to AIAI', subtext: 'Full cross-entity portfolio transfer' },
      { label: 'Payment Continuity', value: '100% Target', subtext: 'Zero unauthorized deduction drops' },
      { label: 'Monitoring Rigor', value: 'Bank Drafts', subtext: 'Enhanced payment AML reporting' },
    ],
    pillars: [
      {
        title: 'Project Bamboo: Seamless Payment Continuity',
        kicker: 'Corporate Entity Transition',
        description: 'Safeguarding continuous, uninterrupted premium collection throughout the AIAE-to-AIAI corporate portfolio transfer.',
        bulletPoints: [
          'Ensuring complete alignment across Autopay merchant codes, credit card recurring tokens, and electronic payment gateways with AIAI.',
          'Zero policyholder disruption: automated backend mandate migration minimizes customer re-authorization requirements.',
          'Coordinated cross-functional readiness testing with clearing banks to prevent erroneous mandate cancellations or duplicate billings.',
        ],
        tags: ['Project Bamboo', 'AIAE to AIAI', 'Zero Disruption'],
      },
      {
        title: 'Strengthen Payment Risk & AML Controls',
        kicker: 'Financial Crime Governance',
        description: 'Progressing Payment Solutions and Cashier regulatory enhancements to maintain ironclad financial crime defenses.',
        bulletPoints: [
          'Heightened surveillance and automated monitoring on high-value bank drafts and third-party cashier cheques.',
          'Upgraded payment regulatory reporting engines to comply with enhanced Hong Kong Customs and Excise and HKMA standards.',
          'Balancing robust payment controls with smooth customer servicing to ensure legitimate payments clear without friction.',
        ],
        tags: ['Bank-Draft Monitoring', 'Payment AML Controls', 'Regulatory Reporting'],
      },
    ],
    workflow: {
      type: 'process',
      caption: 'Project Bamboo Portfolio Transfer Payment Continuity Architecture',
      steps: [
        { stepNumber: '01', title: 'Portfolio Mapping', owner: 'Bamboo Working Group', description: 'Inventory all active AIAE Autopay mandates, credit card recurring tokens, and DDM files', timing: 'Completed' },
        { stepNumber: '02', title: 'Bank Merchant Migration', owner: 'Payment Solutions', description: 'Liaise with Citi & partner banks to configure dual-running AIAI merchant billing credentials', timing: 'In Progress' },
        { stepNumber: '03', title: 'Mandate Porting & Dry Run', owner: 'Operations & IT', description: 'Execute trial billing batch under AIAI rail; verify clearing reconciliation', timing: 'Pre-Cutover' },
        { stepNumber: '04', title: 'Seamless Live Cutover', owner: 'POS Cashiering', description: 'Full live cutover to AIAI with zero customer disruption or unauthorized billing lapses', timing: 'Target 2027' },
      ],
    },
    keyTakeaways: [
      'Project Bamboo safeguards recurring revenue streams during complex corporate entity restructuring.',
      'Payment risk controls ensure stringent bank-draft monitoring without introducing unnecessary friction for legitimate customers.',
    ],
    speakerNotes: 'Slide 12 covers Project Bamboo and payment AML. Project Bamboo ensures the AIAE-to-AIAI portfolio transfer maintains 100% payment continuity across all Autopay and credit card channels. Simultaneously, we are strengthening bank-draft AML monitoring.',
  },

  // -------------------------------------------------------------
  // SLIDE 13: Lessons Learned - Witness Signature & Bi-Monthly POS Tips
  // -------------------------------------------------------------
  {
    id: 13,
    category: 'Lessons Learned & Innovation',
    categoryNumber: '03',
    title: 'Lessons Learned 1: Witness Signature Streamlining & POS Tips',
    subtitle: 'Removing Unnecessary Administrative Friction and Establishing a Proactive Agency Communication Channel',
    tagline: 'Converting operational friction into permanent workflow simplifications and practical submission guidance for agents.',
    metrics: [
      { label: 'Admin Friction', value: 'Eliminated', subtext: 'Unnecessary witness steps removed' },
      { label: 'Communication', value: 'Bi-Monthly', subtext: 'Regular POS Tips published to agency' },
      { label: 'Enquiry Reductions', value: 'Measurable', subtext: 'Proactive guidance prevents calls' },
      { label: 'Submission Quality', value: '+30% FTR', subtext: 'Higher first-time-right accuracy' },
    ],
    pillars: [
      {
        title: 'Enhancement of Witness Signature Requirement',
        kicker: 'BAU Innovation #1',
        description: 'Enhanced and streamlined the witness signature requirement to simplify the submission and handling process.',
        bulletPoints: [
          'Removed unnecessary administrative hurdles while strictly maintaining governance, anti-fraud, and compliance standards.',
          'Made requirements crystal clear for customers and agents, removing ambiguity surrounding eligible witnesses.',
          'Dramatically reduced avoidable follow-up, incomplete submissions, and processing delays arising from witness disputes.',
        ],
        tags: ['Witness Streamlining', 'Reduced Discrepancies', 'Governance Preserved'],
      },
      {
        title: 'Launch of Bi-Monthly POS Tips',
        kicker: 'BAU Innovation #2',
        description: 'Launched a regular communication channel to provide agents with timely, practical guidance on Policy Owner Service matters.',
        bulletPoints: [
          'Topics developed directly from agent feedback, case observations, recurring submission errors, and daily operational pain points.',
          'Addresses recurring concerns proactively through actionable reminders rather than relying on piecemeal case-by-case clarification.',
          'Fosters stronger partnership between POS and the agency force, creating a more consistent, error-free customer experience.',
        ],
        tags: ['Bi-Monthly Tips', 'Agency Feedback Loop', 'Proactive Communication'],
      },
    ],
    workflow: {
      type: 'comparison',
      caption: 'Before vs. After: Witness Signature Requirement & Agent Guidance Model',
      comparisonRows: [
        { dimension: 'Witness Requirement', before: 'Rigid, multi-step witness attestation causing frequent submission rejections', after: 'Streamlined, risk-proportionate witness criteria clearly documented in forms', impact: 'Substantial drop in rejected submissions' },
        { dimension: 'Agency Communication', before: 'Passive reliance on case-by-case pending notices and phone inquiries', after: 'Proactive Bi-monthly POS Tips highlighting common errors and reminders', impact: 'Repeat agent errors down significantly' },
        { dimension: 'Customer Journey', before: 'Customers recalled to branches for redundant witness re-signing', after: 'First-time-right submission with zero follow-up delay', impact: 'Smoother, professional customer experience' },
      ],
    },
    keyTakeaways: [
      'Administrative rules must be continually audited: unnecessary steps frustrate customers without adding risk protection.',
      'Proactive education through Bi-Monthly POS Tips prevents errors before they reach our processing queues.',
    ],
    speakerNotes: 'Slide 13 reflects on our 2026 BAU simplifications. We streamlined the witness signature requirement, eliminating bureaucratic waste while safeguarding controls. Additionally, our Bi-monthly POS Tips initiative established an open educational channel that cut recurring agent submission errors.',
  },

  // -------------------------------------------------------------
  // SLIDE 14: Lessons Learned - Product "SelectWise" In-Line Declaration
  // -------------------------------------------------------------
  {
    id: 14,
    category: 'Lessons Learned & Innovation',
    categoryNumber: '03',
    title: 'Lessons Learned 2: Product "SelectWise" In-Line Declaration',
    subtitle: 'Embedding Customer Declarations for Existing Exclusions and Loadings Directly at Point of Submission',
    tagline: 'Transforming plan-change documentation to capture upfront customer acknowledgement, cutting pending rounds to zero.',
    metrics: [
      { label: 'Pending Reduction', value: 'Zero Rework', subtext: 'No separate supplementary forms' },
      { label: 'Touch Time', value: '-35%', subtext: 'Faster turnaround to completion' },
      { label: 'Customer Clarity', value: 'Upfront', subtext: 'Exclusions declared at submission' },
      { label: 'Agent Admin', value: 'Minimized', subtext: 'No follow-up chasing required' },
    ],
    pillars: [
      {
        title: 'Point-of-Submission Declaration Embedding',
        kicker: 'BAU Innovation #3',
        description: 'Enhanced the Product "SelectWise" plan-change process by embedding a customer declaration for existing exclusions and premium loadings.',
        bulletPoints: [
          'Enables customers to acknowledge applicable exclusions and loadings directly in the primary plan-change submission form.',
          'Provides indisputable, legally sound evidence of customer understanding and informed consent at the very outset.',
          'Eliminates the legacy requirement of issuing separate pending requests to obtain supplementary customer confirmation.',
        ],
        tags: ['SelectWise Enhancement', 'In-Line Declaration', 'Legal Evidence'],
      },
      {
        title: 'Operational Impact & Experience Transformation',
        kicker: 'Efficiency Gains',
        description: 'Radically simplified the operational handling and agent workflow for plan-change transactions.',
        bulletPoints: [
          'Dramatically reduced the administrative burden on agents, who previously had to revisit customers for supplementary confirmation.',
          'Shortened processing touch time and eliminated back-and-forth paper chasing between POS, agency, and policyholders.',
          'Established a scalable template for other life and health products undergoing policy alteration and plan conversion.',
        ],
        tags: ['Zero Agent Chasing', 'Shortened Touch Time', 'Scalable Template'],
      },
    ],
    workflow: {
      type: 'process',
      caption: 'Product "SelectWise" Plan Change: Legacy vs. In-Line Declaration Process',
      steps: [
        { stepNumber: 'Legacy', title: 'Submit Plan Change', owner: 'Agent', description: 'Standard alteration form submitted without loading acknowledgement', timing: 'Day 1' },
        { stepNumber: 'Legacy Pending', title: 'POS Pending Issued', owner: 'POS Handler', description: 'Case placed on pending; agent must contact customer for supplementary declaration', timing: 'Day 3–5' },
        { stepNumber: 'New Flow', title: 'Embedded Declaration', owner: 'Customer & Agent', description: 'Existing exclusions & loadings acknowledged directly in submission form', timing: 'Day 1' },
        { stepNumber: 'Completion', title: 'Straight-Through Approval', owner: 'POS Engine', description: 'Immediate validation and policy endorsement with zero pending delay', timing: 'Instant' },
      ],
    },
    keyTakeaways: [
      'Embedding declarations upfront prevents avoidable pending cycles that previously paralyzed plan-change processing.',
      'This pattern proves that legal clarity and operational speed can be achieved simultaneously through smart form design.',
    ],
    speakerNotes: 'Slide 14 details the SelectWise plan-change breakthrough. Previously, when policyholders with existing loadings or exclusions changed plans, we had to issue pending notices to get signed confirmations. By embedding the declaration upfront, we eliminated this entire cycle.',
  },

  // -------------------------------------------------------------
  // SLIDE 15: Lessons Learned - Change of Ownership Digital Leap
  // -------------------------------------------------------------
  {
    id: 15,
    category: 'Lessons Learned & Innovation',
    categoryNumber: '03',
    title: 'Lessons Learned 3: Change of Ownership Digital Leap',
    subtitle: 'Integrating iChange with iVerify and Pre-Populating Customer Data Directly into POSA',
    tagline: 'Connecting customer identity verification with internal back-office servicing to eliminate manual re-keying and human errors.',
    metrics: [
      { label: 'iChange + iVerify', value: 'Connected', subtext: 'Unified end-to-end digital journey' },
      { label: 'POSA Pre-Pop', value: 'Automated', subtext: 'Direct data flow into processing core' },
      { label: 'Manual Data Entry', value: '-80%', subtext: 'Staff re-keying largely eradicated' },
      { label: 'Data Consistency', value: '100%', subtext: 'Identical records across all platforms' },
    ],
    pillars: [
      {
        title: 'Integration of iChange with iVerify',
        kicker: 'BAU Innovation #4(a)',
        description: 'Established a direct, seamless linkage between iChange and the iVerify customer identity verification portal.',
        bulletPoints: [
          'Streamlined the identity verification process for complex Change of Ownership submissions across new and existing owners.',
          'Eliminated disconnected steps and redundant customer document uploads across fragmented platforms.',
          'Strengthened submission accuracy by supporting a structured, consistent, and cryptographically verified digital identity check.',
        ],
        tags: ['iChange + iVerify', 'Unified Journey', 'Identity Security'],
      },
      {
        title: 'Pre-Population of iChange Information in POSA',
        kicker: 'BAU Innovation #4(b)',
        description: 'Introduced automated data flow from customer-facing iChange directly into the internal POSA servicing platform.',
        bulletPoints: [
          'Customer-entered data automatically pre-populates internal servicing fields, eliminating manual back-office re-keying.',
          'Radically minimized human transcription errors and discrepancies between customer intent and recorded policy records.',
          'Significantly reduced handler touch time per case, enabling staff to focus on high-touch complex validation.',
        ],
        tags: ['POSA Pre-Population', 'Zero Re-Keying', 'Productivity Boost'],
      },
    ],
    workflow: {
      type: 'architecture',
      caption: 'Change of Ownership End-to-End Digital Architecture (iChange -> iVerify -> POSA)',
      steps: [
        { stepNumber: '01', title: 'iChange Intake', owner: 'Customer / Agent', description: 'Customer initiates Change of Ownership; inputs personal, tax, and relationship data', timing: 'Digital' },
        { stepNumber: '02', title: 'iVerify Biometric Link', owner: 'iVerify Subsystem', description: 'Seamless jump to iVerify for biometric identity verification & Smart ID validation', timing: '< 2 mins' },
        { stepNumber: '03', title: 'Automated POSA Pipe', owner: 'Integration Bus', description: 'Verified data and credentials stream directly into internal POSA workbench', timing: 'Real-time' },
        { stepNumber: '04', title: 'One-Click Handler Review', owner: 'POS Staff', description: 'Handler reviews pre-populated fields, verifies legal requirements, and commits update', timing: '-70% touch time' },
      ],
    },
    keyTakeaways: [
      'Bridging customer-facing portals with internal staff platforms eliminates the dreaded manual data re-entry trap.',
      'Change of Ownership is one of our highest-risk transactions; digital verification ensures flawless compliance.',
    ],
    speakerNotes: 'Slide 15 highlights our Change of Ownership digital breakthrough. By linking iChange with iVerify, we unified identity verification. Then, by piping that data automatically into POSA, our staff no longer manually re-keys information, drastically reducing touch time and errors.',
  },

  // -------------------------------------------------------------
  // SLIDE 16: Lessons Learned - Mandatory e-Advice Transformation
  // -------------------------------------------------------------
  {
    id: 16,
    category: 'Lessons Learned & Innovation',
    categoryNumber: '03',
    title: 'Lessons Learned 4: Mandatory e-Advice Transformation',
    subtitle: 'Transitioning Eligible Communications to Digital Channels: AIA+, Email, and Mobile SMS',
    tagline: 'Driving operational sustainability and substantial cost savings by replacing paper notices with secure digital delivery.',
    metrics: [
      { label: 'Paper Reductions', value: 'Massive', subtext: 'Printing, postage & physical handling' },
      { label: 'Channels Used', value: '3 Channels', subtext: 'AIA+ App · Email · Mobile SMS' },
      { label: 'Scope', value: 'Mandatory', subtext: 'Annual statements & billing notices' },
      { label: 'ESG Target', value: 'Green Ops', subtext: 'Carbon reduction & sustainability' },
    ],
    pillars: [
      {
        title: 'Mandatory e-Advice Implementation',
        kicker: 'BAU Innovation #5',
        description: 'Successfully transitioned eligible policy communications from physical paper mailings to secure electronic delivery.',
        bulletPoints: [
          'Encompasses high-volume annual statements, premium billing notices, and routine servicing notifications.',
          'Leveraged multi-channel digital delivery through email, mobile SMS alerts, and deep links into the AIA+ customer app.',
          'Implemented proactive advance customer communication campaigns to prepare policyholders and minimize inbound queries.',
        ],
        tags: ['Mandatory e-Advice', 'AIA+ Integration', 'Advance Campaigns'],
      },
      {
        title: 'Operational, Financial & ESG Contributions',
        kicker: 'Sustainable Impact',
        description: 'Achieved meaningful cost reductions while advancing AIA corporate environmental and digital sustainability goals.',
        bulletPoints: [
          'Substantially reduced paper consumption, secure printing overhead, postal fees, and physical mail handling labor.',
          'Carefully engineered exception handling workflows for vulnerable customer segments, ensuring zero disruption or exclusion.',
          'Established a scalable, modern communication infrastructure ready to support next-generation servicing products.',
        ],
        tags: ['Cost Efficiency', 'ESG Sustainability', 'Robust Exceptions'],
      },
    ],
    workflow: {
      type: 'comparison',
      caption: 'Annual Statement & Billing Delivery: Paper Post vs. Mandatory e-Advice',
      comparisonRows: [
        { dimension: 'Delivery Speed', before: '5–10 business days via postal mail with risk of lost mail', after: 'Instant digital notification on publication date via AIA+ and email', impact: 'Immediate customer accessibility' },
        { dimension: 'Operating Cost', before: 'High recurrent printing, envelop packaging, and postal tariffs', after: 'Negligible digital marginal transmission cost', impact: 'Substantial annual OPEX savings' },
        { dimension: 'Environmental Impact', before: 'Tons of physical paper consumption and carbon emissions', after: '100% paperless digital delivery aligned with ESG goals', impact: 'Measurable environmental sustainability' },
      ],
    },
    keyTakeaways: [
      'Mandatory e-Advice modernizes customer communications while unlocking permanent structural cost savings.',
      'Thoughtful advance communication and exception management prevented customer friction during the transition.',
    ],
    speakerNotes: 'Slide 16 details our Mandatory e-Advice transition. We transitioned eligible policy statements and billing notices from paper to digital channels like AIA+ and email. This generated significant cost savings in postage and printing while advancing our corporate ESG environmental commitments.',
  },

  // -------------------------------------------------------------
  // SLIDE 17: Lessons Learned - IRD CRS Inspection & MonQ HNW SLA
  // -------------------------------------------------------------
  {
    id: 17,
    category: 'Lessons Learned & Innovation',
    categoryNumber: '03',
    title: 'Lessons Learned 5: IRD CRS Audit & MonQ HNW Framework',
    subtitle: 'Navigating On-Site Regulatory Reviews and Launching MonQ TAT Tracking for High-Net-Worth Brokers',
    tagline: 'Demonstrating robust compliance under regulatory scrutiny while institutionalizing strict SLAs for high-value requests.',
    metrics: [
      { label: 'IRD Audit Scope', value: '700 Accounts', subtext: 'AIAI HK, AIA Co & AIAE inspected' },
      { label: 'MonQ Launch', value: '18 May 2026', subtext: 'Systematic HNW request prioritization' },
      { label: 'TAT Framework', value: '1 June 2026', subtext: 'Guaranteed SLA delivery implementation' },
      { label: 'Broker Partner', value: 'Mercer', subtext: 'Completed review; expanding to all brokers' },
    ],
    pillars: [
      {
        title: 'IRD On-Site Inspection on CRS (Nov 2026)',
        kicker: 'Regulatory Audit Readiness',
        description: 'Delivered intensive, successful operational support for the Hong Kong Inland Revenue Department on-site CRS inspection.',
        bulletPoints: [
          'Full-spectrum coverage: CRS Due Diligence, Change in Circumstances, Pre-existing Accounts, and Annual Reporting files.',
          'Presented comprehensive SOPs and defended operational investigations across 700 selected accounts spanning AIAI HK, AIA Co, and AIAE.',
          'Identified proactive remediation actions to continuously tighten regulatory compliance ahead of CRS 2.0 implementation.',
        ],
        tags: ['IRD On-Site Inspection', '700 Accounts Inspected', 'Proactive Remediation'],
      },
      {
        title: 'MonQ HNW Identification & SLA Framework',
        kicker: 'HNW Operational Excellence',
        description: 'Systematically scoped, identified, and prioritized High-Net-Worth policy change requests to deliver transparent SLAs.',
        bulletPoints: [
          'MonQ system launched on 18 May 2026, enabling real-time tagging and prioritization of HNW requests in processing queues.',
          'End-to-End TAT Framework implemented on 1 June 2026, establishing guaranteed SLAs and broker-facing performance reports.',
          'Standardized HNW POS Checklists rolled out to Policy Documentation (PD) teams in May 2026; completed initial review with Mercer.',
        ],
        tags: ['MonQ Launch', '1 June SLA Framework', 'Standardized Checklists'],
      },
    ],
    workflow: {
      type: 'process',
      caption: 'MonQ HNW Policy Servicing & Broker Transparency SLA Workflow',
      steps: [
        { stepNumber: '01', title: 'Systematic Scoping', owner: 'Intake Engine', description: 'MonQ algorithm tags request as HNW based on premium tier, policy type, or broker code', timing: 'Instant' },
        { stepNumber: '02', title: 'Checklist Execution', owner: 'PD Specialist Pod', description: 'Handler executes standardized May 2026 HNW Checklist for trust/ownership changes', timing: '< 24 hours' },
        { stepNumber: '03', title: 'TAT SLA Monitoring', owner: 'MonQ Controller', description: 'Automated monitoring report tracks elapsed time against 1 June 2026 SLA benchmarks', timing: 'Continuous' },
        { stepNumber: '04', title: 'Broker Reporting', owner: 'Business Partner Lead', description: 'Periodic TAT delivery and performance reporting shared directly with key brokers (e.g. Mercer)', timing: 'Monthly / Qtr' },
      ],
    },
    keyTakeaways: [
      'Defending 700 accounts before the IRD proved that our operational documentation and audit trails are rock-solid.',
      'MonQ transformed HNW servicing from an opaque queue into a transparent, SLA-governed competitive differentiator.',
    ],
    speakerNotes: 'Slide 17 covers our regulatory audit defense and HNW operational milestones. In November 2026, we supported the IRD on-site CRS inspection covering 700 accounts across three entities. Meanwhile, we launched MonQ on 18 May and our SLA framework on 1 June, completing engagement with Mercer.',
  },

  // -------------------------------------------------------------
  // SLIDE 18: Lessons Learned - Citibank Lockbox & Payment Security
  // -------------------------------------------------------------
  {
    id: 18,
    category: 'Lessons Learned & Innovation',
    categoryNumber: '03',
    title: 'Lessons Learned 6: Citibank Lockbox Migration & Payment Security',
    subtitle: 'Safeguarding Premium Collection Continuity and Decommissioning Legacy Insecure File Transfer Protocols',
    tagline: 'Navigating critical banking partner discontinuations while upgrading enterprise security from legacy WS_FTP to CitiDirect.',
    metrics: [
      { label: 'Lockbox Transition', value: '2026 In Progress', subtext: 'Citibank Lockbox discontinuation' },
      { label: 'Infrastructure', value: 'CitiDirect', subtext: 'Migrated away from legacy WS_FTP' },
      { label: 'Decommissioning', value: 'Mini-Storage', subtext: 'Secure external file exchange retired' },
      { label: 'Business Continuity', value: '100% Protected', subtext: 'Zero interruption to premium inflow' },
    ],
    pillars: [
      {
        title: 'Transform Lockbox & Cheque Collection',
        kicker: 'Payment Infrastructure #1',
        description: 'Safeguarding premium collection flows following Citibank discontinuation of commercial Lockbox cheque services.',
        bulletPoints: [
          'Transitioning toward a sustainable in-house and bank-partnered cheque-handling model administered by POS Cashier.',
          'Guarantees total business continuity and uninterrupted premium crediting for policyholders who still remit physical cheques.',
          'Implemented rigorous physical cheque tracking, security envelopes, and daily bank deposit reconciliation controls.',
        ],
        tags: ['Lockbox Transition', 'Cheque Continuity', 'Cashier Administration'],
      },
      {
        title: 'Modernise Payment Infrastructure & Security',
        kicker: 'Payment Infrastructure #2 (Done 2026)',
        description: 'Decommissioning vulnerable legacy file transfer mechanisms to comply with enterprise cybersecurity mandates.',
        bulletPoints: [
          'Successfully transitioned recurring Autopay mandate file uploads away from legacy WS_FTP toward secure CitiDirect APIs.',
          'Successfully decommissioned legacy "Secure Mini-Storage" used for external payment file exchange, eliminating cyber risk.',
          'Instituted automated encryption, mutual TLS handshakes, and tamper-evident audit logging for all bank clearance files.',
        ],
        tags: ['CitiDirect Migration', 'WS_FTP Retired', 'Mini-Storage Decommissioned'],
      },
    ],
    workflow: {
      type: 'comparison',
      caption: 'Payment Infrastructure Security Modernization (2026 Achievements)',
      comparisonRows: [
        { dimension: 'Autopay Upload Rail', before: 'Legacy WS_FTP protocol with manual file movement and credentials', after: 'Direct, automated CitiDirect enterprise host-to-host integration', impact: 'Eliminated cyber vulnerability & manual errors' },
        { dimension: 'External File Exchange', before: 'Aging "Secure Mini-Storage" repository for payment partner files', after: 'Decommissioned; replaced with enterprise encrypted cloud rails', impact: 'Compliance with AIA InfoSec standards' },
        { dimension: 'Cheque Remittance', before: 'Citibank commercial lockbox mailbox processing', after: 'Sustainable cashier-administered cheque processing & digital transition', impact: 'Business continuity protected post-lockbox' },
      ],
    },
    keyTakeaways: [
      'Retiring legacy WS_FTP and Secure Mini-Storage eliminates severe security liabilities from our payment perimeter.',
      'The cashier-managed cheque model protected premium continuity when Citibank discontinued commercial lockbox services.',
    ],
    speakerNotes: 'Our final slide reviews the security modernization of our payment infrastructure. In 2026, we managed the critical transition when Citibank discontinued their commercial lockbox, establishing a sustainable cashier model. We also retired legacy WS_FTP and Secure Mini-Storage in favor of CitiDirect.',
  },
];
