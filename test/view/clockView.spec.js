import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import ClockView from '../../src/view/clockView';

describe('Berlin Clock View', () => {
    jsdom({
        url: 'http://localhost'
    });
    let clockView;

    beforeEach(() => {
        clockView = ClockView(document.body);
    });

    it('Should display the digital time', () => {
        var div = document.createElement('div');
        div.setAttribute('id', 'digitalClock');
        document.body.appendChild(div);

        clockView.setDigitalClockTime('11:23:34');

        expect(document.getElementById('digitalClock').innerHTML).eql('11:23:34');
    });

    it('Should display an error message in case of an exception', () => {
        var div = document.createElement('div');
        div.setAttribute('id', 'berlinClock');
        document.body.appendChild(div);

        clockView.setErrorMessage('Error Message');

        expect(document.getElementById('berlinClock').innerHTML).eql('Error Message');
    });

    describe('Seconds Lamp', () => {
        it('Should be displayed', () => {
            expect(document.getElementById('secondsLamp')).to.not.be.null;
        });
    
        it('Should turn on during even seconds', () => {
            clockView.setBerlinClockTime('YOOOORRROYYRYYRYYROOYYOO');
            let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
    
            expect(secondsLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off during odd seconds', () => {
            clockView.setBerlinClockTime('OOOOORRROYYRYYRYYROOYYOO');
            let secondsLamp = document.querySelectorAll('#secondsLamp .light')[0];
    
            expect(secondsLamp.classList.contains('off')).to.be.true;
        });
    });

    describe('Five hours row', () => {
        it('Should display 4 lamps', () => {
            expect(document.querySelectorAll('#fiveHourRow .light').length).to.equal(4);
        });
    
        it('Should turn on if Berlin Clock color index is R', () => {
            clockView.setBerlinClockTime('YRRRRRRROYYRYYRYYROOYYOO');
            let fiveHoursLamp = document.querySelectorAll('#fiveHourRow .light')[0];
    
            expect(fiveHoursLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off if Berlin Clock color index is O', () => {
            clockView.setBerlinClockTime('YOOOORRROYYRYYRYYROOYYOO');
            let fiveHoursLamp = document.querySelectorAll('#fiveHourRow .light')[0];
    
            expect(fiveHoursLamp.classList.contains('off')).to.be.true;
        });
    });

    describe('Single hours row', () => {
        it('Should display 4 lamps', () => {
            expect(document.querySelectorAll('#singleHourRow .light').length).to.equal(4);
        });

        it('Should turn on if Berlin Clock color index is R', () => {
            clockView.setBerlinClockTime('YRRRRRRROYYRYYRYYROOYYOO');
            let singleHourLamp = document.querySelectorAll('#singleHourRow .light')[0];
    
            expect(singleHourLamp.classList.contains('on')).to.be.true;
        });

        it('Should turn off if Berlin Clock color index is O', () => {
            clockView.setBerlinClockTime('YRRRROOROYYRYYRYYROOYYOO');
            let singleHourLamp = document.querySelectorAll('#singleHourRow .light')[0];
    
            expect(singleHourLamp.classList.contains('off')).to.be.true;
        });
    });

    describe('Five minutes row', () => {
        it('Should display 11 lamps', () => {
            expect(document.querySelectorAll('#fiveMinuteRow .light').length).to.equal(11);
        });

        it('Should turn off if Berlin Clock color index is O', () => {
            clockView.setBerlinClockTime('YRRRROOROOYRYYRYYROOYYOO');
            let fiveMinuteLamp = document.querySelectorAll('#fiveMinuteRow .light')[0];
    
            expect(fiveMinuteLamp.classList.contains('off')).to.be.true;
        });

        it('Should turn on if Berlin Clock color index is Y or R', () => {
            clockView.setBerlinClockTime('YRRRROOROYYRYYRYYROOYYOO');
            let fiveMinuteLamp = document.querySelectorAll('#fiveMinuteRow .light')[0];
    
            expect(fiveMinuteLamp.classList.contains('on')).to.be.true;
        });
    });

    describe('Single minute row', () => {
        it('Should display 4 lamps', () => {
            expect(document.querySelectorAll('#singleMinuteRow .light').length).to.equal(4);
        });

        it('Should turn on if Berlin Clock color index is Y', () => {
            clockView.setBerlinClockTime('YRRRRRRROYYRYYRYYROOYYOO');
            let singleHourLamp = document.querySelectorAll('#singleMinuteRow .light')[0];
    
            expect(singleHourLamp.classList.contains('on')).to.be.true;
        });

        it('Should turn off if Berlin Clock color index is O', () => {
            clockView.setBerlinClockTime('YRRRRRRROYYRYYRYYROOOYOO');
            let singleHourLamp = document.querySelectorAll('#singleMinuteRow .light')[0];
    
            expect(singleHourLamp.classList.contains('off')).to.be.true;
        });
    });
});