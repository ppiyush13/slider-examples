import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import styled from 'styled-components';
import 'swiper/swiper.min.css';
//import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([ Pagination]);

const options = {
    spaceBetween: 10,
    slidesPerView: 1,
    speed: 150,
    loop: true,
    pagination: { 
        clickable: true,
        el: '.pagination',
    },
};

export default ({ children }) => {
    return <div style={{ height: 500, width: 500 }}>
        <Swiper {...options}>
            {
                React.Children.map(children, child => <SwiperSlide>{child}</SwiperSlide>)
            }
        </Swiper>
        <PaginationWrapper className='pagination' />
    </div>
};


const PaginationWrapper = styled.div`
    display: flex;
    gap: 8px;
    height: 56px;
    align-items: center;
    justify-content: center;

    .swiper-pagination-bullet {
        height: 8px;
        width: 8px;
        border-radius: 8px;
        background-color: #DADADA;
        cursor: pointer;

        &.swiper-pagination-bullet-active {
            background-color: #000;
        }
    }
`;
