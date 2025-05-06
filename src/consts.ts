import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Cbass92's Blog",
  EMAIL: "contact@cbass92.org",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "homepage thingy",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Occasional yap sesh",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Project showcase",
};

export const SOCIALS: Socials = [

  { 
    NAME: "github",
    HREF: "https://github.com/sebastian-92"
  },
  { 
    NAME: "bluesky",
    HREF: "https://bsky.app/profile/cbass92.org",
  }
];
