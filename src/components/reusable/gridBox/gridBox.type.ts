export interface ItemTypes {
    id: string | number;
    title?: string;
    description?: string;
    link?: string | URL;
    SourceImage?: string;
}

export default interface Props {
    items: ItemTypes[];
    renderItem?: (item: ItemTypes) => React.ReactElement;
    onHover?: (e: EventTarget, dir: 1 | 0) => void;
    onClick?: (e: EventTarget) => void;
}
