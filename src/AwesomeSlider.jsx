import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const options = {
    organicArrows: false,
};

export default ({ children }) => {
    return <AwesomeSlider {...options}>
        {children}
    </AwesomeSlider>
};

