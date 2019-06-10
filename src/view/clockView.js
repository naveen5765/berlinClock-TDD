import clockTemplate from '../templates/clock_template';
import Constants from '../utils/constants';
import { addClass, removeClass } from '../utils/helpers';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    const toggleLight = (light, lightSwitch) => {
        if(lightSwitch === 'on'){
            removeClass(light, 'off');
            addClass(light, 'on');
        }else{
            removeClass(light, 'on');
            addClass(light, 'off');
        }
    };

    return {
        setBerlinClockTime: (berlinClockTime) => {
            let lights = document.querySelectorAll('.light');
    
            for (let berlinClockIndex = 0; berlinClockIndex < berlinClockTime.length; berlinClockIndex += 1) {
                if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_YELLOW || berlinClockTime[berlinClockIndex] === Constants.LIGHT_RED) {
                    toggleLight(lights[berlinClockIndex], 'on');
                } else if (berlinClockTime[berlinClockIndex] === Constants.LIGHT_OFF) {
                    toggleLight(lights[berlinClockIndex], 'off');
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