import Constants from '../utils/constants';
import { isInValidTime, isEven, modulo5, isMultipleOf3 } from '../utils/helpers';

const ClockPresenter = (_view) => {
    const clockView = _view;

    const isLightTurnedOn = (lampIndex, lampsToBeTurnedOn) => {
        return lampIndex <= lampsToBeTurnedOn;
    };

    const getLamps = (lampsToBeTurnedOn, totalLampsInRow, color) => {
        let lamps = "";
        for (let lampIndex = 1; lampIndex <= totalLampsInRow; lampIndex++) {
            lamps += isLightTurnedOn(lampIndex, lampsToBeTurnedOn) ? color(lampIndex) : Constants.LIGHT_OFF;
        }
        return lamps;
    };

    const fiveMinutesRow = (minutes) => {
        let lampsToBeTurnedOn = Math.floor(minutes / 5);
        return getLamps(
            lampsToBeTurnedOn, 
            Constants.TOTAL_FIVE_MINUTES_LIGHTS,
            (lightIndex) => isMultipleOf3(lightIndex) ? Constants.LIGHT_RED : Constants.LIGHT_YELLOW);
    };

    const singleHoursRow = (hours) => {
        let lampsToBeTurnedOn = modulo5(hours);
        return getLamps(
            lampsToBeTurnedOn, 
            Constants.TOTAL_SINGLE_HOURS_LAMPS,
            () => Constants.LIGHT_RED);
    };

    const fiveHoursRow = (hours) => {
        let lampsToBeTurnedOn = Math.floor(hours / 5);
        return getLamps(
            lampsToBeTurnedOn, 
            Constants.TOTAL_FIVE_HOURS_LAMPS,
            () => Constants.LIGHT_RED);
    };

    const secondsLamp = (seconds) => {
        return isEven(seconds) ? Constants.LIGHT_YELLOW : Constants.LIGHT_OFF;
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
        singleHoursRow,
        fiveMinutesRow
    };
};

export default ClockPresenter;