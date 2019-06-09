import { expect } from 'chai';
import Clock from '../../src/presenter/clockPresenter';

describe('Berlin Clock', () => {
    it('Should throw an error when an invalid second is passed', () => {
        const clock = Clock();
        let exceptionThrown = false;

        try{
            clock.getBerlinClockTime('23:00:70');
        }catch(exception){
            exceptionThrown = true;
        }

        expect(exceptionThrown).to.be.true;
    });

    it('Should throw an error when an invalid minute is passed', () => {
        const clock = Clock();
        let exceptionThrown = false;

        try{
            clock.getBerlinClockTime('00:61:00');
        }catch(exception){
            exceptionThrown = true;
        }

        expect(exceptionThrown).to.be.true;
    });

    it('Should throw an error when an invalid hour is passed', () => {
        const clock = Clock();
        let exceptionThrown = false;

        try{
            clock.getBerlinClockTime('25:00:00');
        }catch(exception){
            exceptionThrown = true;
        }

        expect(exceptionThrown).to.be.true;
    });
});  

