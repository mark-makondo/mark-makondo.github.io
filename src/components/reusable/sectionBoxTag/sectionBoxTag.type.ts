export default interface Props {
    title?: string;
    description?: string;
    SVG?: React.FC<React.SVGProps<SVGSVGElement>>;
    tags?: string[];
    color?: string;
    className?: string;
}
