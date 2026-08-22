// Shared TypeScript definitions for all YAML-driven content.
// Keep these in sync with the structure of the files in /content.

export interface SiteContent {
  name: string;
  fullName: string;
  acronymExpansion: string;
  motto: string;
  university: string;
  location: string;
  locationShort: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavigationContent {
  brand: string;
  links: NavLink[];
  menuOpenLabel: string;
  menuCloseLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  headingLines: string[];
  subheading: string;
  tags: string[];
  scrollLabel: string;
  scrollText: string;
  mediaAlt: string;
}

export interface Goal {
  number: string;
  title: string;
  description: string;
}

export interface AboutContent {
  sectionLabel: string;
  heading: string;
  mission: string;
  goals: Goal[];
}

export interface Domain {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface Trait {
  id: string;
  title: string;
  description: string;
  relatedDomains: string[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface WhatWeDoContent {
  sectionLabel: string;
  heading: string;
  domains: Domain[];
  joinSectionLabel: string;
  joinHeading: string;
  joinIntro: string;
  traits: Trait[];
  joinCta: CtaLink;
}

export interface EngineeringProject {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  mediaLabel: string;
}

export interface EngineeringContent {
  sectionLabel: string;
  heading: string;
  roboCupLabel: string;
  roboCupIntro: string;
  roboCupDetail: string;
  pipeline: string[];
  projects: EngineeringProject[];
}

export interface SubTeam {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface TeamsContent {
  sectionLabel: string;
  heading: string;
  intro: string;
  subteams: SubTeam[];
  centerLabel: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
}

export interface ContactContent {
  sectionLabel: string;
  heading: string;
  intro: string;
  channels: ContactChannel[];
  affiliation: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterContent {
  brand: string;
  acronymExpansion: string;
  university: string;
  location: string;
  socialLinks: SocialLink[];
  motto: string;
  copyrightHolder: string;
  startYear: number;
}
