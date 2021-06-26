import React from 'react'
import Header from "../components/Header";
import BidContainer from "../components/BidContainer";
import SelectContainer from "../components/SelectContainer";
import SelectedContainer from "../components/SelectedContainer";
import Footer from "../components/Footer";

const HomePage = () => {
   
    return (
    
  
        <div className="container"> 
            
            <Header />

            <main>
             
                    <BidContainer />

                    <SelectContainer />

                    <SelectedContainer />

            </main>

            <Footer />
            
        </div> 
  
    );
    
}

export default HomePage

