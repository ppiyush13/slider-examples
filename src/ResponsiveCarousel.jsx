import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const options = {
    showArrows: false,
    showStatus: false,
    swipeable: true,
    transitionTime: 150,
    swipeScrollTolerance: 1,
    infiniteLoop: true,
};

export default ({ children }) => {
    return <Wrapper style={{ width: 300 }}>
        <Carousel {...options}>
            {children}
        </Carousel>
    </Wrapper>
};

const Wrapper = styled.div`
    .slider {
        gap 10px;
    }
`;

