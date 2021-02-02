import React from 'react';
import HomeUI from './home.js';

//#region defining status
    let status = 0;

    const statusSelector = (selected) =>{
        
        // status custom array
        let statusList = [
            {id: 0, color: "#37EB91", text: "open for work"},
            {id: 1, color: "red", text: "working"}
        ];

        return statusList[selected];
    }
//#endregion

const HomeContainer = () => {   
    return(
        <HomeUI 
            color = {statusSelector(status).color}
            text = {statusSelector(status).text}    
        />
    )
}

export default HomeContainer;