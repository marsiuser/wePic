import React, { Component }  from 'react';
import './Header.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import instagram from './img/instagram.svg';
import facebook from './img/Facebook.svg';
import email from './img/email.svg';
import closePopup from './img/close.svg';

export default class Header extends Component{
    render(){ 
        return(
            <header className="header">
              <div className="container">
                <div className="header-wrap">
                    <div className="header-logo">
                            <a className="header-logo__text" href="#">WePic.</a>
                        </div>
                        <div className="header-exit">
                        <Popup trigger={<a className="header-exit__login" href="#">Log In</a>} position="center">
                            {close => (
                                 <div className="popup-new" id="popup-login">
                                     <h4>Log In to <span>WePic</span></h4>
                                     <div className="popup-new__follow">
                                         <a className="popup-new__insta" href="#">
                                             <img src={instagram} alt="Instagram"/>
                                             <span>Log in with Instagram</span>
                                         </a>
                                         <a className="popup-new__facebook" href="#">
                                             <img src={facebook} alt="facebook"/>
                                             <span>Log in with Facebook</span>
                                         </a>
                                         <a className="popup-new__mail" href="#">
                                             <img src={email} alt="Email"/>
                                             <span>Log in with Email</span>
                                         </a>
                                     </div>
                                     <button className="popup-close"  onClick={() => {close();}}>
                                        <img src={closePopup} alt="close"/>
                                     </button>
                                 </div>
                                )}
                            </Popup>
                            <Popup trigger={<a className="header-exit__signup" href="#">Sign Up</a>} position="center">
                            {close => (
                                 <div className="popup-new" id="popup-signup">
                                     <h4>Join the <span>WePic</span> Community</h4>
                                     <div className="popup-new__follow">
                                         <a className="popup-new__insta" href="#">
                                             <img src={instagram} alt="Instagram"/>
                                             <span>Sign up with Instagram</span>
                                         </a>
                                         <a className="popup-new__facebook" href="#">
                                             <img src={facebook} alt="facebook"/>
                                             <span>Sign up with Facebook</span>
                                         </a>
                                         <a className="popup-new__mail" href="#">
                                             <img src={email} alt="Email"/>
                                             <span>Sign up with Email</span>
                                         </a>
                                     </div>
                                     <button className="popup-close"  onClick={() => {close();}}>
                                        <img src={closePopup} alt="close"/>
                                     </button>
                                 </div>
                                )}
                            </Popup>
                        </div>
                </div>
              </div>
            </header>
        )
    }
}
