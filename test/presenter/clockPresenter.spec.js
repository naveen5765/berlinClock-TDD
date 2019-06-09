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
});  

