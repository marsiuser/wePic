import React, { Component }  from 'react';
import './WhoWeAre.scss'
import who from './img/who.png';
import whoMobile from './img/mobile.png';
export default class Reviews extends Component{
    render(){ 
        return(
          <div className="who">
              <div className="container">
                  <div className="who-wrap">
                      <div className="who-info">
                          <h2 className="caption">Who we are</h2>
                          <p className="who-info__more">Placeholder text about us. Why we intevnted this product. Who we are and what passion & mission do we have.</p>
                      </div>
                      <div className="who-image desktop-img">
                            <img src={who} alt="Who we are"/>
                      </div>
                      <div className="who-image mobile-img">
                            <img src={whoMobile} alt="Who we are"/>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}
