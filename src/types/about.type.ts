export interface SkillData {
    label: string;
    description?: string;
    data?: string[];
    SVG?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SkillsType {
    frontEnd: SkillData;
    backEnd: SkillData;
    frameWorks: SkillData;
    versionControl: SkillData;
}

export interface AboutDataType {
    title: string;
    description: string[];
    skills: SkillsType;
}
