import React from 'react';
import Carousel from 'nuka-carousel';

const options = {
    cellSpacing: 10,
    wrapAround: true,
    withoutControls: true,
    //disableAnimation: false,
    //disableEdgeSwiping: false,
    speed: 300,
    //easing: 'linear'
};

export default ({ children }) => {
    return <div style={{ height: 500, width: 500 }}>
        <Carousel {...options}>{children}</Carousel>
  </div>
};

