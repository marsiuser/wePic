import React, { Component }  from 'react';
import './Welcome.scss'
import phone from './img/phone-pic.png'
export default class Welcome extends Component{
    render(){ 
        return(
            <div className="welcome">
                <div className="container">
                    <div className="welcome-wrap">
                        <div className="welcome-info">
                            <h1 className="welcome-info__caption">Welcome to <p>WePic.</p></h1>
                            <p className="welcome-info__sub">Wondering which of your pictures will get the most Instagram likes? Need help picking your perfect Tinder picture? <b>We’ll help you. For free.</b> </p>
                            <a className="welcome-info__try" href="#">Try Now</a>
                        </div>
                        <div className="welcome-photo">
                            <img src={phone} alt="Welcome to WePic."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
