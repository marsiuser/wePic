import React, { Component }  from 'react';
import Header from "../сomponents/Header/Header";
import Welcome from "../сomponents/Welcome/Welcome";
import HowWorks from "../сomponents/HowWorks/HowWorks";
import Reviews from "../сomponents/Reviews/Reviews";
import WhoWeAre from "../сomponents/WhoWeAre/WhoWeAre";
import Try from "../сomponents//Try/Try";

export default class Landing extends Component{
    render(){ 
        return(
         <div className="landing">
             <Header />
            <Welcome />
            <HowWorks />
            <Reviews />
            <WhoWeAre />
            <Try />
         </div>
        )
    }
}
