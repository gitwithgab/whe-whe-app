import React from 'react'
import Header from "../components/Header";
import DollarContainer from "../components/DollarContainer";
import MarkNumberContainer from "../components/MarkNumberContainer";
import SelectedContainer from "../components/SelectedContainer";
import Footer from "../components/Footer";

const HomePage = () => {
   
    return (
  
        <div className="container"> 
            
            <Header />

            <main>
             
                    <DollarContainer />

                    <MarkNumberContainer />

                    <SelectedContainer />

            </main>

            <Footer />
            
        </div> 
  
    );
    
}

export default HomePage

