/**
 * @author Mark Makondo
 * @description smooth scroll via target and data-key.
 * @param target
 */
export const gotoSmoothScroll = (target: EventTarget, gotoElements: HTMLElement[]) => {
    const tempKey = target as HTMLInputElement;
    const currentKey = tempKey.getAttribute('data-key');

    gotoElements.forEach((element) => {
        if (element.id == currentKey && 'scrollIntoView' in element)
            element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    });
};

export default {
    gotoSmoothScroll,
};
