import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    align-items: center;
    cursor: grab;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`;

export default ({ src }) =>{
    return <Wrapper className={'swiper-slide'}>
        <img src={src} />
    </Wrapper>
}

