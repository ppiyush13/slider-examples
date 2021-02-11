import React from 'react';
import Swiper from 'tiny-swiper';
import SwiperPluginPagination from 'tiny-swiper/lib/modules/pagination';
import styled from 'styled-components';

const BulletClass = 'swiper-pagination-item';
const BulletActiveClass = 'active';
const SwiperWrapperClass = 'swiper-wrapper';

export default ({ children }) => {

    const ref = React.useRef();
    const paginationRef = React.useRef();

    React.useEffect(() =>{
        console.log('tiny-swiper re-render');
        if(ref.current) {
            new Swiper(ref.current, {
                wrapperClass: SwiperWrapperClass,
                centeredSlides: false,
                slidesPerView: 1,
                speed: 150,
                spaceBetween: 10,
                loop: true,
                pagination: {
                    el: paginationRef.current,
                    clickable: true,
                    bulletClass: BulletClass,
                    bulletActiveClass: BulletActiveClass
                },
                plugins: [SwiperPluginPagination],
            });
        }
    }, []);

    return <div style={{ height:500, width: 500 }}>
        <SwiperContainer ref={ref}>
            <div className={SwiperWrapperClass}>
                {children}
            </div>
        </SwiperContainer>
        <PaginationWrapper>
            <Pagination ref={paginationRef} />
        </PaginationWrapper>
    </div>
};

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Pagination = styled.div`
    display: flex;
    align-items: center;
    height: 58px;
    gap: 8px;

    .${BulletClass} {
        cursor: pointer;
        height: 8px;
        width: 8px;
        border-radius: 8px;
        background-color: #DADADA;
    }
    .${BulletClass}.${BulletActiveClass} {
        background-color: black;
    }
`;

const SwiperContainer = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: calc(100% - 56px);
    position: relative;
    overflow: hidden;

    .${SwiperWrapperClass} {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
`;

