import React from 'react';
import DollarButtons from "../components/DollarButtons"
import {useState, useEffect} from 'react';

const DollarValueList = () => {

    const [dollarValues, setDollarValues] = useState([]);

    useEffect(()=>{
        
        const dollarValueItems = [
            {
                id: 1,
                valueAmount:'$1'
            },
            {
                id: 2,
                valueAmount:'$5'
            },
            {
                id: 3,
                valueAmount:'$10'
            },
            {
                id: 4,
                valueAmount:'$20'
            },
    
        ]   

        setDollarValues(dollarValueItems)

    },[])

    return (

        <div >
           
            {dollarValues.map((value)=>(<DollarButtons key={value.id} valueAmount={value.valueAmount}/> ))}
        
        </div>

    )
    
 }

export default DollarValueList

