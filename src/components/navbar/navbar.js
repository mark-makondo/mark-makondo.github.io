import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    let logo = props.logo;
    let list = props.list;
    
    return(

        <div className="navbar">
            <div className="navbar__cont">
                <div className="navbar__cont__logo">{logo}</div>
                <ul className="navbar__cont__list normal-1">
                    {list.map((item, i) => 
                        <li key={i}>
                            <Link to={item === 'home' ? '' : `${item}`}> 
                                {item} 
                            </Link>
                        </li>
                    )}
                    <li> <a href="#contact">contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;