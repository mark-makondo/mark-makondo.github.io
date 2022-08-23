export interface projectDataType {
    id: string | number;
    title: string;
    description: string;
    SourceImage: string;
    link: string;
}

export interface projectType {
    title: string;
    description: string;
    data: projectDataType[];
}
