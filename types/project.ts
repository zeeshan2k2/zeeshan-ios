export type ProjectStatus = "Active" | "Private Product" | "Experimental" | "Upcoming";

export type ProjectLink = {
  label: string;
  href: string;
  type: "details" | "github" | "devlog" | "external";
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  category: string;
  status: ProjectStatus;
  techStack: string[];
  overview: string;
  purpose: string;
  currentStatus: string;
  links: ProjectLink[];
  isSourcePrivate?: boolean;
};
