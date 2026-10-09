export type Lang = 'en' | 'uk';

export type ProjectId = 'wordloop' | 'eventpass' | 'aiPlatform' | 'smartSender';

export interface Project {
  id: ProjectId;
  name: string;
  /** Short stack label for the project index in the hero. */
  tag: string;
  /** One line: what the product does, for a person who has never seen it. */
  summary: string;
  /** What a reviewer should look at in the code. */
  highlights: string[];
  stack: string;
  /** How to get in: demo login, guest mode, etc. */
  access: string;
  /** Extra hint, e.g. that a free server wakes up slowly. */
  note?: string;
  image: string;
  imageAlt: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Job {
  period: string;
  role: string;
  company: string;
  place: string;
  points: string[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: { projects: string; skills: string; experience: string; contact: string };
  langSwitch: { label: string; en: string; uk: string };
  hero: {
    name: string;
    role: string;
    intro: string;
    location: string;
    emailCta: string;
    githubCta: string;
    linkedinCta: string;
  };
  projects: {
    title: string;
    lead: string;
    live: string;
    code: string;
    highlightsLabel: string;
    stackLabel: string;
    items: Project[];
  };
  skills: { title: string; groups: SkillGroup[] };
  experience: {
    title: string;
    jobs: Job[];
    educationTitle: string;
    education: string;
    thesis: string;
    thesisLink: string;
  };
  contact: { title: string; text: string; github: string; linkedin: string; telegram: string };
  footer: string;
}
