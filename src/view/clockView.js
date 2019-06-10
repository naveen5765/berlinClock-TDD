import clockTemplate from '../templates/clock_template';
import Constants from '../utils/constants';
import { addClass, removeClass } from '../utils/helpers';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    return {
        setBerlinClockTime: (berlinClockTime) => {
            if(berlinClockTime[0] === Constants.LIGHT_YELLOW){
                let light = document.querySelectorAll('#secondsLamp .light')[0];
                removeClass(light, 'off');
                addClass(light, 'on');
            }else{
                let light = document.querySelectorAll('#secondsLamp .light')[0];
                removeClass(light, 'on');
                addClass(light, 'off');
            }

            for (let fiveHourRowIndex = 1; fiveHourRowIndex <= 4; fiveHourRowIndex += 1) {
                let light = document.querySelectorAll('#fiveHourRow .light')[fiveHourRowIndex - 1];
                if (berlinClockTime[fiveHourRowIndex] === Constants.LIGHT_RED) {
                    removeClass(light, 'off');
                    addClass(light, 'on');
                }
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