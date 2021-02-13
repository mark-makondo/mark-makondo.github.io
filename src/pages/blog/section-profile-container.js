import React, { useState } from 'react';

//components ui
import ProfileUI from './section-profile.js';

const ProfileContainer = () => {
    const [isActive, setIsActive] = useState(false);

    const clickContactHandler = () => {
        setIsActive(true);
    }

    return(
       <ProfileUI
            clickContactHandler = {clickContactHandler}
            isActive = {isActive}
            setIsActive = {setIsActive}
       />
    )
}

export default ProfileContainer;