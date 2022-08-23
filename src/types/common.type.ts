export interface SectionProps {
    id?: string;
    ref?: HTMLDivElement;
}

export interface CommonReusableProps {
    children: React.ReactNode;
}

export interface KeyValueType {
    value: string;
    key: string;
}
