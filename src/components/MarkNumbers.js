import React from 'react';
import {useContext} from 'react';
import MarkNumberContext from "../context/MarkNumberContext";
import MarkButtons from "../components/MarkButtons";

const MarkNumbers = () => {

    const {markNumbers} = useContext(MarkNumberContext)

    return (
        
        <div id="number-buttons">
           
            {markNumbers.map((markNumber)=>(<MarkButtons id={markNumber} key={markNumber}/>))}
     
        </div>
    
    )
    
}

export default MarkNumbers
