export default interface ContextProps {
    currentScrollTarget: HTMLDivElement;
    MAIN_ELEMENT: React.MutableRefObject<HTMLDivElement>;
    HERO_ELEMENT: React.MutableRefObject<HTMLDivElement>;
    ABOUT_ELEMENT: React.MutableRefObject<HTMLDivElement>;
    PROJECTS_ELEMENT: React.MutableRefObject<HTMLDivElement>;
    isContactOpen: boolean;
    setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
