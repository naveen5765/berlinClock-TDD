import { expect } from 'chai';
import DigitalTime from '../../src/model/digitalTime';

describe('Digital Time Model', () => {
    it('Should return the time in "HH:MM:SS" format', () => {
        const digitalTime = DigitalTime().getTime();
        const isValidTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(digitalTime);

        expect(isValidTime).to.be.true;
    });
});