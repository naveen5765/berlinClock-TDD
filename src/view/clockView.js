import clockTemplate from '../templates/clock_template';

const ClockView = (container) => {
    container.innerHTML = clockTemplate();

    return {
        setBerlinClockTime: (berlinClockTime) => {
            // document.getElementById('berlinClock').innerHTML = berlinClockTime;
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