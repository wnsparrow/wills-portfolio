export type WorkItem = {
  title: string;
  logo: string;
  subtitle: string;
  teaser: string;
  href: string;
  date: string;
};
  
export const workItems = [
  {
    title: "Raindrop",
    logo: "/logos/raindrop.svg",
    subtitle: "Marketing Agency",
    teaser:
      "Production Assistant across commercial shoots, handling on-set logistics, equipment, and participant coordination to keep productions running smoothly.",
    href: "/work/raindrop",
    date: "2023 - 2025",
  },
  {
    title: "OBG",
    logo: "/logos/obg.svg",
    subtitle: "SD Hip Hop Dance Team",
    teaser:
      "Hip hop dance team member contributing choreography, event organization, music videos, and community classes.",
    href: "/work/obg",
    date: "2024 - 2025",
  },
  {
    title: "Ledger Investing",
    logo: "/logos/ledger.svg",
    subtitle: "Fintech Marketplace",
    teaser:
      "Software Engineer & Product Manager building an investor platform, shipping features, analytics tools, and workflow improvements.",
    href: "/work/ledger-investing",
    date: "2022 - 2024",
  },
  {
    title: "Accenture",
    logo: "/logos/accenture.svg",
    subtitle: "Strategy, Consulting, and Technology Firm",
    teaser:
      "Data analytics consultant creating dashboards, models, and insights to support large enterprise and federal clients.",
    href: "/work/accenture",
    date: "2017 - 2022",
  },
];

// src/data/recentProjects.ts
export type RecentProject = {
  title: string;
  description: string;
  href: string;      // pdf/doc/ppt link
  external?: boolean; // open in new tab
};

export const recentProjects: RecentProject[] = [
  {
    title: "Basketball Data Spreadsheet",
    description:
      "I helped a friend who coaches basketball in San Diego improve his team’s stat tracking. They finished with only two losses and reached the state semifinals.",
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
