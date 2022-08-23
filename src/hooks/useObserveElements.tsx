import { useEffect, useState } from 'react';

type optionType = {
    root: HTMLDivElement | null;
    rootMargin: string;
    threshold: number;
};

const useObserveElements = (elements: HTMLDivElement[]) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [options, setOptions] = useState<optionType>({ root: null, rootMargin: '0px', threshold: 0.7 });
    const [currentScrollTarget, setCurrentScrollTarget] = useState<HTMLDivElement>({} as HTMLDivElement);

    useEffect(() => {
        // we have to determine if the elements are already available on mount so that
        // elements can be observed.
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const callback = (entries: any) => setCurrentScrollTarget(entries[0].target);
        const observer = new IntersectionObserver(callback, options);

        elements.forEach((el) => el?.id && observer.observe(el));

        return () => observer.disconnect();
    }, [isMounted]);

    return [currentScrollTarget, options, setOptions] as const;
};

export default useObserveElements;
