import { expect } from 'chai';
import Clock from '../../src/presenter/clockPresenter';

describe('Berlin Clock', () => {
    let clock;
    beforeEach(() => {
        clock = Clock();
    });

    describe('Error Handling for Invalid Time', () => {
        it('Should throw an error when an invalid second is passed', () => {
            let exceptionThrown = false;
    
            try{
                clock.getBerlinClockTime('23:00:70');
            }catch(exception){
                exceptionThrown = true;
            }
    
            expect(exceptionThrown).to.be.true;
        });
    
        it('Should throw an error when an invalid minute is passed', () => {
            let exceptionThrown = false;
    
            try{
                clock.getBerlinClockTime('00:61:00');
            }catch(exception){
                exceptionThrown = true;
            }
    
            expect(exceptionThrown).to.be.true;
        });
    
        it('Should throw an error when an invalid hour is passed', () => {
            let exceptionThrown = false;
    
            try{
                clock.getBerlinClockTime('25:00:00');
            }catch(exception){
                exceptionThrown = true;
            }
    
            expect(exceptionThrown).to.be.true;
        });
    });

    describe("Seconds lamp", () => {
        it("Should return 'Y' for even seconds", function() {
          expect(clock.secondsLamp('00')).to.equal('Y');
        });

        it("Should return 'O' for odd seconds", function() {
            expect(clock.secondsLamp('59')).to.equal('O');
        });
    });

    describe("Five Hours Row", () => {
        it("Should return 'OOOO' for '00' hour", function() {
          expect(clock.fiveHoursRow('00')).to.equal('OOOO');
        });

        it("Should return 'RRRR' for '23' hours", function() {
            expect(clock.fiveHoursRow('23')).to.equal('RRRR');
        });
    });
});  

