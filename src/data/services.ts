export type ServiceCategoryKey =
  | "paid-media"
  | "development"
  | "seo"
  | "brand"
  | "ai-analytics";

export interface CategoryMeta {
  key: ServiceCategoryKey;
  label: string;
  badge: string;
  tagline: string;
}

export const CATEGORIES_LIST: CategoryMeta[] = [
  {
    key: "paid-media",
    label: "Paid Media & PPC",
    badge: "PAID MEDIA & PPC",
    tagline: "High-ROAS Ad Campaigns & Funnels",
  },
  {
    key: "development",
    label: "Web & Software Development",
    badge: "WEB & SOFTWARE DEV",
    tagline: "Custom Web, Mobile & Enterprise Cloud",
  },
  {
    key: "seo",
    label: "Search & Organic Growth",
    badge: "SEARCH ENGINE OPTIMIZATION",
    tagline: "High-Intent Keyword Dominance & SEO",
  },
  {
    key: "brand",
    label: "Brand & Creative Content",
    badge: "BRANDING & CREATIVE ENGINE",
    tagline: "Positioning, Viral Reels & Social Authority",
  },
  {
    key: "ai-analytics",
    label: "Autonomous AI & Analytics",
    badge: "AI AUTOMATION & ATTRIBUTION",
    tagline: "Speed-to-Lead AI Bots & GA4 Tracking",
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  category: "paid-media" | "development" | "seo" | "brand" | "ai-analytics" | "demand" | "measure";
  categoryKey: ServiceCategoryKey;
  categoryLabel: string;
  categorySubtitle: string;
  title: string;
  subtitle: string;
  desc: string;
  job: string;
  judgedOn: string;
  weWont: string;
  image: string;
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
  accentColor: string;
}

export const servicesData: ServiceItem[] = [
  // =========================================================================
  // CATEGORY 1: PAID MEDIA & PPC
  // =========================================================================
  {
    id: "performance-marketing",
    number: "01",
    category: "paid-media",
    categoryKey: "paid-media",
    categoryLabel: "PAID MEDIA & PPC",
    categorySubtitle: "Turn cold traffic into high-intent buyers with verified ROAS",
    title: "Performance Marketing & Paid Ads",
    subtitle: "Turn cold traffic into high-intent buyers with verified ROAS",
    desc: "We construct data-driven ad campaigns across Google Search, Meta (Instagram & Facebook), YouTube, and LinkedIn. Every rupee of ad spend is measured on one metric: net pipeline revenue.",
    job: "Capture in-market buyers across Meta, Google Search, Performance Max, YouTube, and LinkedIn, turning paid clicks into profitable customer acquisitions.",
    judgedOn: "Net ROAS & Cost Per Qualified Lead (CPQL)",
    weWont: "Report vanity clicks or keep underperforming ad sets alive because they 'might pick up'.",
    image: "/bdb38855-3775-42ba-8d23-f32c41f2e827.webp",
    deliverables: [
      "Google Search & Shopping Ads",
      "Meta & Instagram Ads Scaling",
      "Precision Retargeting Funnels",
      "ROAS & CAC Optimization",
      "Audience & Creative Matrix Testing",
      "Monthly Cut / Keep / Double Audits",
    ],
    ctaLabel: "Audit your ad accounts",
    ctaHref: "/drift-audit",
    accentColor: "#101b96",
  },
  {
    id: "conversion-rate-optimization",
    number: "02",
    category: "paid-media",
    categoryKey: "paid-media",
    categoryLabel: "PAID MEDIA & PPC",
    categorySubtitle: "A faster page with a clearer offer improves every acquisition channel",
    title: "Conversion Rate Optimization (CRO)",
    subtitle: "A faster page with a clearer offer improves every acquisition channel",
    desc: "We diagnose friction across your entire checkout and lead funnel. Through high-converting landing page engineering, multi-variant A/B copy tests, and behavioral heatmaps, we turn more of your existing traffic into revenue.",
    job: "Convert existing visitors into paying customers. A clearer offer and frictionless checkout improves the unit economics of every paid channel simultaneously.",
    judgedOn: "Visitor-to-lead and visitor-to-sale conversion rate lift",
    weWont: "Ship cosmetic redesigns without statistically significant split-testing and behavioral proof.",
    image: "/who we are.webp",
    deliverables: [
      "Landing Page Engineering",
      "A/B Multi-Variant Testing",
      "Checkout Drop-off Elimination",
      "Heatmap & User Session Audits",
      "Speed & Core Web Vitals Fixes",
      "Direct-Response Offer Redesign",
    ],
    ctaLabel: "Explore conversion systems",
    ctaHref: "/drift-audit",
    accentColor: "#2563eb",
  },

  // =========================================================================
  // CATEGORY 2: WEB & SOFTWARE DEVELOPMENT
  // =========================================================================
  {
    id: "custom-software-web-apps",
    number: "03",
    category: "development",
    categoryKey: "development",
    categoryLabel: "WEB & SOFTWARE DEV",
    categorySubtitle: "Scalable, secure digital products built for millions of concurrent users",
    title: "Web & Mobile App Development",
    subtitle: "Scalable, secure digital products built for millions of concurrent users",
    desc: "From custom SaaS platforms to native mobile apps (iOS & Android) and high-concurrency portals, our software engineering team builds robust, fault-tolerant digital architectures.",
    job: "Architect, build, and deploy production-grade software applications that scale effortlessly under heavy enterprise workloads.",
    judgedOn: "System uptime (99.99%), page load latency (<1s), and user engagement retention",
    weWont: "Deliver unmaintainable spaghetti code or lock you into proprietary black-box software.",
    image: "/case study (4).png",
    deliverables: [
      "Full-Stack Next.js & React Web Apps",
      "iOS & Android Mobile Applications",
      "REST & GraphQL Microservice APIs",
      "Database Architecture & Optimization",
      "Role-Based Access Control (RBAC)",
      "Continuous Automated Testing & CI/CD",
    ],
    ctaLabel: "Discuss your software build",
    ctaHref: "/drift-audit",
    accentColor: "#3b82f6",
  },
  {
    id: "ecommerce-portals",
    number: "04",
    category: "development",
    categoryKey: "development",
    categoryLabel: "WEB & SOFTWARE DEV",
    categorySubtitle: "High-speed transactional storefronts engineered for maximum average order value",
    title: "E-Commerce & Digital Storefronts",
    subtitle: "High-speed transactional storefronts engineered for maximum average order value",
    desc: "We engineer headless Shopify and custom Next.js e-commerce platforms featuring instant search, automated inventory sync, personalized product recommendations, and 1-click checkouts.",
    job: "Deliver friction-free commerce experiences that load in milliseconds and turn casual browsers into repeat buyers.",
    judgedOn: "Cart completion rate, checkout speed, and Average Order Value (AOV)",
    weWont: "Rely on bloated off-the-shelf templates that drag down mobile conversion speed.",
    image: "/case study (2).png",
    deliverables: [
      "Headless Shopify & Custom Storefronts",
      "1-Click Frictionless Checkout Funnels",
      "AI Product Recommendation Engines",
      "ERP & Multi-Warehouse Inventory Sync",
      "Payment Gateway Integrations",
      "Subscription & Recurring Billing",
    ],
    ctaLabel: "Scale your e-commerce store",
    ctaHref: "/drift-audit",
    accentColor: "#0284c7",
  },
  {
    id: "aeo-geo-search-visibility",
    number: "05",
    category: "seo",
    categoryKey: "seo",
    categoryLabel: "AI SEARCH & GEO",
    categorySubtitle: "Dominate Answer Engine and Generative Search Visibility",
    title: "AEO & GEO – AI Search Visibility",
    subtitle: "Dominate Answer Engine and Generative Search Visibility",
    desc: "We engineer brand knowledge graphs, structured entity markup, and high-authority digital PR citations so AI answer engines (OpenAI Search, Perplexity, Google AI Overviews, Gemini) recommend your brand as the primary authority.",
    job: "Capture generative AI search impressions, citation mindshare, and high-intent buyer traffic from next-generation AI answer engines.",
    judgedOn: "AI Overview citation frequency, answer engine market share, and referral revenue",
    weWont: "Rely on obsolete keyword stuffing without verifiable schema entity graphs and authoritative citations.",
    image: "/services/seo.webp",
    deliverables: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Knowledge Graph & Schema Markup",
      "Perplexity & OpenAI Entity Seeding",
      "Authoritative Digital PR Citations",
      "AI Overview Brand Sentiment Tracking",
    ],
    ctaLabel: "Audit your AI search visibility",
    ctaHref: "/drift-audit",
    accentColor: "#7c3aed",
  },

  // =========================================================================
  // CATEGORY 3: SEARCH & ORGANIC GROWTH (SEO)
  // =========================================================================
  {
    id: "technical-seo",
    number: "06",
    category: "seo",
    categoryKey: "seo",
    categoryLabel: "SEARCH ENGINE OPTIMIZATION",
    categorySubtitle: "Capture commercial search intent and lower blended customer acquisition cost",
    title: "Technical SEO & Organic Authority",
    subtitle: "Capture commercial search intent and lower blended customer acquisition cost",
    desc: "Every customer who finds you on Google search is one you didn't pay a click for. We combine technical Core Web Vitals audits, high-intent keyword capture, and authoritative backlink architectures to secure durable search dominance.",
    job: "Capture commercial Google search queries, lower customer acquisition costs, and build compound organic authority.",
    judgedOn: "Qualified organic search leads, top-3 keyword rankings, and pipeline revenue",
    weWont: "Chase vanity search queries that never convert, or build spam backlinks that risk Google penalties.",
    image: "/679b7310-0afd-42d1-953b-94209bbf2c6f.png",
    deliverables: [
      "Core Web Vitals & Technical Fixes",
      "High-Intent Commercial Keyword Plan",
      "Programmatic SEO & Content Silos",
      "High-Authority Backlink Acquisition",
      "AI Overview & Entity Search Visibility",
      "Competitor Gap & Rank Tracking",
    ],
    ctaLabel: "Claim SEO ranking audit",
    ctaHref: "/drift-audit",
    accentColor: "#7c3aed",
  },
  {
    id: "local-business-seo",
    number: "07",
    category: "seo",
    categoryKey: "seo",
    categoryLabel: "SEARCH ENGINE OPTIMIZATION",
    categorySubtitle: "Dominate Google Maps 3-Pack and capture high-intent localized searchers",
    title: "Local Search & Multi-Location SEO",
    subtitle: "Dominate Google Maps 3-Pack and capture high-intent localized searchers",
    desc: "For healthcare clinics, dental networks, retail chains, and regional brands, we optimize Google Business Profiles and local citation clusters to dominate local maps and nearby searches.",
    job: "Drive high-intent local phone calls, walk-ins, and consultation bookings within your immediate service radius.",
    judgedOn: "Google Map Pack Top-3 placement and qualified inbound local call volume",
    weWont: "Leave business citations unverified or ignore local review velocity signals.",
    image: "/case study (6).png",
    deliverables: [
      "Google Business Profile Optimization",
      "Local Map Pack Ranking Strategies",
      "Multi-Location Citation Sync",
      "Automated Review Generation Loops",
      "Geo-Targeted Local Landing Pages",
      "Call & Form Lead Attribution",
    ],
    ctaLabel: "Boost your local search rank",
    ctaHref: "/drift-audit",
    accentColor: "#8b5cf6",
  },

  // =========================================================================
  // CATEGORY 4: BRAND & CREATIVE CONTENT
  // =========================================================================
  {
    id: "brand-strategy",
    number: "08",
    category: "brand",
    categoryKey: "brand",
    categoryLabel: "BRANDING & CREATIVE ENGINE",
    categorySubtitle: "Give people an unmistakable reason to choose you over every alternative",
    title: "Brand Strategy & Visual Identity",
    subtitle: "Give people an unmistakable reason to choose you over every alternative",
    desc: "Positioning, messaging, naming, and visual identity designed to establish unmistakable market differentiation so every marketing rupee you spend starts with a massive trust advantage.",
    job: "Build category authority and brand trust that turns customer attention into sustained loyalty and pricing power.",
    judgedOn: "Brand recall, organic search lift, and conversion rate improvement across all channels",
    weWont: "Deliver a logo file in isolation without the core positioning narrative that gives it commercial meaning.",
    image: "/about-illustration.png",
    deliverables: [
      "Market & Competitor Positioning",
      "Core Messaging Framework & Tone of Voice",
      "Logo Design & Complete Visual Systems",
      "Brand Guidelines & Asset Library",
      "Packaging, Collateral & Deck Design",
      "Executive Narrative & Launch Kits",
    ],
    ctaLabel: "Build your brand identity",
    ctaHref: "/drift-audit",
    accentColor: "#059669",
  },
  {
    id: "creative-video-reels",
    number: "09",
    category: "brand",
    categoryKey: "brand",
    categoryLabel: "BRANDING & CREATIVE ENGINE",
    categorySubtitle: "High-velocity creative batches tested every single month to stop the scroll",
    title: "Creative Engine & Viral Video Reels",
    subtitle: "High-velocity creative batches tested every single month to stop the scroll",
    desc: "Positioning, messaging, and high-velocity creative batches tested every single month. We deploy viral short-form video reels, conversion copywriting, and static hooks designed to stop the scroll and build lasting brand authority.",
    job: "Produce high-performing creative assets that earn the stop, lower CPA, and feed winning ads to scaling channels.",
    judgedOn: "Hook rate, hold rate, and winning creatives produced per month",
    weWont: "Judge creative by subjective taste. Real performance numbers determine which winners scale.",
    image: "/158bb487-34c7-4e8d-a53f-b72845659451.webp",
    deliverables: [
      "Monthly Creative Batch Production",
      "Viral Short-Form Reels, Shorts & TikToks",
      "High-Converting Direct-Response Copy",
      "Hook, Headline & Thumbnail Testing",
      "Winner Scaling & Creative Refresh Cycles",
      "Motion Graphics & Dynamic Ads",
    ],
    ctaLabel: "Produce scaling creatives",
    ctaHref: "/drift-audit",
    accentColor: "#10b981",
  },
  {
    id: "social-influencer-scaling",
    number: "10",
    category: "brand",
    categoryKey: "brand",
    categoryLabel: "BRANDING & CREATIVE ENGINE",
    categorySubtitle: "Borrow trusted creator audiences and scale authentic community engagement",
    title: "Social Media & Influencer Marketing",
    subtitle: "Borrow trusted creator audiences and scale authentic community engagement",
    desc: "We manage organic social channels and orchestrate performance-backed creator partnerships. Every influencer campaign is tracked to sales, with top creator assets whitelisted directly into paid ads.",
    job: "Build organic brand momentum, answer buyer questions before they ask, and leverage trusted creators to drive sales.",
    judgedOn: "Sales per creator, trackable discount code redemptions, and audience engagement",
    weWont: "Pay for empty reach with creators who bought followers, or post generic social filler.",
    image: "/eeff8f20-2abc-44ff-a060-11707deac2ea.webp",
    deliverables: [
      "Content Calendar Aligned to Sales Stages",
      "Creator Discovery, Vetting & Outreach",
      "Trackable Affiliate Links & Discount Codes",
      "Influencer Whitelisting for Paid Ads",
      "Active DM Automation & Community Growth",
      "Multi-Platform Publishing (IG, LinkedIn, YT)",
    ],
    ctaLabel: "Launch creator campaigns",
    ctaHref: "/drift-audit",
    accentColor: "#14b8a6",
  },

  // =========================================================================
  // CATEGORY 5: AUTONOMOUS AI & REVENUE ANALYTICS
  // =========================================================================
  {
    id: "ai-lead-crm-automation",
    number: "11",
    category: "ai-analytics",
    categoryKey: "ai-analytics",
    categoryLabel: "AI AUTOMATION & ATTRIBUTION",
    categorySubtitle: "Eliminate manual lead follow-up and close deals faster with instant AI workflows",
    title: "Autonomous AI & CRM Tracking",
    subtitle: "Eliminate manual lead follow-up and close deals faster with instant AI workflows",
    desc: "Speed to lead is everything. We integrate autonomous AI lead-qualification bots, instant WhatsApp/SMS notification workflows, and unified attribution dashboards so your sales pipeline moves at lightning speed without human lag.",
    job: "Qualify inbound leads instantly 24/7, book meetings directly onto sales calendars, and sync data into your CRM.",
    judgedOn: "Speed-to-lead response time (<60s) and lead-to-opportunity qualification rate",
    weWont: "Let hot inbound leads sit unanswered overnight or deploy rigid, robotic conversation loops.",
    image: "/case study (8).png",
    deliverables: [
      "Autonomous AI Lead Qualification Bots",
      "Instant WhatsApp & SMS Notification Loops",
      "HubSpot, Salesforce & Zoho CRM Pipelines",
      "Automated Calendar Booking Workflows",
      "No-Show Reminder & Reactivation Sequences",
      "Multi-Touch Revenue Attribution Dashboards",
    ],
    ctaLabel: "Automate your sales pipeline",
    ctaHref: "/drift-audit",
    accentColor: "#d97706",
  },
  {
    id: "tracking-drift-audits",
    number: "12",
    category: "ai-analytics",
    categoryKey: "ai-analytics",
    categoryLabel: "AI AUTOMATION & ATTRIBUTION",
    categorySubtitle: "The bedrock of all growth: trace every rupee of revenue to its exact source",
    title: "Tracking, Attribution & Drift Audits",
    subtitle: "The bedrock of all growth: trace every rupee of revenue to its exact source",
    desc: "We diagnose where ad spend is leaking across your funnel. Every client starts with pristine server-side tracking (GA4, CAPI) so no growth decision is ever made on guesswork or broken data.",
    job: "Provide pristine, audit-proof measurement across all ad channels so every budget decision is backed by verified data.",
    judgedOn: "Every lead traced to its true source and wasted ad spend identified & eliminated",
    weWont: "Launch campaigns on broken pixels, or hand you an unreadable 60-page PDF report without an action plan.",
    image: "/2d9b0edc-3651-4bae-b2e7-1d024722e466.webp",
    deliverables: [
      "Server-Side Meta Conversions API (CAPI)",
      "Google Analytics 4 & Google Tag Manager",
      "Google Ads Enhanced Conversions",
      "Comprehensive Drift Revenue Audit",
      "One-Page Executive Monthly Dashboard",
      "Attribution Truth: Ad Spend vs Net Revenue",
    ],
    ctaLabel: "Book your free Drift Audit",
    ctaHref: "/drift-audit",
    accentColor: "#f59e0b",
  },
];
