import clockTemplate from '../templates/clock_template';
import Constants from '../utils/constants';
import { addClass, removeClass } from '../utils/helpers';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    return {
        setBerlinClockTime: (berlinClockTime) => {
            if(berlinClockTime[0] === Constants.LIGHT_YELLOW){
                let light = document.querySelectorAll('#secondsLamp .light')[0];
                addClass(light, 'on');
            }
        },

        setDigitalClockTime: (digitalClockTime) => {
            document.getElementById('digitalClock').innerHTML = digitalClockTime;
        },
        
        setErrorMessage: (errorMessage) => {
            document.getElementById('berlinClock').innerHTML = errorMessage;
        }
    };
};

export default ClockView;