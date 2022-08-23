import React from 'react';
import './index.css';
import Props from './dottedSectionWrapper.type';
import Loader from '../loader/Loader';

const DottedSectionWrapper = React.forwardRef<HTMLDivElement, Props>(
    ({ children, total = 1, current = 1, className, id, background = '', isLoading = false, style }, ref) => {
        const createDots = () => {
            const dotsCreated = [];

            for (let index = 1; index <= total; index++) {
                const isDotActive = index == current ? 'r-dot-active' : '';
                dotsCreated.push(<div key={index} className={`r-dot ${isDotActive}`}></div>);
            }
            return dotsCreated;
        };

        const cstyle = {
            backgroundImage: 'url(' + background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            ...style,
        };

        return (
            <div ref={ref} id={id} style={cstyle} className={`r-dotted-section-wrapper ${className ? className : ''}`}>
                {isLoading ? <Loader /> : children}
                <div className="r-dotted-section-wrapper__dots">{createDots().map((dot) => dot)}</div>
            </div>
        );
    },
);

DottedSectionWrapper.displayName = 'DottedSectionWrapper';
export default DottedSectionWrapper;
