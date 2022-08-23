export interface skillData {
    label: string;
    description?: string;
    data?: string[];
    SVG?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface skillsType {
    frontEnd: skillData;
    backEnd: skillData;
    frameWorks: skillData;
    versionControl: skillData;
}

export interface dataType {
    title: string;
    description: string[];
    skills: skillsType;
}
