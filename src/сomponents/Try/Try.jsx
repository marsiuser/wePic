import React, { Component }  from 'react';
import './Try.scss'
export default class Try extends Component{
    render(){ 
        return(
            <div className="try">
                <div className="container">
                    <div className="try-wrap">
                        <h2>Try <span>WePic</span> Now</h2>
                        <p className="try-info">Need help picking your perfect Tinder picture? We’ll help you. For free. </p>
                        <a className="try-now" href="#">Try Now</a>
                    </div>
                    <span className="copywrite">©2020 WePic</span>
                </div>
            </div>
        )
    }
}
