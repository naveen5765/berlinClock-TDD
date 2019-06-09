import Constants from '../utils/constants';
import { isInValidTime } from '../utils/helpers';

const ClockPresenter = (_view) => {
    const clockView = _view;

    const isLightTurnedOn = (lampIndex, lampsToBeTurnedOn) => {
        return lampIndex <= lampsToBeTurnedOn;
    };

    const singleHoursRow = (hours) => {
        let lampsToBeTurnedOn = hours % 5;
        let lamps = "";
        for (let lampIndex = 1; lampIndex <= Constants.TOTAL_FIVE_HOURS_LAMPS; lampIndex++) {
            lamps += isLightTurnedOn(lampIndex, lampsToBeTurnedOn) ? Constants.LIGHT_RED : Constants.LIGHT_OFF;
        }
        return lamps;
    };

    const fiveHoursRow = (hours) => {
        let lampsToBeTurnedOn = Math.floor(hours / 5);
        let lamps = "";
        for (let lampIndex = 1; lampIndex <= Constants.TOTAL_FIVE_HOURS_LAMPS; lampIndex++) {
            lamps += isLightTurnedOn(lampIndex, lampsToBeTurnedOn) ? Constants.LIGHT_RED : Constants.LIGHT_OFF;
        }
        return lamps;
    };

    const secondsLamp = (seconds) => {
        return seconds % 2 === 0 ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
    };

    const getBerlinClockTime = (digitalTime) => {
        if(isInValidTime(digitalTime))
            throw Constants.ERROR_MESSAGE;

        return '';
    };

    return {
        setTime: (digitalTime) => {
            try{
                const berlinClockTime = getBerlinClockTime(digitalTime);
                clockView.setBerlinClockTime(berlinClockTime);
            }catch(errorMessage){
                clockView.setErrorMessage(errorMessage);
            }
        },
        getBerlinClockTime,
        secondsLamp,
        fiveHoursRow,
        singleHoursRow
    };
};

export default ClockPresenter;