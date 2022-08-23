type itemTypes = {
    id: string | number;
    title?: string;
    description?: string;
    link?: string;
};

export default interface Props {
    items: itemTypes[];
    renderItem?: (item: itemTypes) => React.ReactElement;
    onHover?: (e: EventTarget, dir: 1 | 0) => void;
    onClick?: (e: EventTarget) => void;
}
