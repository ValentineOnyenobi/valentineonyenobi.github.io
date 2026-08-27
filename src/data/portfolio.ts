export const profile = {
  name: "Valentine Onyenobi",
  role: "Business & Data Analyst",
  disciplines: "STRATEGY · DATA · BUSINESS INTELLIGENCE · OPERATIONS",
  tagline:
    "I help organisations understand performance, solve complex business problems and make better decisions - combining strategic thinking with hands-on analytical capability.",
  location: "London, UK",
  email: "valentine@freetownconsultancy.com",
  linkedin: "https://www.linkedin.com/in/valentineonyenobi/",
  github: "https://github.com/ValentineOnyenobi",
  summary: [
    "I am a Business & Data Analyst working across business strategy, data analytics, business intelligence, operations and financial services. My experience spans the UK, Nigeria and the UAE - whether I'm joining a team, advising on a specific problem, or supporting a project.",
    "My value is operating across both sides of a business problem: understand the business, work with the data, find the insight, shape the strategy, support execution.",
    "I don't treat every problem as a data problem, and I don't treat every problem as a strategy problem. I start with the business question, then bring in whatever mix of analysis, process and technology it actually needs.",
  ],
};

export const results = [
  {
    value: "~25%",
    label: "Increase in office productivity",
    note: "From digital workflow implementation",
  },
  {
    value: "~15%",
    label: "Reduction in operating costs",
    note: "Through procurement & vendor management",
  },
  {
    value: "Interactive BI",
    label: "Power BI & Tableau dashboards",
    note: "Sales, supply-chain & market analysis",
  },
  {
    value: "SQL",
    label: "Large datasets cleaned & structured",
    note: "Transformed for analysis & reporting",
  },
  {
    value: "ML Portfolio",
    label: "Predictive & classification projects",
    note: "XGBoost, Random Forest, Decision Trees, SVC",
  },
];

export const regions = [
  {
    flag: "\u{1F1EC}\u{1F1E7}",
    country: "United Kingdom",
    focus: "Strategy · Data Analytics · Business Intelligence · Consulting",
  },
  {
    flag: "\u{1F1F3}\u{1F1EC}",
    country: "Nigeria",
    focus: "Strategy · Consulting · Business Development · Operations · Financial Services",
  },
  {
    flag: "\u{1F1E6}\u{1F1EA}",
    country: "United Arab Emirates",
    focus: "Project Management · Operations · Business Administration",
  },
];

export const howIWork = [
  { step: "Understand", body: "the objective, customer, process and business problem" },
  { step: "Investigate", body: "the relevant data, constraints and underlying drivers" },
  { step: "Analyse", body: "clean, structure and visualise the evidence" },
  { step: "Interpret", body: "translate findings into business meaning" },
  { step: "Recommend", body: "practical, business-aligned recommendations" },
  { step: "Execute & Measure", body: "support implementation and track outcomes against it" },
];

export const strengths = [
  {
    title: "Strategic + Analytical",
    body: "Combines strategy and data rather than treating them as separate disciplines.",
  },
  {
    title: "Hands-On",
    body: "Works directly with data, dashboards and operational processes, not just advisory.",
  },
  {
    title: "Evidence-Based",
    body: "Recommendations grounded in data and business context.",
  },
  {
    title: "Cross-Functional",
    body: "Communicates equally well with business stakeholders and technical teams.",
  },
];

export const metrics = [
  { value: 11, suffix: "+", label: "Projects shipped", note: "ML, BI & dashboard builds" },
  { value: 25, suffix: "%", label: "Productivity lift", note: "Digital workflow rollout, Ajman" },
  { value: 15, suffix: "%", label: "Cost reduction", note: "Vendor & procurement redesign" },
  { value: 3, suffix: "", label: "Regions delivered", note: "UK · UAE · Nigeria" },
];

export type ProjectCategory = "Machine Learning" | "Power BI" | "Tableau";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  metric: { label: string; value: string };
};

// Featured Case Studies filters — fully independent from the technical filters.
export const featuredFilters = [
  "All",
  "Strategy & Consulting",
  "Operations",
  "Financial Services",
  "Venture & Systems",
  "Project Delivery",
  "Workforce",
] as const;

export type FeaturedFilter = (typeof featuredFilters)[number];

export type CaseStudyCategory = Exclude<FeaturedFilter, "All">;

// Technical Projects filters — fully independent from the featured filters.
export const technicalFilters = ["All", "Machine Learning", "Power BI", "Tableau"] as const;

export type TechnicalFilter = (typeof technicalFilters)[number];

// Featured professional case studies (strategy / consulting / operations /
// financial services / business transformation). Each entry expands into the
// long format: Context → Problem → What I Worked On → Approach → Outcome → Role.
export type CaseStudy = {
  slug: string;
  title: string;
  organisation: string;
  categories: CaseStudyCategory[];
  displayCategories: string[];
  context: string;
  capabilities: string[];
  executiveSummary: string;
  status?: string;
  confidentiality?: string;
  problem: string;
  workedOn?: string[];
  approach?: { title: string; body: string }[];
  architecture?: { title: string; steps: string[] };
  riskFramework?: string[];
  processFlow?: { title: string; steps: string[] };
  evidence?: { value: string; label: string; note?: string }[];
  outcome: string;
  demonstrates: string[];
  role: string;
  reflection?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "kajco-credit-trust-infrastructure",
    title: "Building a Data-Driven Credit & Trust Infrastructure",
    organisation: "Kajco Finance",
    categories: ["Financial Services", "Venture & Systems", "Strategy & Consulting"],
    displayCategories: ["Financial Services", "Data Strategy", "Product", "Risk", "Venture Building"],
    context:
      "Developing a structured decision-making layer that turns fragmented commercial knowledge into credit and financial-services infrastructure for emerging-market commerce.",
    capabilities: [
      "Strategic product development",
      "Data strategy",
      "Credit decisioning",
      "Behavioural intelligence",
      "Financial-services thinking",
      "Systems architecture",
      "Venture building",
      "Cross-functional execution",
    ],
    executiveSummary:
      "Kajco was established around a problem in emerging-market commerce: valuable information about trust and reliability is created through everyday merchant and customer relationships, but much of that information remains fragmented and difficult for formal financial systems to use.",
    status: "Pre-commercial deployment",
    problem:
      "The underlying information gap can be expressed as: Commercial activity → trust is created → behaviour is observed → information remains fragmented → formal systems cannot fully use it. The challenge was to turn that fragmented commercial knowledge into a structured decision-making layer that could support credit and financial-services applications.",
    workedOn: [
      "Merchant Onboarding",
      "Customer Identification and Verification",
      "Commercial and Behavioural Information",
      "Credit Assessment",
      "Behavioural Intelligence",
      "Repayment Processes",
      "Merchant Operating Structures",
      "Reporting and Reconciliation",
      "Operational Controls",
      "Product and Operating Architecture",
      "Regulatory Preparation",
      "Integration Planning",
    ],

    approach: [
      {
        title: "Behavioural Intelligence",
        body: "A major part of the work was developing a behavioural framework capable of capturing information associated with responsibility, consistency, obligations and responses to trust. Trustline incorporates a progression mechanism through which positive and negative behavioural events can become part of a customer's evolving behavioural record. The wider model also considers commercial activity such as purchasing behaviour, transaction consistency and merchant relationships. Detailed scoring logic, proprietary rules and commercial mechanics are intentionally not disclosed publicly.",
      },
      {
        title: "Product & Operating Development",
        body: "Kajco's development has extended beyond the customer-facing product. The MVP architecture covers customer, field-officer, merchant and administrative workflows, identity verification, transaction processes, eligibility, repayment, POS functionality, offline operation, synchronisation, reporting, reconciliation and operational controls. The venture has progressed through: Research → Problem Definition → Product Architecture → MVP Development → Integration Design → Behavioural Intelligence → Operating Controls → Regulatory Preparation → Intellectual Property → Deployment Preparation.",
      },
    ],
    architecture: {
      title: "Strategic Architecture",
      steps: [
        "Identity",
        "Commercial Behaviour",
        "Behavioural Intelligence",
        "Financial Information",
        "Lending Infrastructure",
        "Repayment",
      ],
    },
    outcome:
      "Kajco has moved beyond the conceptual stage. The product architecture, Trustline structure, technology integrations, regulatory foundations and operating framework have been developed. Rather than building lending, identity verification and payment infrastructure from scratch, Kajco integrates established specialist providers across those functions, while developing its own application, data and intelligence layers. The venture is currently at pre-commercial deployment. The next major proof point is controlled live deployment, generation of real-world evidence and continued refinement of the model.",
    demonstrates: [
      "Strategic product development",
      "Data strategy",
      "Credit decisioning",
      "Behavioural intelligence",
      "Financial-services thinking",
      "Systems architecture",
      "Venture building",
      "Cross-functional execution",
    ],
    role: "I have been responsible for shaping the business model, product direction, data and intelligence approach, operating structure and cross-functional development required to move Kajco from problem definition through product and deployment preparation.",
  },
  {
    slug: "kajco-regulatory-risk-foundations",
    title: "Building Regulatory & Risk Foundations into a Digital Lending Platform",
    organisation: "Kajco Finance",
    categories: ["Financial Services", "Strategy & Consulting", "Venture & Systems"],
    displayCategories: ["Financial Services", "Regulatory Strategy", "Risk", "Governance"],
    context:
      "Building regulatory, privacy, identity, consumer-protection, risk and operational requirements into a digital lending platform alongside the product and operating model.",
    capabilities: [
      "Regulatory strategy",
      "Risk management",
      "Governance",
      "Data protection",
      "Financial services",
      "Product thinking",
      "Operational controls",
      "Stakeholder coordination",
    ],
    executiveSummary:
      "Building a digital lending platform requires more than a functioning product. Regulatory, privacy, identity, consumer-protection, risk and operational requirements all influence how the platform can operate. For Kajco, these considerations were developed alongside the product and operating model rather than treated as a separate compliance exercise.",
    status: "Pre-commercial deployment",
    problem:
      "The challenge was to establish an operating foundation in which Product → Data → Risk → Governance → Operations could work together. That meant considering not only what the product should do, but how information should be handled, participants verified, activities traced and operational risks controlled.",
    workedOn: [
      "Moneylending Authorisation",
      "Digital-Lending Regulatory requirements",
      "Data Protection and Privacy",
      "Identity Verification",
      "Data Governance",
      "Compliance Review",
      "Auditability and Traceability",
      "Operational Controls",
      "Fraud and Risk Considerations",
    ],
    approach: [
      {
        title: "Risk & Control Framework",
        body: "The control environment considers: Customer identity, Merchant identity, Geolocation, Device identification, Transaction traceability, Repayment, Fraud detection, Officer accountability, Audit trails, Reconciliation, Escalation. These controls are intended to make operational activity identifiable, traceable and reviewable rather than simply adding documentation around the product.",
      },
      {
        title: "Regulatory Thinking as Product Thinking",
        body: "One of the key lessons from the work is that regulation cannot be separated completely from product design. Identity requirements affect onboarding. Data-protection requirements affect information flows. Audit requirements affect record-keeping. Risk controls affect operational workflows. This means regulatory requirements can shape the product itself rather than simply sitting alongside it.",
      },
      {
        title: "Designing for Responsible Operations",
        body: "The merchant model also incorporates performance-sensitive operating structures. Merchant capacity is intended to evolve with portfolio performance rather than remain permanently fixed, creating a link between observed performance and future operating capacity. Detailed commercial terms and proprietary operating mechanics are intentionally not disclosed publicly.",
      },
    ],
    riskFramework: [
      "Customer Identity",
      "Merchant Identity",
      "Geolocation",
      "Device Identification",
      "Transaction Traceability",
      "Repayment",
      "Fraud Detection",
      "Officer Accountability",
      "Audit Trails",
      "Reconciliation",
      "Escalation",
    ],
    outcome:
      "Kajco has established a substantial regulatory, governance and operational foundation alongside its product development work, including regulatory preparation, data-governance structures, identity controls, auditability and operational risk controls. Kajco Lending Services Limited received FCCPC approval in connection with the Kajco Credit App. The venture remains at pre-commercial deployment, with controlled deployment, evidence generation and refinement representing the next stage.",
    demonstrates: [
      "Regulatory strategy",
      "Risk management",
      "Governance",
      "Data protection",
      "Financial services",
      "Product thinking",
      "Operational controls",
      "Stakeholder coordination",
    ],
    role: "I led the integration of regulatory, governance, risk and operational considerations into the wider Kajco product and business architecture, working across strategic, product and execution requirements.",
  },
  {
    slug: "workforce-retention-onboarding",
    title: "Workforce Performance, Retention & Onboarding Improvement",
    organisation: "Confidential SME Client — Nigeria",
    categories: ["Strategy & Consulting", "Operations", "Workforce"],
    displayCategories: ["Strategy & Consulting", "Operations", "Workforce"],
    context:
      "Creating stronger processes around people so employees could enter the organisation effectively, understand expectations and develop within a more structured operating environment.",
    capabilities: [
      "Workforce strategy",
      "Consulting",
      "Process improvement",
      "Onboarding design",
      "Training",
      "Retention",
      "Operational performance",
      "Stakeholder management",
    ],
    executiveSummary:
      "The engagement involved an SME where workforce performance, retention and operational consistency were important to the organisation's ability to deliver effectively. The challenge was not simply recruitment. It was creating stronger processes around people so employees could enter the organisation effectively, understand expectations and develop within a more structured operating environment.",
    confidentiality: "Confidential SME Client — Nigeria",
    problem:
      "The organisation needed a more consistent approach to: Onboarding → Training → Role clarity → Performance → Retention. The challenge was to strengthen these connections without introducing unnecessary complexity into an SME operating environment.",
    workedOn: [
      "Workforce Performance",
      "Onboarding",
      "Training",
      "Retention",
      "Operational Improvement",
    ],
    approach: [
      {
        title: "The Approach",
        body: "The work was based on a simple principle: People performance is influenced by the environment in which people work. That meant looking beyond individual performance and considering whether the surrounding processes, expectations, training and management practices supported people effectively.",
      },
    ],
    processFlow: {
      title: "Workforce Process",
      steps: ["Onboarding", "Training", "Role Clarity", "Performance", "Retention"],
    },
    outcome:
      "The engagement established a more structured approach to workforce onboarding, training and operational support, connecting people processes more directly to organisational performance. Client-specific performance metrics are not disclosed because they are not available in the underlying professional record.",
    demonstrates: [
      "Workforce strategy",
      "Consulting",
      "Process improvement",
      "Onboarding design",
      "Training",
      "Retention",
      "Operational performance",
      "Stakeholder management",
    ],
    role: "I led operational improvement initiatives and worked on workforce performance, retention, onboarding and training programmes as part of the consulting engagement.",
    reflection: "People performance is influenced by the environment in which people work.",
  },
  {
    slug: "digital-workflow-transformation",
    title: "Transforming an Administrative Operation Through Digital Workflows",
    organisation: "Confidential Organisation — UAE",
    categories: ["Operations", "Strategy & Consulting"],
    displayCategories: ["Operations", "Process Improvement", "Digital Transformation"],
    context:
      "Improving how work moved through an administrative operation by introducing more effective digital workflows and strengthening supporting processes.",
    capabilities: [
      "Process improvement",
      "Workflow redesign",
      "Digital transformation",
      "Operational efficiency",
      "Procurement",
      "Vendor management",
      "Cost control",
      "Implementation",
    ],
    executiveSummary:
      "The organisation operated within an administrative environment where effective coordination, information handling, procurement and project support were essential to day-to-day delivery. The opportunity was to improve how work moved through the operation by introducing more effective digital workflows and strengthening supporting processes.",
    confidentiality: "Confidential Organisation — UAE",
    problem:
      "The underlying challenge was operational friction. Manual and fragmented processes can create repetitive administrative work, slower information movement, unclear ownership, avoidable coordination effort, inconsistent execution and reduced visibility. The objective was therefore to improve the workflow itself, rather than simply asking people to work harder.",
    workedOn: [
      "Implementing Digital Workflows",
      "Improving Administrative Processes",
      "Coordinating Operational Activity",
      "Managing Vendor Relationships",
      "Supporting Procurement",
      "Strengthening the Connection Between Administration and Project Delivery",
    ],

    approach: [
      {
        title: "Digital Workflow Transformation",
        body: "The intervention focused on moving operational activity away from unnecessary manual handling toward more structured processes. The aim was to make work easier to coordinate, reduce friction and improve consistency.",
      },
      {
        title: "Procurement & Vendor Management",
        body: "Operational improvement also extended to external suppliers. I managed vendor contracts and procurement activities with a focus on cost control, supplier coordination and operating efficiency. Operational improvement is not limited to internal processes; it also includes how an organisation manages external dependencies.",
      },
    ],
    processFlow: {
      title: "Operating Environment",
      steps: ["Workflow", "Information", "Responsibility", "Coordination", "Output"],
    },
    evidence: [
      {
        value: "~25%",
        label: "Increase in office productivity",
        note: "Following digital workflow implementation",
      },
      {
        value: "~15%",
        label: "Reduction in operating costs",
        note: "Through vendor and procurement management",
      },
    ],
    outcome:
      "The documented results included approximately 25% increase in office productivity following digital workflow implementation, and approximately 15% reduction in operating costs through vendor and procurement management.",
    demonstrates: [
      "Process improvement",
      "Workflow redesign",
      "Digital transformation",
      "Operational efficiency",
      "Procurement",
      "Vendor management",
      "Cost control",
      "Implementation",
    ],
    role: "I coordinated administrative operations, implemented digital workflows, managed vendor contracts and procurement, and supported project delivery and compliance.",
    reflection:
      "Operational improvement is not limited to internal processes; it also includes how an organisation manages external dependencies.",
  },
  {
    slug: "project-reporting-compliance",
    title: "Improving Project Visibility Through Operational Reporting",
    organisation: "Confidential Project Management Engagement — UAE",
    categories: ["Project Delivery", "Operations"],
    displayCategories: ["Project Delivery", "Operations", "Compliance", "Stakeholder Management"],
    context:
      "Introducing operational reporting to improve project tracking, compliance visibility and stakeholder communication across a project delivery environment.",
    capabilities: [
      "Project management",
      "Operational reporting",
      "Compliance tracking",
      "Stakeholder management",
      "Resource coordination",
      "Delivery planning",
      "Performance visibility",
    ],
    executiveSummary:
      "Project delivery creates a large volume of information across schedules, resources, stakeholders, activities and compliance requirements. My role involved managing project schedules, resources and stakeholder communications and introducing operational reporting to improve project tracking and compliance.",
    confidentiality: "Confidential Project Management Engagement — UAE",
    problem:
      "Project information can become fragmented across Plans, Activities, People, Stakeholders, Issues and Compliance requirements. When this happens, teams may have information without having useful visibility. The practical question becomes: Can stakeholders quickly understand where the project stands, what requires attention and whether delivery remains on track?",
    workedOn: [
      "Project Tracking",
      "Resource Coordination",
      "Stakeholder Communication",
      "Operational Reporting",
      "Compliance Tracking",
    ],
    approach: [
      {
        title: "The Approach",
        body: "The reporting model connected: Plan → Activity → Progress → Issue → Stakeholder → Action. The purpose was not simply to produce more reporting. It was to create information that supported coordination, accountability and timely intervention.",
      },
      {
        title: "Management Insight",
        body: "Reporting is only useful when it changes what someone does next — not when it simply documents what already happened.",
      },
    ],
    processFlow: {
      title: "Reporting Flow",
      steps: ["Plan", "Activity", "Progress", "Issue", "Stakeholder", "Action"],
    },
    outcome:
      "The reporting approach improved project tracking and compliance visibility and provided a more structured basis for stakeholder communication and delivery coordination. Project-specific commercial or delivery metrics are not disclosed because they are not supported by the available professional record.",
    demonstrates: [
      "Project management",
      "Operational reporting",
      "Compliance tracking",
      "Stakeholder management",
      "Resource coordination",
      "Delivery planning",
      "Performance visibility",
    ],
    role: "I managed project schedules, resources and stakeholder communications, introduced operational reporting and supported workforce coordination through proactive planning and communication.",
    reflection:
      "Reporting is only useful when it changes what someone does next — not when it simply documents what already happened.",
  },
  {
    slug: "business-strategy-growth-planning",
    title: "Business Strategy, Business Model Analysis & Growth Planning",
    organisation: "Confidential SME / Property Management Client — Nigeria",
    categories: ["Strategy & Consulting"],
    displayCategories: ["Strategy & Consulting", "Business Analysis", "Growth"],
    context:
      "Helping organisations understand their current position, improve how they operate and identify opportunities for growth across SME and property-management environments.",
    capabilities: [
      "Business strategy",
      "Business-model analysis",
      "Growth planning",
      "Business development",
      "Consulting",
      "Opportunity assessment",
      "Strategic decision support",
    ],
    executiveSummary:
      "My strategy and consulting work has involved helping organisations understand their current position, improve how they operate and identify opportunities for growth. This has included work across SME and property-management environments, where business development, operating performance and strategic planning often need to be considered together.",
    confidentiality: "Confidential SME / Property Management Client — Nigeria",
    problem:
      "Growth is rarely just a question of finding another opportunity. A business also needs to understand whether the opportunity fits the existing model, what capabilities are required, what operational constraints exist, what needs to change, what should be prioritised and how the strategy can realistically be executed. The real strategic question is therefore: Which opportunities make sense for the organisation given its current position and capabilities?",
    workedOn: [
      "Business Strategy Development",
      "Business-Model Analysis",
      "Strategic Planning",
      "Business Development",
      "Process Improvement",
      "Operational Performance",
      "Identifying Opportunities for Growth and Expansion",
      "Supporting Business Development and Client Growth Across SME and Property-Management Portfolios",
    ],

    approach: [
      {
        title: "The Strategic Approach",
        body: "The work connected: Current Position → Business Model → Performance → Opportunity → Constraint → Strategic Priority. Rather than treating strategy as a document produced at the end, the focus was on connecting strategic choices to the organisation's operating reality.",
      },
      {
        title: "Business Model Analysis",
        body: "The analytical side of this work created a bridge between business context and evidence: Business question → Business model → Data / evidence → Insight → Strategic decision. This helped turn broad questions about performance and growth into more structured strategic considerations.",
      },
      {
        title: "Strategic Insight",
        body: "A strategy becomes useful when it connects a business question to a decision that can actually be executed. That means recommendations need to reflect not only the opportunity itself, but the organisation's resources, processes, capabilities and ability to deliver.",
      },
    ],
    processFlow: {
      title: "Strategy Framework",
      steps: [
        "Current Position",
        "Business Model",
        "Performance",
        "Opportunity",
        "Constraint",
        "Strategic Priority",
      ],
    },
    outcome:
      "The work supported strategic planning, business development, process improvement and the identification of growth opportunities across the organisations and portfolios involved. Specific client-level growth or revenue figures are not presented because they are not documented in the available professional record.",
    demonstrates: [
      "Business strategy",
      "Business-model analysis",
      "Growth planning",
      "Business development",
      "Consulting",
      "Opportunity assessment",
      "Strategic decision support",
    ],
    role: "I have worked across business strategy, business development, operations and analytical business-model analysis, combining commercial context with structured analysis to support strategic decisions.",
    reflection:
      "A strategy becomes useful when it connects a business question to a decision that can actually be executed.",
  },
];

// Technical projects are filtered directly by their category
// (Machine Learning / Power BI / Tableau).
export const projects: Project[] = [
  {
    slug: "marketing-analysis",
    title: "Marketing Response Analysis",
    category: "Machine Learning",
    problem:
      "Campaign spend was being allocated on intuition, with no reliable read on which market signals actually preceded conversion.",
    approach:
      "Built a gradient-boosted classifier over historical campaign and market-trend data, then pushed performance further with systematic hyperparameter tuning via Grid Search CV across depth, learning rate and estimator count.",
    tools: ["Python", "XGBoost", "Grid Search CV", "pandas", "scikit-learn"],
    outcome:
      "Identified market-trend signals as the strongest predictors of campaign response, ahead of raw spend level and channel mix, giving the business an evidence base for reallocating budget instead of repeating last quarter's plan.",
    metric: { label: "Result", value: "Tuned XGBoost beat the untuned baseline" },

  },
  {
    slug: "stock-price-prediction",
    title: "Stock Price Prediction Engine",
    category: "Machine Learning",
    problem:
      "Financial decision-making needed a quantitative forward view rather than backward-looking reporting alone.",
    approach:
      "Engineered lagged and rolling features from historical price series, trained an XGBoost regressor, and evaluated it on held-out periods using RMSE and MAE to keep the error profile honest.",
    tools: ["Python", "XGBoost", "NumPy", "Matplotlib"],
    outcome:
      "Achieved strong accuracy with low error metrics, giving a defensible input into financial analysis and scenario planning.",
    metric: { label: "Result", value: "Low RMSE / MAE" },
  },
  {
    slug: "cancer-classification",
    title: "Cancer Classification - Malignant vs Benign",
    category: "Machine Learning",
    problem:
      "A diagnostic dataset needed a classifier where a false negative carries far more cost than a false positive.",
    approach:
      "Started with an interpretable Decision Tree Classifier as the baseline, then boosted with XGBoost and compared both on precision, recall and confusion-matrix behaviour rather than raw accuracy alone.",
    tools: ["Python", "Decision Tree", "XGBoost", "scikit-learn"],
    outcome:
      "Boosting delivered a significant lift in prediction accuracy over the baseline tree while keeping the decision logic explainable to non-technical reviewers.",
    metric: { label: "Lift", value: "Tree → XGBoost" },
  },
  {
    slug: "weather-prediction",
    title: "Weather Forecasting Model",
    category: "Machine Learning",
    problem:
      "Operational planning depended on forecasts that were too coarse for short-horizon scheduling.",
    approach:
      "Cleaned and resampled multi-variable meteorological data, then trained and optimised an XGBoost forecasting model with iterative feature selection.",
    tools: ["Python", "XGBoost", "pandas", "Feature engineering"],
    outcome:
      "Improved predictive performance through optimisation, producing a forecast usable as a planning input rather than a curiosity.",
    metric: { label: "Focus", value: "Short-horizon accuracy" },
  },
  {
    slug: "wine-quality",
    title: "Wine Quality Prediction",
    category: "Machine Learning",
    problem:
      "Raw quality data was riddled with missing values and outliers that quietly wrecked naive models.",
    approach:
      "Ran a full preprocessing pass — missing-value imputation, outlier treatment, scaling — then benchmarked Random Forest against a Support Vector Classifier to see which handled the cleaned feature space better.",
    tools: ["Random Forest", "SVC", "Python", "Data cleaning"],
    outcome:
      "Demonstrated how much of model performance is won in preprocessing, with a documented comparison between ensemble and margin-based approaches.",
    metric: { label: "Compared", value: "Random Forest vs SVC" },
  },
  {
    slug: "store-sales-dashboard",
    title: "Store Sales Dashboard",
    category: "Power BI",
    problem:
      "Retail performance was reported in static spreadsheets, so questions about a specific region or period took days to answer.",
    approach:
      "Modelled the sales data into a clean star schema, wrote DAX measures for period-on-period movement, and designed an interactive report using charts and heat maps with cross-filtering across every visual.",
    tools: ["Power BI", "DAX", "Data modelling", "SQL"],
    outcome:
      "Stakeholders moved from waiting on reports to self-serving answers, improving how quickly commercial decisions could be made.",
    metric: { label: "Shift", value: "Static → self-serve" },
  },
  {
    slug: "supply-chain-dashboard",
    title: "Supply Chain Visibility Dashboard",
    category: "Power BI",
    problem:
      "Delivery slippage was only visible after it had already happened, with no single view across stages and suppliers.",
    approach:
      "Built an advanced Power BI report combining Gantt charts for stage timelines, heat maps for bottleneck density, and stacked bars for volume mix by supplier and category.",
    tools: ["Power BI", "Gantt visuals", "Heat maps", "DAX"],
    outcome:
      "Gave operations a single surface for spotting bottlenecks early instead of reconciling them retrospectively.",
    metric: { label: "Coverage", value: "End-to-end stages" },
  },
  {
    slug: "jobs-data-dashboard",
    title: "Jobs Data Dashboard",
    category: "Tableau",
    problem:
      "Employment data was fragmented across categories and regions with no way to explore trends interactively.",
    approach:
      "Designed an interactive Tableau dashboard visualising employment trends, job categories and regional distribution, with linked filters and drill-down by geography.",
    tools: ["Tableau", "Data blending", "Geo analytics"],
    outcome:
      "Turned a static labour dataset into an exploratory tool for spotting where demand is actually concentrating.",
    metric: { label: "Dimensions", value: "Trend · Category · Region" },
  },
  {
    slug: "house-data-dashboard",
    title: "Housing Market Dashboard",
    category: "Tableau",
    problem:
      "Property pricing questions required manual slicing of large listing datasets every time the scope changed.",
    approach:
      "Built an interactive Tableau dashboard analysing property prices, locations and market trends, with parameter-driven filtering across price bands and areas.",
    tools: ["Tableau", "Calculated fields", "Parameters"],
    outcome:
      "Made market trends legible at a glance and comparable across locations without rebuilding the analysis each time.",
    metric: { label: "Lens", value: "Price · Location · Trend" },
  },
];

export const skillGroups = [
  {
    name: "Data & Programming",
    items: [
      "SQL (DDL, DML, Joins, Subqueries, Views)",
      "Python for Data Science",
      "R",
      "Advanced Microsoft Excel",
      "Data Modeling & Normalization",
      "ETL / ELT Processes",
      "Data Cleaning & Transformation",
      "Database Management & Security",
    ],
  },
  {
    name: "Machine Learning",
    items: [
      "Regression Analysis",
      "Classification Models",
      "Clustering Models",
      "XGBoost",
      "Random Forest & SVC",
      "Decision Trees",
      "Hyperparameter Tuning (Grid Search CV)",
    ],
  },
  {
    name: "BI & Visualisation",
    items: [
      "Power BI",
      "DAX",
      "Tableau",
      "Dashboard Development",
      "Business Reporting",
      "Data Visualization",
      "Git & GitHub",
    ],
  },
  {
    name: "Business & Consulting",
    items: [
      "Business Strategy",
      "Operations Optimisation",
      "Stakeholder Management",
      "Project Management",
      "Process Improvement",
      "CRM Systems",
      "Decision-Making",
    ],
  },
];

export const experience = [
  {
    role: "Founder",
    company: "Kajco Finance Ltd",
    place: "London, UK",
    period: "MAR 2025 - PRESENT",
    current: true,
    bullets: [
      "Founding Kajco Finance Ltd to develop inclusive digital lending and credit infrastructure for emerging markets.",
      "Designing the Kajco Retailer Credit System, integrating behavioural scoring and merchant onboarding to strengthen credit assessment.",
      "Leading regulatory planning and cross-functional execution to support the Kajco.io platform and lending operations.",
    ],
  },
  {
    role: "Data Analyst Trainee",
    company: "IT Skills",
    place: "London, UK",
    period: "MAY 2025 - AUG 2026",
    current: true,
    bullets: [
      "Led automation of data preparation workflows, cutting manual effort while improving accuracy of business insights and reporting.",
      "Developed and enhanced interactive Power BI dashboards, giving stakeholders real-time visualisations for timelier decisions.",
      "Performed in-depth business model analysis to support strategic planning, identifying trends, opportunities and growth areas.",
      "Integrated customer feedback with digital and in-store datasets for a fuller view of customer behaviour.",
      "Cleaned, structured and transformed large datasets in SQL, ensuring consistency and reliability for analysis.",
    ],
  },
  {
    role: "Managing Consultant",
    company: "Freetown Consultancy & Services Ltd",
    place: "Lagos, Nigeria",
    period: "AUG 2024 - JUN 2026",
    bullets: [
      "Led operational improvement initiatives for SMEs, enhancing workforce performance and retention.",
      "Developed business strategies and implemented process improvements to increase operational efficiency.",
      "Designed onboarding and training programmes to strengthen productivity and policy compliance.",
    ],
  },
  {
    role: "Business Strategy Manager",
    company: "Freetown Consultancy & Services",
    place: "Lagos, Nigeria",
    period: "JAN 2019 - AUG 2024",
    bullets: [
      "Managed business operations and remote teams to improve productivity and service delivery.",
      "Implemented process improvements and performance reporting to enhance operational visibility.",
      "Supported business development and client growth across SME and property management portfolios.",
    ],
  },
  {
    role: "Project Manager",
    company: "Rebou Albadya Project Management Services",
    place: "Dubai, UAE",
    period: "MAR 2022 - JUL 2023",
    bullets: [
      "Managed project schedules, resources and stakeholder communications to ensure timely delivery.",
      "Introduced operational reporting to improve project tracking and compliance.",
      "Improved workforce coordination through proactive planning and communication.",
    ],
  },
  {
    role: "Office Manager",
    company: "Hamzat Ismail Buildings Maintenance LLC",
    place: "Ajman, UAE",
    period: "MAR 2020 - MAR 2022",
    bullets: [
      "Implemented digital workflows that increased office productivity by approximately 25%.",
      "Managed vendor contracts and procurement, reducing operating costs by approximately 15%.",
      "Coordinated administrative operations to support project delivery and compliance.",
    ],
  },
  {
    role: "Administrator (NYSC)",
    company: "Umuahia South LGA Secondary Schools",
    place: "Nigeria",
    period: "MAR 2019 - MAR 2020",
    bullets: [
      "Coordinated administrative activities and maintained accurate institutional records.",
      "Digitized reporting processes, improving accuracy and turnaround time.",
      "Supported student engagement initiatives and school operations.",
    ],
  },
  {
    role: "Account Manager (Intern)",
    company: "First Pension Custodian Nigeria Ltd",
    place: "Lagos, Nigeria",
    period: "FEB 2014 - SEP 2014",
    bullets: [
      "Processed pension account transactions and reconciliations in line with regulatory requirements.",
      "Prepared financial and operational reports to support accurate record-keeping.",
      "Maintained client account documentation and supported account administration.",
    ],
  },
];

export const education = [
  {
    qualification: "MBA in Global Business",
    school: "Coventry University London",
    period: "May 2023 – Sep 2024",
  },
  { qualification: "BSc Microbiology", school: "Imo State University", period: "Sep 2014 – Aug 2018" },
  {
    qualification: "National Diploma, Computer Science",
    school: "The Polytechnic Ibadan",
    period: "Aug 2011 – Sep 2013",
  },
];

export const certifications = [
  "Foundation Chartered Manager (fCMgr) - Chartered Management Institute",
  "Certified SAFe® Scrum Master (CSM)",
  "CMI Certificate in Strategic Management and Leadership",
  "Data Analysis Certificate - Future Connect Training",
];

export const services = [
  {
    title: "Strategy & Consulting",
    body: "I evaluate where a business stands, identify opportunities and problems, and build practical strategies for growth and improvement - from business model analysis and market opportunity assessment to operational strategy and performance management.",
    practice:
      "Developed growth and operational strategies across SME and property-management environments, including workforce retention, onboarding and training initiatives.",
    points: ["Business model analysis", "Market opportunity assessment", "Performance management"],
  },
  {
    title: "Data Analytics & Business Intelligence",
    body: "I turn raw, messy data into evidence and decisions - cleaning, structuring and analysing datasets in SQL and Python, then building the dashboards that make the findings usable.",
    practice:
      "Built interactive Power BI dashboards (including a supply-chain dashboard with Gantt charts and heat maps) and Tableau dashboards analysing employment trends, regional distribution and property market data.",
    points: ["SQL & Python", "Power BI, Tableau, DAX", "Excel & R"],
  },
  {
    title: "Machine Learning & Predictive Analytics",
    body: "I apply ML to structured business problems - from data preparation through model development, tuning and evaluation.",
    practice:
      "Predictive and classification projects spanning marketing analysis, stock-price prediction, financial analysis and classification, including data cleaning, preprocessing and hyperparameter tuning.",
    points: ["XGBoost & Random Forest", "Decision Trees & SVC", "Hyperparameter tuning"],
  },
  {
    title: "Operations & Delivery",
    body: "I close the gap between recommendation and results - process improvement, workflow design, project and stakeholder management.",
    practice:
      "Implemented digital workflows that lifted office productivity by ~25%, and managed vendor/procurement activity that cut operating costs by ~15%.",
    points: ["Process improvement", "Workflow design", "Stakeholder management"],
  },
  {
    title: "Financial Services & Fintech",
    body: "I've applied the same strategy-plus-data approach to financial services problems, including digital lending and credit assessment - thinking through how behavioural data, merchant information and risk assessment can support better credit decisions.",
    practice:
      "Led the product, data and regulatory architecture behind Kajco's credit and trust infrastructure - see the case studies",
    practiceLink: "/projects/kajco-credit-trust-infrastructure",
    points: ["Digital lending", "Credit assessment", "Behavioural scoring"],
  },
];

