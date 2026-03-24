export type WorkItem = {
  title: string;
  logo: string;
  subtitle: string;
  role: string;
  teaser: string;
  href: string;
  date: string;
};

export type RecentProject = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

export const productionWorkItems: WorkItem[] = [
  {
    title: "Raindrop",
    logo: "/logos/raindrop.svg",
    subtitle: "Marketing Agency",
    role: "Production Assistant",
    teaser:
      "Supported commercial shoots by coordinating on-set logistics, equipment, and talent, helping productions run smoothly from setup through wrap.",
    href: "/work/raindrop",
    date: "2023 - 2025",
  },
  {
    title: "OBG",
    logo: "/logos/obg.svg",
    subtitle: "SD Hip Hop Dance Team",
    role: "Production & Event Coordinator",
    teaser:
      "Performed and contributed to choreography, event production, music videos, and community classes as part of a hip hop dance team.",
    href: "/work/obg",
    date: "2024 - 2025",
  },
  {
    title: "Ledger Investing",
    logo: "/logos/ledger.svg",
    subtitle: "Fintech Marketplace",
    role: "Software Engineer",
    teaser:
      "Led development of an investor platform, improving workflows, engagement, and conversion through product and analytics.",
    href: "/work/ledger-investing",
    date: "2022 - 2024",
  },
  {
    title: "Accenture",
    logo: "/logos/accenture.svg",
    subtitle: "Strategy, Consulting, & Technology Firm",
    role: "Data Analyst",
    teaser:
      "Built dashboards and predictive models to improve hiring efficiency and operational decision-making for major federal clients.",
    href: "/work/accenture",
    date: "2017 - 2022",
  },
];

export const analyticsWorkItems: WorkItem[] = [
  {
    title: "Ledger Investing",
    logo: "/logos/ledger.svg",
    subtitle: "Fintech Marketplace",
    role: "Software Engineer",
    teaser:
      "Led development of an investor platform, improving workflows, engagement, and conversion through product and analytics.",
    href: "/analytics/work/ledger-investing",
    date: "2022 - 2024",
  },
  {
    title: "Accenture",
    logo: "/logos/accenture.svg",
    subtitle: "Strategy, Consulting, & Technology Firm",
    role: "Data Analyst",
    teaser:
      "Built dashboards and predictive models to improve hiring efficiency and operational decision-making for major federal clients.",
    href: "/analytics/work/accenture",
    date: "2017 - 2022",
  },
];

export const additionalExperienceItems: WorkItem[] = [
  {
    title: "Raindrop",
    logo: "/logos/raindrop.svg",
    subtitle: "Marketing Agency",
    role: "Production Assistant",
    teaser:
      "Supported commercial shoots by coordinating on-set logistics, equipment, and talent, helping productions run smoothly from setup through wrap.",
    href: "/analytics/work/raindrop",
    date: "2023 - 2025",
  },
  {
    title: "OBG",
    logo: "/logos/obg.svg",
    subtitle: "SD Hip Hop Dance Team",
    role: "Production & Event Coordinator",
    teaser:
      "Performed and contributed to choreography, event production, music videos, and community classes as part of a hip hop dance team.",
    href: "/analytics/work/obg",
    date: "2024 - 2025",
  },
];

export const recentProjects: RecentProject[] = [
  {
    title: "Basketball Performance Analytics",
    description:
      "Built a basketball analytics tool to improve stat tracking and performance insights, helping the team win the CIF Championship in San Diego for their division.",
    href: "/work/recent-projects/project-one.pdf",
    external: true,
  },
  {
    title: "Retail Analytics Case Study",
    description:
      "A data analytics case study presentation demonstrating my approach to data exploration, segmentation, and forecasting concepts.",
    href: "/work/recent-projects/project-two.pdf",
    external: true,
  },
];