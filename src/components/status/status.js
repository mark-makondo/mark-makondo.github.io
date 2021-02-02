import React from 'react';

// assets
import {ReactComponent as Circle} from '../../assets/svg/circle.svg';

const Status = (props) => {
    let statusColor = props.statusColor;
    let statusText = props.statusText;

    return(
        <div className="status normal-2">
            <Circle fill={statusColor}/>
            <span>{statusText}</span>
        </div>
    )
}

export default Status;