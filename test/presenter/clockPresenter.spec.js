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

        it("Should return 'OOOO' for '02' hours", function() {
            expect(clock.fiveHoursRow('02')).to.equal('OOOO');
        });

        it("Should return 'ROOO' for '08' hours", function() {
            expect(clock.fiveHoursRow('08')).to.equal('ROOO');
        });

        it("Should return 'RRRO' for '16' hours", function() {
            expect(clock.fiveHoursRow('16')).to.equal('RRRO');
        });
    });

    describe("Single Hours Row", () => {
        it("Should return 'OOOO' for '00' hour", function() {
            expect(clock.singleHoursRow('00')).to.equal('OOOO');
        });

        it("Should return 'RRRO' for '23' hours", function() {
            expect(clock.singleHoursRow('23')).to.equal('RRRO');
        });

        it("Should return 'RROO' for '02' hours", function() {
            expect(clock.singleHoursRow('02')).to.equal('RROO');
        });

        it("Should return 'RRRO' for '08' hours", function() {
            expect(clock.singleHoursRow('08')).to.equal('RRRO');
        });

        it("Should return 'RRRR' for '14' hours", function() {
            expect(clock.singleHoursRow('14')).to.equal('RRRR');
        });
    });

    describe("Five Minutes Row", () => {
        it("Should return 'OOOOOOOOOOO' for '00' minute", function() {
            expect(clock.fiveMinutesRow('00')).to.equal('OOOOOOOOOOO');
        });

        it("Should return 'YYRYYRYYRYY' for '59' minutes", function() {
            expect(clock.fiveMinutesRow('59')).to.equal('YYRYYRYYRYY');
        });

        it("Should return 'OOOOOOOOOOO' for '04' minutes", function() {
            expect(clock.fiveMinutesRow('04')).to.equal('OOOOOOOOOOO');
        });

        it("Should return 'YYRYOOOOOOO' for '23' minutes", function() {
            expect(clock.fiveMinutesRow('23')).to.equal('YYRYOOOOOOO');
        });

        it("Should return 'YYRYYRYOOOO' for '35' minutes", function() {
            expect(clock.fiveMinutesRow('35')).to.equal('YYRYYRYOOOO');
        });
    });

    describe("Single Minutes Row", () => {
        it("Should return 'OOOO' for '00' minute", function() {
            expect(clock.singleMinutesRow('00')).to.equal('OOOO');
        });

        it("Should return 'YYYY' for '59' minutes", function() {
            expect(clock.singleMinutesRow('59')).to.equal('YYYY');
        });

        it("Should return 'YYOO' for '32' minutes", function() {
            expect(clock.singleMinutesRow('32')).to.equal('YYOO');
        });

        it("Should return 'YYYY' for '34' minutes", function() {
            expect(clock.singleMinutesRow('34')).to.equal('YYYY');
        });
        
        it("Should return 'OOOO' for '35' minutes", function() {
            expect(clock.singleMinutesRow('35')).to.equal('OOOO');
        });
    });

    describe("Complete Berlin Clock", () => {
        it("Should return 'YOOOOOOOOOOOOOOOOOOOOOOO' for '00:00:00' digital time", function() {
            expect(clock.getBerlinClockTime('00:00:00')).to.equal('YOOOOOOOOOOOOOOOOOOOOOOO');
        });

        it("Should return 'ORRRRRRROYYRYYRYYRYYYYYY' for '23:59:59' digital time", function() {
            expect(clock.getBerlinClockTime('23:59:59')).to.equal('ORRRRRRROYYRYYRYYRYYYYYY');
        });
    });
});  

