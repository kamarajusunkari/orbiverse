export interface ServiceItem {
  id: string;
  number: string;
  category: "brand" | "demand" | "measure";
  categoryLabel: string;
  categorySubtitle: string;
  title: string;
  job: string;
  judgedOn: string;
  weWont: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  // Build the brand
  {
    id: "brand-strategy",
    number: "01",
    category: "brand",
    categoryLabel: "BUILD THE BRAND",
    categorySubtitle: "Why people choose you",
    title: "Brand Strategy & Identity",
    job: "give people a reason to choose you. Positioning, messaging and identity, end to end, so every ad starts with an advantage.",
    judgedOn: "Recall, preference and conversion lift",
    weWont: "hand over a logo without the positioning and messaging that make it mean something.",
    deliverables: [
      "Market and competitor research",
      "Positioning and messaging",
      "Naming and tagline",
      "Logo and visual identity",
      "Brand guidelines",
      "Packaging and launch assets",
    ],
  },
  {
    id: "websites-landing-pages",
    number: "02",
    category: "brand",
    categoryLabel: "BUILD THE BRAND",
    categorySubtitle: "Why people choose you",
    title: "Websites & Landing Pages",
    job: "convert. A faster page with a clearer offer improves every channel at once.",
    judgedOn: "Conversion rate",
    weWont: "ship a slow, pretty site that nobody can buy from on a phone.",
    deliverables: [
      "Page plan built around your offer",
      "WordPress or Shopify build",
      "Campaign landing pages",
      "Speed, SEO and tracking built in",
    ],
  },
  {
    id: "creative-content",
    number: "03",
    category: "brand",
    categoryLabel: "BUILD THE BRAND",
    categorySubtitle: "Why people choose you",
    title: "Creative & Content",
    job: "earn the stop. Ads, video and copy tested every month. Losers retired, winners scaled.",
    judgedOn: "Winning ads found each month",
    weWont: "judge creative by taste. The numbers decide.",
    deliverables: [
      "Monthly creative batches",
      "Static ads and video scripts",
      "Hook and headline testing",
      "Winners scaled, losers retired",
    ],
  },

  // Drive demand
  {
    id: "performance-marketing",
    number: "04",
    category: "demand",
    categoryLabel: "DRIVE DEMAND",
    categorySubtitle: "How they find you",
    title: "Performance Marketing",
    job: "capture demand. Meta and Google Ads (Search, Performance Max, YouTube), built to turn people who are ready into leads and sales.",
    judgedOn: "Cost per qualified lead or ROAS",
    weWont: "report clicks or reach as wins, or keep a campaign alive because it 'might pick up'.",
    deliverables: [
      "Account audit and rebuild",
      "Audience and offer testing",
      "Retargeting and lookalikes",
      "Lead quality tracking",
      "Monthly cut / keep / double review",
    ],
  },
  {
    id: "seo",
    number: "05",
    category: "demand",
    categoryLabel: "DRIVE DEMAND",
    categorySubtitle: "How they find you",
    title: "SEO",
    job: "lower your cost of growth. Every customer who finds you on Google is one you didn't pay a click for.",
    judgedOn: "Organic leads and sales",
    weWont: "chase rankings for keywords nobody buys from, or build spammy links.",
    deliverables: [
      "Technical audit and fixes",
      "Buyer-intent keyword plan",
      "On-page and local SEO",
      "Content for buying questions",
      "AI search visibility",
    ],
  },
  {
    id: "social-media",
    number: "06",
    category: "demand",
    categoryLabel: "DRIVE DEMAND",
    categorySubtitle: "How they find you",
    title: "Social Media",
    job: "build familiarity. Content that answers the questions people have before they buy, so your ads land on warmer audiences.",
    judgedOn: "Enquiries and profile visits from content",
    weWont: "post just to fill a calendar, or sell you followers as a goal.",
    deliverables: [
      "Content plan tied to sales questions",
      "Posts, reels and carousels",
      "Publishing and replies",
      "Best posts reused as ads",
    ],
  },
  {
    id: "influencer-marketing",
    number: "07",
    category: "demand",
    categoryLabel: "DRIVE DEMAND",
    categorySubtitle: "How they find you",
    title: "Influencer Marketing",
    job: "borrow trust. Creators chosen for audience fit, with every campaign tracked to sales.",
    judgedOn: "Sales and leads per creator",
    weWont: "pay for reach we can't track, or book creators with bought followers.",
    deliverables: [
      "Creator search and vetting",
      "Briefs, contracts and approvals",
      "Tracked links and codes",
      "Creator content run as ads",
    ],
  },

  // Measure & improve
  {
    id: "tracking-analytics",
    number: "08",
    category: "measure",
    categoryLabel: "MEASURE & IMPROVE",
    categorySubtitle: "How we prove it worked",
    title: "Tracking & Analytics",
    job: "tell the truth. The foundation for everything above. Every client starts here, because nothing else can be judged without it.",
    judgedOn: "Every lead traced to its source",
    weWont: "launch campaigns on broken or double-counted tracking.",
    deliverables: [
      "GA4 and Tag Manager",
      "Meta Pixel and Conversions API",
      "Google Ads conversions",
      "One-page monthly report",
    ],
  },
  {
    id: "growth-audits",
    number: "09",
    category: "measure",
    categoryLabel: "MEASURE & IMPROVE",
    categorySubtitle: "How we prove it worked",
    title: "Growth Audits",
    job: "find the leak. A one-off deep audit for teams that run marketing in-house or with another agency and want an expert second opinion.",
    judgedOn: "Wasted spend found and fixed",
    weWont: "hand you a 60-page report nobody reads. You get a ranked fix list.",
    deliverables: [
      "Ad account audit (Meta and Google)",
      "Tracking and attribution check",
      "Website conversion review",
      "Fix plan ranked by impact",
    ],
  },
];

