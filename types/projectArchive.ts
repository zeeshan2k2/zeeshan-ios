export type ProfessionalApp = {
  name: string;
  label: string;
  icon?: string;
  iconFallback?: string;
  iconSymbol?: "lock";
  gradient?: string;
  href?: string;
};

export type ScreenshotFrame = "phone" | "wide" | "square" | "vision";

export type ShowcaseScreenshot = {
  src: string;
  frame?: ScreenshotFrame;
};

export type ShowcaseProject = {
  slug: string;
  name: string;
  status: string;
  description: string;
  category: string;
  icon?: string;
  iconFallback?: string;
  href: string;
  githubUrl?: string;
  techStack: string[];
  preferredFrame?: ScreenshotFrame;
  screenshots: ShowcaseScreenshot[];
};

export type LearningProject = {
  name: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  notionUrl?: string;
  status: string;
};
