import React from 'react';
import {Link} from "react-router-dom";

const ActionButtons = () => {
    
    return (
        <div>

            <button className="btn" type="button" id="clearButton">CLEAR</button>
           
            <Link to="/cashier">
               
                <button className="btn" type="button" id="cashButton">CASH</button>
           
             </Link> 
             
        </div>
    )
}

export default ActionButtons
