import React from 'react';

const contentPage__navbar = () => {
    return(
        <div className="contentPage__nav">
            <div className="contentPage__nav__children">
                <div className="contentPage__nav__icon">
                    <div className="lines">
                        <svg className="linesSvg" viewBox="0 0 129 66">
                            <g id="lines__children">
                                <line id="line__three" class="cls-1" x1="129" y1="6" y2="6"/>
                                <line id="line__two" class="cls-1" y1="34" x2="129" y2="34"/>
                                <line id="line__one" class="cls-1" y1="60" x2="129" y2="60"/>
                            </g>
                        </svg>
                    </div>
                </div>
                
                <div className="contentPage__nav__body">
                    <ul>
                        <li><h1>link 1</h1></li>
                        <li><h1>link 2</h1></li>
                        <li><h1>link 3</h1></li>
                        <li><h1>link 4</h1></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default contentPage__navbar;
