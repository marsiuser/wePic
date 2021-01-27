import React, { Component }  from 'react';
import './HowWorks.scss'
import block1 from './img/how1.png';
import block2 from './img/how2.png';
import block3 from './img/how3.png';

export default class HowWorks extends Component{
    render(){ 
        return(
            <div className="how">
                <div className="container">
                    <h2 className="caption">How it works</h2>
                    <div className="how-wrap">
                        <div className="how-block">
                            <div className="how-block__info info-how">
                                <div className="info-how__top">
                                    <p>1.</p>
                                    <h4>Select a few of the pictures you’re debating between.</h4>
                                </div>
                                <p className="info-how__addition">Additional text to describe this step in details and give some clarity.</p>
                            </div>
                            <div className="how-block__img">
                                <img src={block1} alt="Select a few of the pictures you’re debating between"/>
                            </div>
                        </div>
                        <div className="how-block how-block__second">
                            <div className="how-block__info info-how">
                                <div className="info-how__top">
                                    <p>2.</p>
                                    <h4>Have our panel of top-tier influencers help you choose.</h4>
                                </div>
                                <p className="info-how__addition">Additional text to describe this step in details and give some clarity.</p>
                            </div>
                            <div className="how-block__img ">
                                <img src={block2} alt="Have our panel of top-tier influencers help you choose."/>
                            </div>
                        </div>
                        <div className="how-block how-block__trird">
                            <div className="how-block__info info-how">
                                <div className="info-how__top">
                                    <p>3.</p>
                                    <h4>Get notified ASAP.</h4>
                                </div>
                                <p className="info-how__addition">Additional text to describe this step in details and give some clarity.</p>
                            </div>
                            <div className="how-block__img ">
                                <img src={block3} alt="Get notified ASAP."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
