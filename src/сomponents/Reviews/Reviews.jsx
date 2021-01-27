import React, { Component }  from 'react';
import './Reviews.scss'
import comment1 from './img/review1.png';
import comment2 from './img/review2.png';
import OwlCarousel from 'react-owl-carousel2';

export default class Reviews extends Component{
    render(){ 
        const options = {
            items: 1,
            dots: true,
            autoWidth: false,
            stagePadding:280,
            margin: 30,
            nav:true,
            autoplay: true,
            loop:true
        };
        return(
          <div className="reviews">
              <div className="container">
                    <h2 className="caption">What People Are Saying</h2>
                </div>
                    <OwlCarousel ref="comment" options={options}>
                        <div className="comments-wrap">
                            <div className="reviews-block reviews-blue">
                                <div className="reviews-block__photo">
                                    <img src={comment1} alt="person"/>
                                </div>
                                <div className="reviews-block__comment">
                                    <p>“This will be a quote that someone said about how amazing WePic has been for them and...“</p>
                                    <span>Tiana Polis</span>
                                </div>
                            </div>
                        </div>
                        <div className="comments-wrap">
                            <div className="reviews-block reviews-grey">
                                <div className="reviews-block__photo">
                                    <img src={comment2} alt="person"/>
                                </div>
                                <div className="reviews-block__comment">
                                    <p>“This will be a quote that someone said about how amazing WePic has been for them and...“</p>
                                    <span>Anna Meridy</span>
                                </div>
                            </div>
                        </div>
                        <div className="comments-wrap">
                            <div className="reviews-block reviews-blue">
                                <div className="reviews-block__photo">
                                    <img src={comment1} alt="person"/>
                                </div>
                                <div className="reviews-block__comment">
                                    <p>“This will be a quote that someone said about how amazing WePic has been for them and...“</p>
                                    <span>Tiana Polis</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
          </div>
        )
    }
}
