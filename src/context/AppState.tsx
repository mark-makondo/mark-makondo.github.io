import React, { useState, useRef } from 'react';
import Context from './Context';
import { CommonReusableProps } from '../types/common.type';

// custom hooks
import useObserveElements from '../hooks/useObserveElements';

const AppState: React.FC<CommonReusableProps> = ({ children }) => {
    const [setCurrentScrollTarget] = useState<HTMLDivElement>({} as HTMLDivElement);

    const MAIN_ELEMENT = useRef<HTMLDivElement>({} as HTMLDivElement);
    const HERO_ELEMENT = useRef<HTMLDivElement>({} as HTMLDivElement);
    const ABOUT_ELEMENT = useRef<HTMLDivElement>({} as HTMLDivElement);
    const PROJECTS_ELEMENT = useRef<HTMLDivElement>({} as HTMLDivElement);

    const ELEMENTS = [HERO_ELEMENT.current, ABOUT_ELEMENT.current, PROJECTS_ELEMENT.current];

    const [currentScrollTarget] = useObserveElements(ELEMENTS);

    const stateValues = {
        currentScrollTarget,
        setCurrentScrollTarget,
        MAIN_ELEMENT,
        HERO_ELEMENT,
        ABOUT_ELEMENT,
        PROJECTS_ELEMENT,
    };

    return <Context.Provider value={stateValues}>{children}</Context.Provider>;
};

export default AppState;
