import React from 'react';
import Card from './Card';
import TinySlider from './TinySlider';
import TinySwiper from './TinySwiper';

const Cards = React.Children.toArray([
    <Card src={'https://user-images.githubusercontent.com/10026019/102327273-74284900-3fc0-11eb-913a-69661b73ab5d.png'} />,
    <Card src={'https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png'} />,
    <Card src={'https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png'} />,
    <Card src={'https://user-images.githubusercontent.com/10026019/102327260-6f639500-3fc0-11eb-85fa-cfaa45ce054c.png'} />,
    <Card src={'https://user-images.githubusercontent.com/10026019/102327264-712d5880-3fc0-11eb-8f07-7d58264938c1.png'} />,
    <Card src={'https://user-images.githubusercontent.com/10026019/102327267-72f71c00-3fc0-11eb-8550-8845f38935a4.png'} />,
]);

export default () => {
    const [state, setState] = React.useState(1);
    const onClick = () => {
        setState(state + 1);
    };

    return <>
        <button onClick={onClick}>Re-render</button>
        <TinySwiper>{Cards}</TinySwiper>
        <TinySlider items1={state}>{React.Children.toArray(Cards)}</TinySlider>
    </>
};

