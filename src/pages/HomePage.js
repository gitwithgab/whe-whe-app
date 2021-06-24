import React from 'react'
import Header from "../components/Header"
import BidContainer from "../components/BidContainer"
import SelectContainer from "../components/SelectContainer"
import SelectedContainer from '../components/SelectedContainer'
import Footer from "../components/Footer"

const HomePage = () => {
    return (
    <>
  
    <div className="container bgimg"> 
        <div>
           <Header />
           </div>
                <BidContainer />
                <SelectContainer />
                <SelectedContainer />
           <div>
           <Footer />
        </div>
    </div> 
  
  </>
    );
}

export default HomePage

