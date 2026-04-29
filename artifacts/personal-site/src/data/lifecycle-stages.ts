import { UserPlus, Users, GraduationCap, Activity, Target, HeartHandshake, LogOut, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface Tool {
  name: string;
  url: string;
}

export interface LifecycleStage {
  slug: string;
  stage: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  accentColor: string;
  challenge: string;
  overview: string;
  processSteps: ProcessStep[];
  tools: Tool[];
  metrics: ImpactMetric[];
  principles: { title: string; desc: string }[];
}

export const lifecycleStages: LifecycleStage[] = [
  {
    slug: "attract-brand",
    stage: "01",
    title: "Attract & Brand",
    tagline: "Your employer brand is your first HR product.",
    icon: UserPlus,
    accentColor: "#F59E0B",
    challenge:
      "Most organizations treat employer branding as a marketing afterthought — a careers page last updated years ago and job adverts written like legal disclaimers. In a market where talent has options, a weak employer brand doesn't just mean fewer applicants; it means the wrong applicants, at higher cost, with longer fill times.",
    overview:
      "I help organizations build a digital-first talent attraction engine — one that makes the right people want to work for you before they ever speak to a recruiter. This starts with honest employer value proposition design, extends through intelligent sourcing architecture, and ends with a candidate experience that reflects your actual culture.",
    processSteps: [
      {
        title: "Employer Value Proposition (EVP) Design",
        desc: "Conduct structured EVP discovery across employee segments to surface what genuinely differentiates working for your organization — beyond free coffee and flexible hours.",
      },
      {
        title: "Job Architecture & Role Profiling",
        desc: "Redesign job families, grades, and role descriptions using market benchmarking data to ensure postings attract the right talent with accurate expectations.",
      },
      {
        title: "Digital Talent Marketing Strategy",
        desc: "Build a channel mix strategy — LinkedIn, targeted job boards, employee advocacy, and programmatic advertising — matched to the personas of your target talent pools.",
      },
      {
        title: "AI-Assisted Sourcing Implementation",
        desc: "Deploy sourcing intelligence tools that surface passive candidates, track competitor talent movements, and recommend outreach timing based on engagement signals.",
      },
      {
        title: "Candidate Experience Design",
        desc: "Map and redesign every pre-application touchpoint — careers site, social presence, employee review response strategy — to create a coherent, compelling first impression.",
      },
    ],
    tools: [
      { name: "LinkedIn Talent Insights", url: "https://business.linkedin.com/talent-solutions/talent-insights" },
      { name: "Phenom People", url: "https://www.phenom.com" },
      { name: "Beamery", url: "https://beamery.com" },
      { name: "SmartDreamers", url: "https://www.smartdreamers.com" },
      { name: "Workday Recruiting", url: "https://www.workday.com/en-us/products/human-capital-management/recruiting.html" },
      { name: "Glassdoor Employer", url: "https://www.glassdoor.com/employers" },
      { name: "HireEZ", url: "https://hireez.com" },
      { name: "Paradox (Olivia AI)", url: "https://www.paradox.ai" },
    ],
    metrics: [
      { value: "45%", label: "Increase in qualified applicant rate" },
      { value: "60%", label: "Reduction in cost-per-apply" },
      { value: "3×", label: "Faster passive talent pipeline build" },
      { value: "72%", label: "Improvement in careers site conversion" },
    ],
    principles: [
      {
        title: "Brand before budget",
        desc: "Spending more on job boards without fixing the underlying EVP is pouring water into a leaky bucket. Authenticity converts; volume advertising does not.",
      },
      {
        title: "Precision over reach",
        desc: "The goal is not the most applicants — it is the right applicants. Precise targeting to the right personas reduces screening load and improves hire quality.",
      },
      {
        title: "Data-led iteration",
        desc: "Employer brand effectiveness is measurable. Source quality, time-to-shortlist, and offer acceptance rates all tell you whether your brand is working.",
      },
    ],
  },
  {
    slug: "recruit-select",
    stage: "02",
    title: "Recruit & Select",
    tagline: "Speed and quality are not a trade-off — they are a design problem.",
    icon: Users,
    accentColor: "#3B82F6",
    challenge:
      "Most recruitment processes are designed for HR convenience, not candidate experience. The result: a leaky funnel, unconscious bias baked into selection, and top candidates accepting competitor offers while still waiting for feedback. Slow, inconsistent selection is one of the most expensive HR problems organizations refuse to fix.",
    overview:
      "I redesign end-to-end selection processes around three principles: speed, structure, and signal quality. That means replacing gut-feel interviews with validated assessment frameworks, automating the administrative burden from screening to offer, and building the kind of candidate experience that people talk about — for the right reasons.",
    processSteps: [
      {
        title: "Recruitment Process Audit & Redesign",
        desc: "Map the current state hiring journey including all handoffs, SLAs, and decision points. Identify where time, quality, and candidate experience are being lost.",
      },
      {
        title: "Structured Interview Framework Design",
        desc: "Build competency-based interview guides, calibration rubrics, and hiring panel training so every candidate is assessed consistently and fairly.",
      },
      {
        title: "Digital Assessment Architecture",
        desc: "Select and integrate appropriate assessment tools — situational judgment, cognitive, technical — at the right stage in the funnel to reduce bias and predict performance.",
      },
      {
        title: "ATS Configuration & Workflow Automation",
        desc: "Implement or optimize Applicant Tracking Systems with automated screening logic, communication templates, and real-time hiring manager dashboards.",
      },
      {
        title: "Digital Offer & Pre-Boarding Workflow",
        desc: "Build automated offer generation, digital contract execution, and candidate portal access so the experience between verbal offer and start date is seamless.",
      },
    ],
    tools: [
      { name: "Greenhouse", url: "https://www.greenhouse.com" },
      { name: "SmartRecruiters", url: "https://www.smartrecruiters.com" },
      { name: "Workday Recruiting", url: "https://www.workday.com/en-us/products/human-capital-management/recruiting.html" },
      { name: "HireVue", url: "https://www.hirevue.com" },
      { name: "Pymetrics", url: "https://www.pymetrics.ai" },
      { name: "Vervoe", url: "https://vervoe.com" },
      { name: "DocuSign", url: "https://www.docusign.com" },
      { name: "Paradox (Olivia AI)", url: "https://www.paradox.ai" },
    ],
    metrics: [
      { value: "40%", label: "Reduction in average time-to-hire" },
      { value: "35%", label: "Increase in hiring manager satisfaction" },
      { value: "28%", label: "Improvement in offer acceptance rate" },
      { value: "50%", label: "Reduction in recruiter administrative time" },
    ],
    principles: [
      {
        title: "Structure removes bias",
        desc: "Unstructured interviews have a predictive validity of just 0.20. Structured, competency-based assessment consistently outperforms gut instinct — and creates defensible decisions.",
      },
      {
        title: "Candidate experience is a brand signal",
        desc: "Every candidate is a potential employee, customer, or brand ambassador. How you treat people in the process tells them everything about how you treat people at work.",
      },
      {
        title: "Automation for humans, not instead of them",
        desc: "Technology should eliminate administrative friction, not replace human judgment in hiring decisions. The goal is more recruiter time for meaningful conversations.",
      },
    ],
  },
  {
    slug: "onboard-induct",
    stage: "03",
    title: "Onboard & Induct",
    tagline: "The contract signature should be the start of the experience, not the end of the process.",
    icon: GraduationCap,
    accentColor: "#10B981",
    challenge:
      "The average new hire takes 8–12 months to reach full productivity. Most onboarding programs dump paperwork on people during their first week, call it integration, and then wonder why 20% of new hires leave within the first 45 days. Poor onboarding is a recruitment problem — you have just paid to acquire someone and then handed them to a broken process.",
    overview:
      "I design digital onboarding ecosystems that begin the moment a candidate accepts an offer — not when they walk through the door. From automated pre-boarding journeys to structured 90-day integration plans, the goal is to make every new hire feel informed, connected, and purposeful before their first real meeting.",
    processSteps: [
      {
        title: "Pre-Boarding Digital Journey Design",
        desc: "Build automated touchpoints between offer acceptance and day one — welcome content, team introductions, technology setup, and culture primers — that reduce first-day anxiety and accelerate connection.",
      },
      {
        title: "Systems Access & IT Provisioning Automation",
        desc: "Integrate HR, IT, and facilities workflows so every new hire has their access, equipment, and workspace ready on day one — without manual coordination.",
      },
      {
        title: "Role Clarity & 30/60/90 Day Framework",
        desc: "Design structured onboarding plans that give new hires clear milestones, defined success criteria, and scheduled check-ins with managers and mentors.",
      },
      {
        title: "Culture & Compliance Integration Programme",
        desc: "Build digital learning pathways covering organizational culture, values, compliance requirements, and operating norms — accessible, engaging, and trackable.",
      },
      {
        title: "Onboarding Analytics & Feedback Design",
        desc: "Instrument the onboarding process with pulse surveys, completion tracking, and manager check-in data so you can continuously improve the experience.",
      },
    ],
    tools: [
      { name: "Enboarder", url: "https://enboarder.com" },
      { name: "Workday HCM", url: "https://www.workday.com/en-us/products/human-capital-management/overview.html" },
      { name: "ServiceNow HRSD", url: "https://www.servicenow.com/products/hr-service-delivery.html" },
      { name: "BambooHR", url: "https://www.bamboohr.com" },
      { name: "Culture Amp", url: "https://www.cultureamp.com" },
      { name: "Docebo", url: "https://www.docebo.com" },
      { name: "Slack / Microsoft Teams", url: "https://slack.com" },
      { name: "DocuSign", url: "https://www.docusign.com" },
    ],
    metrics: [
      { value: "50%", label: "Faster time-to-full-productivity" },
      { value: "35%", label: "Improvement in new hire retention at 12 months" },
      { value: "80%", label: "Average new hire satisfaction score" },
      { value: "90%", label: "Day-one readiness rate achieved" },
    ],
    principles: [
      {
        title: "Onboarding starts at offer acceptance",
        desc: "The 2–4 weeks between offer and start date are the highest-risk period for candidate drop-off. Structured pre-boarding reduces ghosting and builds commitment.",
      },
      {
        title: "Context before content",
        desc: "New hires do not need more information — they need the right context. Who does what, how decisions get made, and what success looks like in this role, in this team, right now.",
      },
      {
        title: "Connection drives retention",
        desc: "Research consistently shows that new hires who build strong internal relationships within 90 days are significantly more likely to stay. Onboarding should engineer those connections.",
      },
    ],
  },
  {
    slug: "learn-develop",
    stage: "04",
    title: "Learn & Develop",
    tagline: "Learning that does not connect to performance is an expense, not an investment.",
    icon: Activity,
    accentColor: "#8B5CF6",
    challenge:
      "Most L&D functions spend significant budgets on training that nobody finishes, on skills that do not connect to business needs, and on platforms that collect dust. The result is low completion rates, frustrated managers, and a workforce that does not feel developed despite being enrolled in programmes. L&D has a credibility problem — and it starts with measurement.",
    overview:
      "I redesign L&D functions around the principle that learning must be measurable, personalized, and connected to real career and business outcomes. That means modern learning infrastructure, skills taxonomies tied to workforce strategy, AI-powered personalization, and measurement frameworks that prove impact.",
    processSteps: [
      {
        title: "Skills Framework & Taxonomy Design",
        desc: "Build an organization-wide skills architecture that maps critical competencies by role family, identifies current-to-future state gaps, and creates a shared language for talent development.",
      },
      {
        title: "LMS / LXP Architecture & Implementation",
        desc: "Select, configure, and deploy the right learning platform — from full LMS implementations to modern experience platforms — with content libraries, pathways, and completion analytics.",
      },
      {
        title: "AI-Personalized Learning Path Design",
        desc: "Implement adaptive learning engines that recommend content based on role, performance data, career goals, and learning history — so every employee gets a relevant curriculum, not a generic one.",
      },
      {
        title: "Leadership Pipeline Programme Design",
        desc: "Build structured development programmes for high-potential employees — assessment centres, mentoring frameworks, stretch assignment architecture, and readiness tracking.",
      },
      {
        title: "L&D Measurement & ROI Framework",
        desc: "Implement the Kirkpatrick-Phillips model with digital instrumentation: reaction surveys, knowledge tests, behavior observations, and business impact linkage to justify investment.",
      },
    ],
    tools: [
      { name: "Workday Learning", url: "https://www.workday.com/en-us/products/human-capital-management/learning.html" },
      { name: "Cornerstone OnDemand", url: "https://www.cornerstoneondemand.com" },
      { name: "Degreed", url: "https://degreed.com" },
      { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning" },
      { name: "Docebo", url: "https://www.docebo.com" },
      { name: "SAP SuccessFactors LMS", url: "https://www.sap.com/products/hcm/learning-management.html" },
      { name: "Moodle / TalentLMS", url: "https://moodle.org" },
      { name: "EdCast", url: "https://www.edcast.com" },
    ],
    metrics: [
      { value: "55%", label: "Increase in course completion rates" },
      { value: "40%", label: "Reduction in L&D cost-per-learner" },
      { value: "2×", label: "Faster internal promotion pipeline rate" },
      { value: "60%", label: "Improvement in skills gap identification speed" },
    ],
    principles: [
      {
        title: "Skills, not courses",
        desc: "The goal of L&D is not training hours — it is demonstrable skill acquisition. Every learning intervention should map to a defined competency with a measurable application outcome.",
      },
      {
        title: "Personalisation at scale",
        desc: "One-size-fits-all training programmes are one of the most expensive ways to fail. AI-powered personalization makes relevance achievable at enterprise scale.",
      },
      {
        title: "Build learning into work",
        desc: "The best learning happens in the flow of work — not in a classroom or an e-learning module. Design programmes that combine formal, social, and experiential learning in proportion.",
      },
    ],
  },
  {
    slug: "perform-reward",
    stage: "05",
    title: "Perform & Reward",
    tagline: "Annual reviews are a symptom of broken systems, not a solution.",
    icon: Target,
    accentColor: "#EF4444",
    challenge:
      "Performance management is the most universally disliked HR process — by employees, managers, and HR teams alike. Annual rating cycles generate paperwork, not performance. They demotivate the majority to reward the few, create defensive conversations rather than developmental ones, and produce data that is too old and too biased to drive real decisions.",
    overview:
      "I implement continuous performance frameworks that replace the annual ritual with an always-on system — real-time goal tracking, frequent feedback cycles, and compensation structures that reward outcomes fairly and automatically. The goal is a performance culture, not a performance review.",
    processSteps: [
      {
        title: "Performance Framework Redesign",
        desc: "Replace or transform annual review cycles with continuous performance models — OKRs, regular check-ins, and calibrated rating frameworks that reflect actual contribution.",
      },
      {
        title: "Goal-Setting & OKR Architecture",
        desc: "Design company-wide OKR cascades that connect individual goals to team objectives and business strategy, with real-time progress visibility for employees and managers.",
      },
      {
        title: "Continuous Feedback System Implementation",
        desc: "Deploy digital feedback tools enabling 360-degree, real-time input — peer recognition, upward feedback, and manager coaching conversations — that build a culture of honest development.",
      },
      {
        title: "Compensation Benchmarking & Pay Architecture",
        desc: "Conduct market benchmarking analysis and redesign salary bands, incentive structures, and bonus frameworks aligned to performance data and business outcomes.",
      },
      {
        title: "Pay Equity Analysis & Compliance",
        desc: "Run statistical pay equity audits by gender, ethnicity, and other protected characteristics with remediation planning to close identified gaps and build trust.",
      },
    ],
    tools: [
      { name: "Lattice", url: "https://lattice.com" },
      { name: "15Five", url: "https://www.15five.com" },
      { name: "Workday Performance", url: "https://www.workday.com/en-us/products/human-capital-management/talent-management.html" },
      { name: "SAP SuccessFactors", url: "https://www.sap.com/products/hcm.html" },
      { name: "Betterworks", url: "https://www.betterworks.com" },
      { name: "Mercer Benchmark Database", url: "https://www.mercer.com/solutions/workforce-and-careers/talent-strategy/compensation-data-and-benchmarking/" },
      { name: "CompTrak", url: "https://www.comptrak.com" },
      { name: "Visier Workforce Analytics", url: "https://www.visier.com" },
    ],
    metrics: [
      { value: "45%", label: "Increase in employee engagement scores" },
      { value: "30%", label: "Reduction in performance-related attrition" },
      { value: "28%", label: "Improvement in pay equity compliance" },
      { value: "3×", label: "Increase in manager-employee feedback frequency" },
    ],
    principles: [
      {
        title: "Frequency beats formality",
        desc: "A brief fortnightly check-in delivers more performance improvement than an annual review. Feedback must be timely enough to act on — not filed away in a PDF.",
      },
      {
        title: "Outcomes over outputs",
        desc: "Measuring what people do (activity) instead of what they achieve (impact) creates performers who are busy but not effective. Design metrics around value created.",
      },
      {
        title: "Fair pay is a retention strategy",
        desc: "Pay equity is not just a legal obligation — it is a trust signal. Organizations with transparent, equitable pay structures see measurably lower attrition among high performers.",
      },
    ],
  },
  {
    slug: "retain-engage",
    stage: "06",
    title: "Retain & Engage",
    tagline: "By the time someone hands in their notice, you have already lost.",
    icon: HeartHandshake,
    accentColor: "#06B6D4",
    challenge:
      "Employee disengagement costs organizations an estimated 34% of a disengaged employee's annual salary in lost productivity. The challenge is that disengagement is invisible until it becomes attrition — by which point the cost has already been incurred. Most organizations measure engagement once a year and act on the data never.",
    overview:
      "I build predictive retention and engagement systems that turn workforce data into proactive interventions. From always-on listening tools to predictive attrition modelling and structured succession planning, the goal is to know who is at risk, why, and what to do about it — before they decide to leave.",
    processSteps: [
      {
        title: "Predictive Attrition Modelling",
        desc: "Implement people analytics models that identify flight-risk employees using engagement signals, performance trends, tenure patterns, and manager relationship data — weeks before a resignation.",
      },
      {
        title: "Employee Listening & Pulse Survey Architecture",
        desc: "Design a continuous listening strategy — annual surveys, quarterly pulses, lifecycle touchpoints, and always-on channels — that gives employees a voice and the organization real intelligence.",
      },
      {
        title: "Succession Planning & Talent Pipeline Design",
        desc: "Build structured succession frameworks for critical roles with readiness assessments, development actions, and coverage ratios tracked in real time.",
      },
      {
        title: "Career Pathing & Internal Mobility Design",
        desc: "Create transparent career frameworks that show employees exactly how to grow within the organization — and build internal talent marketplaces that match people to opportunities before they look externally.",
      },
      {
        title: "Manager Effectiveness Programme",
        desc: "Instrument manager quality with upward feedback, team health metrics, and structured development — because the single biggest driver of employee retention is the direct manager.",
      },
    ],
    tools: [
      { name: "Glint (Microsoft Viva)", url: "https://www.microsoft.com/en-us/microsoft-viva/glint" },
      { name: "Peakon (Workday)", url: "https://www.workday.com/en-us/products/peakon-employee-voice/overview.html" },
      { name: "Culture Amp", url: "https://www.cultureamp.com" },
      { name: "Visier People Analytics", url: "https://www.visier.com" },
      { name: "IBM Watson Talent", url: "https://www.ibm.com/products/watson-talent-frameworks" },
      { name: "Workday Workforce Planning", url: "https://www.workday.com/en-us/products/adaptive-planning/overview.html" },
      { name: "Eightfold AI", url: "https://eightfold.ai" },
      { name: "Gloat (Talent Marketplace)", url: "https://gloat.com" },
    ],
    metrics: [
      { value: "35%", label: "Reduction in voluntary attrition" },
      { value: "50%", label: "Improvement in succession coverage ratio" },
      { value: "40%", label: "Increase in employee engagement scores" },
      { value: "6 wks", label: "Earlier flight-risk identification window" },
    ],
    principles: [
      {
        title: "Retention is a system, not a programme",
        desc: "Retention cannot be fixed with a perks programme or a free gym membership. It is an outcome of everything that happens to an employee from offer acceptance onwards.",
      },
      {
        title: "Listen to act, not to report",
        desc: "Employee surveys are only as valuable as the actions they generate. The most damaging thing an organization can do is ask for input and then not respond to it.",
      },
      {
        title: "Internal mobility reduces attrition",
        desc: "Employees who move internally are 64% more likely to remain with the organization three years later. Building visible career paths is the most cost-effective retention tool available.",
      },
    ],
  },
  {
    slug: "offboard-transition",
    stage: "07",
    title: "Offboard & Transition",
    tagline: "Every exit carries institutional knowledge. Design to keep it.",
    icon: LogOut,
    accentColor: "#F97316",
    challenge:
      "Offboarding is almost universally treated as a compliance checklist — return the laptop, revoke the access, conduct a 15-minute exit interview nobody reads. Organizations lose critical institutional knowledge, create security risks from poorly managed access removal, and miss the opportunity to turn departing employees into long-term brand advocates and even future rehires.",
    overview:
      "I design structured offboarding systems that treat every exit as valuable organizational intelligence. From knowledge transfer protocols and exit data capture to alumni network building and compliant access deprovisioning, the goal is to close the loop on the employee lifecycle in a way that protects, preserves, and maintains value.",
    processSteps: [
      {
        title: "Structured Knowledge Transfer Protocol",
        desc: "Design systematic handover frameworks for departing employees — documentation templates, successor shadowing periods, and critical knowledge mapping to ensure continuity.",
      },
      {
        title: "Exit Intelligence Programme",
        desc: "Replace the perfunctory exit interview with a structured exit intelligence system: digital surveys at departure, follow-up interviews at 90 days post-exit, and thematic analysis of data across cohorts.",
      },
      {
        title: "Systems Access & Compliance Deprovisioning",
        desc: "Build automated deprovisioning workflows integrated with IT and security systems to ensure timely, complete, and auditable removal of access on the last day — not weeks later.",
      },
      {
        title: "Alumni Network & Rehire Pipeline Design",
        desc: "Create a structured alumni engagement programme — communications, events, and a formal boomerang recruitment pathway — that turns departures into lasting relationships.",
      },
      {
        title: "Offboarding Analytics & Culture Insight",
        desc: "Aggregate exit data with engagement and performance history to identify systemic drivers of attrition, manager-specific patterns, and team-level risks that require action.",
      },
    ],
    tools: [
      { name: "Workday HCM", url: "https://www.workday.com/en-us/products/human-capital-management/overview.html" },
      { name: "ServiceNow HRSD", url: "https://www.servicenow.com/products/hr-service-delivery.html" },
      { name: "Leapsome", url: "https://www.leapsome.com" },
      { name: "Alchemer (SurveyGizmo)", url: "https://www.alchemer.com" },
      { name: "Rippling", url: "https://www.rippling.com" },
      { name: "LinkedIn Alumni", url: "https://www.linkedin.com/alumni" },
      { name: "Okta / Azure AD", url: "https://www.okta.com" },
      { name: "Visier People Analytics", url: "https://www.visier.com" },
    ],
    metrics: [
      { value: "80%", label: "Knowledge capture rate achieved pre-departure" },
      { value: "45%", label: "Reduction in offboarding compliance risk" },
      { value: "25%", label: "Improvement in alumnus rehire acceptance rate" },
      { value: "3 days", label: "Average full deprovisioning completion time" },
    ],
    principles: [
      {
        title: "Exits are insights",
        desc: "A well-designed offboarding process tells you more about your culture, leadership, and EVP than almost any other HR data source. The intelligence is there — most organizations just never collect it.",
      },
      {
        title: "Alumni are assets",
        desc: "Departing employees become customers, referrers, partners, and — increasingly — rehires. The boomerang employee phenomenon is real: treating exits well pays dividends for years.",
      },
      {
        title: "Security without sacrifice",
        desc: "Compliance deprovisioning must be thorough and timely — but it should not feel hostile. The goal is a clean, professional transition that leaves both parties in good standing.",
      },
    ],
  },
];

export const getStageBySlug = (slug: string): LifecycleStage | undefined =>
  lifecycleStages.find((s) => s.slug === slug);
