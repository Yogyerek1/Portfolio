export type SkillType = {
  title: string;
  items: string[];
};

export type ProjectType = {
    title: string;
    description: string;
    siteUrl?: string;
    githubUrl?: string;
    technologies: string[];
};

export type NavItem = {
    label: string;
    href?: string;
    enable?: boolean;
};

export type NavBarProps = {
    items: NavItem[];
    profileImg?: string;
    className?: string;
    backgroundColor?: string;
};