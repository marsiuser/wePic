import React, { Component }  from 'react';
import './Header.scss'
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
                            <a className="header-exit__login" href="#">Log In</a>
                            <a className="header-exit__signup" href="#">Sign Up</a>
                        </div>
                </div>
              </div>
            </header>
        )
    }
}
