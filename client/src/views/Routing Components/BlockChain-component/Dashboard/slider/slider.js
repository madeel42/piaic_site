import "react-responsive-carousel/lib/styles/carousel.min.css";

var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

export default class Slider extends React.Component {

    render() {
        return (
            // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}

            <Carousel axis="horizontal" showArrows={true} showIndicators={true} infiniteLoop={true} >
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/5.jpeg" />
                    <p className="legend">Legend 3</p> 
                </div>
            </Carousel>
        );
    }
};