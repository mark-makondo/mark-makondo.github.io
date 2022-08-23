import React, { forwardRef } from 'react';
import Props from './gridBox.type';
import './index.css';

const GridBox = forwardRef<HTMLDivElement, Props>(({ items, renderItem, onClick, onHover }, ref) => {
    const handleMouseClick = (target: EventTarget) => typeof onClick == 'function' && onClick(target);
    const handleHover = (target: EventTarget, dir: 1 | 0) => typeof onHover == 'function' && onHover(target, dir);

    return (
        <div className="r-gridbox" ref={ref}>
            <div className="r-gridbox-container">
                {items.map((item) => {
                    let defaultRender = <div className="r-gridbox-box__default">{item.id}</div>;

                    if (renderItem) defaultRender = renderItem(item);

                    return (
                        <div
                            key={item.id}
                            className="r-gridbox-box"
                            onMouseEnter={(e) => handleHover(e.target, 1)}
                            onMouseLeave={(e) => handleHover(e.target, 0)}
                            onClick={(e) => handleMouseClick(e.target)}
                        >
                            {defaultRender}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

GridBox.displayName = 'GridBox';
export default GridBox;
