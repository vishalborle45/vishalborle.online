export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "DevOps"
    | "Languages"
    | "Tools"
    | "Computer Science"
    | "Databases";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  status: "Live" | "Archived";
  sourceHref?: string;
  liveHref?: string;
  architectureHref?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Hobby {
  label: string;
  emoji: string;
}

export interface SpotifyTrack {
  song: string;
  artist: string;
  album: string;
  cover: string | null;
  url: string | null;
  nowPlaying: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterCol {
  heading: string;
  links: FooterLink[];
}
