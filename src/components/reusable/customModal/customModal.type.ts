export default interface Props {
    className?: string;
    renderBody?: () => React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
