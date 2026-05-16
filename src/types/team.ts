export interface TeamSocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  socials: TeamSocialLinks;
}
