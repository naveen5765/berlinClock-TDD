import Constants from '../utils/constants';
import { isInValidTime, isEven, modulo5 } from '../utils/helpers';

const ClockPresenter = (_view) => {
    const clockView = _view;

    const isLightTurnedOn = (lampIndex, lampsToBeTurnedOn) => {
        return lampIndex <= lampsToBeTurnedOn;
    };

    const getLamps = (lampsToBeTurnedOn, totalLampsInRow) => {
        let lamps = "";
        for (let lampIndex = 1; lampIndex <= totalLampsInRow; lampIndex++) {
            lamps += isLightTurnedOn(lampIndex, lampsToBeTurnedOn) ? Constants.LIGHT_RED : Constants.LIGHT_OFF;
        }
        return lamps;
    };

    const singleHoursRow = (hours) => {
        let lampsToBeTurnedOn = modulo5(hours);
        return getLamps(lampsToBeTurnedOn, Constants.TOTAL_SINGLE_HOURS_LAMPS);
    };

    const fiveHoursRow = (hours) => {
        let lampsToBeTurnedOn = Math.floor(hours / 5);
        return getLamps(lampsToBeTurnedOn, Constants.TOTAL_FIVE_HOURS_LAMPS);
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
        singleHoursRow
    };
};

export default ClockPresenter;