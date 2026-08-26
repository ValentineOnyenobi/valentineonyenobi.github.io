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
      "Produced a ranked view of the drivers behind campaign response, giving the business an evidence base for reallocating spend instead of repeating last quarter's plan.",
    metric: { label: "Model", value: "XGBoost + GridSearchCV" },
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
      "Understand the commercial objective first, then determine how data and analysis improve the decision.",
    points: ["Digital lending", "Credit assessment", "Behavioural scoring"],
  },
];
