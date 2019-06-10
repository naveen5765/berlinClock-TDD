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
            if(berlinClockTime[0] === Constants.LIGHT_YELLOW){
                let light = document.querySelectorAll('#secondsLamp .light')[0];
                toggleLight(light, 'on');
            }else{
                let light = document.querySelectorAll('#secondsLamp .light')[0];
                toggleLight(light, 'off');
            }

            for (let fiveHourRowIndex = 1; fiveHourRowIndex <= 4; fiveHourRowIndex += 1) {
                let light = document.querySelectorAll('#fiveHourRow .light')[fiveHourRowIndex - 1];
                if (berlinClockTime[fiveHourRowIndex] === Constants.LIGHT_RED) {
                    toggleLight(light, 'on');
                } else if (berlinClockTime[fiveHourRowIndex] === Constants.LIGHT_OFF) {
                    toggleLight(light, 'off');
                }
            }

            for (let singleHourRowIndex = 0; singleHourRowIndex < 4; singleHourRowIndex += 1) {
                let light = document.querySelectorAll('#singleHourRow .light')[singleHourRowIndex];
                if (berlinClockTime[singleHourRowIndex + 5] === Constants.LIGHT_RED) {
                    toggleLight(light, 'on');
                } else if (berlinClockTime[singleHourRowIndex + 5] === Constants.LIGHT_OFF) {
                    toggleLight(light, 'off');
                }
            }

            for (let fiveMinutesRowIndex = 0; fiveMinutesRowIndex < 11; fiveMinutesRowIndex += 1) {
                let light = document.querySelectorAll('#fiveMinuteRow .light')[fiveMinutesRowIndex];
                if (berlinClockTime[fiveMinutesRowIndex + 9] === Constants.LIGHT_OFF) {
                    toggleLight(light, 'off');
                } else if (
                    berlinClockTime[fiveMinutesRowIndex + 9] === Constants.LIGHT_RED
                    || berlinClockTime[fiveMinutesRowIndex + 9] === Constants.LIGHT_YELLOW) {
                    toggleLight(light, 'on');
                } 
            }

            for (let singleMinuteRowIndex = 0; singleMinuteRowIndex < 4; singleMinuteRowIndex += 1) {
                let light = document.querySelectorAll('#singleMinuteRow .light')[singleMinuteRowIndex];
                if (berlinClockTime[singleMinuteRowIndex + 20] === Constants.LIGHT_YELLOW) {
                    toggleLight(light, 'on');
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