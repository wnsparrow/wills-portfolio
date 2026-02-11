export type WorkItem = {
  title: string;
  logo: string;
  subtitle: string;
  teaser: string;
  href: string;
  date: string;
};
  
export const workItems: WorkItem[] = [
  {
    title: "Accenture",
    logo: "/logos/accenture.svg",
    subtitle: "Strategy, Consulting, and Technology Firm",
    teaser: "Worked in data analytics to build dashboards, develop models, and answer business questions",
    href: "/work/accenture",
    date: "2017 - 2022",
  },
  {
    title: "Ledger Investing",
    logo: "/logos/ledger.svg",
    subtitle: "Fintech Marketplace",
    teaser: "Worked as software engineer and a PM to build platform connecting MGAs with traditional investors",
    href: "/work/ledger-investing",
    date: "2022 - 2024",
  },
  {
    title: "Raindrop",
    logo: "/logos/raindrop.svg",
    subtitle: "Marketing Agency",
    teaser: "Served as a Production Assistant across multiple commercial productions.",
    href: "/work/raindrop",
    date: "2023 - 2025",
  },
  {
    title: "OBG",
    logo: "/logos/obg.svg",
    subtitle: "SD Hip Hop Dance Team",
    teaser: "Member of local hip hop dance team. Organized events, shot music videos, and participated in community workshops.",
    href: "/work/obg",
    date: "2024 - 2025",
  },
];
