import Constants from '../utils/constants';
import { isInValidTime } from '../utils/helpers';

const ClockPresenter = (_view) => {
    const clockView = _view;

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
        }
    };
};

export default ClockPresenter;