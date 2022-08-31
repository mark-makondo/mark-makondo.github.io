export interface ProjectDataType {
    id: string | number;
    title: string;
    description: string;
    SourceImage?: string;
    link: string;
}

export interface ProjectType {
    title: string;
    description: string;
    data: ProjectDataType[];
}
