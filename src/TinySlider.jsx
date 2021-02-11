import React from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import styled from 'styled-components';

const useStateFromProp = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);
    React.useEffect(() => setValue(initialValue), [initialValue]);
    return [value, setValue];
};

let mounted = false;
export default ({ children, items = 1 }) => {

    const ref = React.useRef();
    const instance = React.useRef(null);
    const [child] = useStateFromProp(children);
    const [itemsState] = useStateFromProp(items);

    React.useEffect(() => {
        instance.current = tns({
            container: ref.current,
            items: itemsState,
            mouseDrag: true,
            gutter: 10,
            controls: false,
            speed: 150,
            navPosition: 'bottom',
            autoHeight: true,
        });
    }, []);

    React.useEffect(() => {
        console.log('mount', mounted);
        if(mounted) {
            console.log('tiny-slider re-render');
            instance.current.destroy();
            instance.current = tns({
                container: '.swipe-wrapper',
                items: itemsState,
                mouseDrag: true,
                gutter: 10,
                controls: false,
                speed: 150,
                navPosition: 'bottom',
                autoHeight: true,
            });
        }
        else {
            mounted = true;
        }
    }, [child, itemsState]);

    return <Wrapper  style={{ width: 500}} >
        <div ref={ref} className={'swipe-wrapper'}>{child}</div>
    </Wrapper>
};

const SIZE = '8px'; 
const Wrapper = styled.div`
    .tns-nav {
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        button {
            padding: 0;
            margin: 0;
            height: ${SIZE};
            width: ${SIZE};
            border-radius: ${SIZE};
            background-color: #DADADA;
            border: none;
            outline: none;

            &.tns-nav-active {
                background-color: #000;
            }
        }
    }
`;

