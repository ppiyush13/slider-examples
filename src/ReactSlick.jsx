import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    edgeFriction: 1,
    swipeToSlide: true,
    touchThreshold: 1000,
};

export default ({ children }) => {
    return <Wrapper style={{ height: 500, width: 500 }}>
    <h2> Single Item</h2>
    <Slider {...settings}>
        {React.Children.map(children, child => {
            return <Slide aria-details={'slide'}>{child}</Slide>
        })}
    </Slider>
  </Wrapper>
};

const Wrapper = styled.div`
    .slick-slide {
        //margin-right: 10px;
    }
`;

const Slide = styled.div`
    //margin-right: 10px;
`;

