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
            let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
    
            expect(secondsLamp.classList.contains('on')).to.be.true;
        });
    
        it('Should turn off if Berlin Clock color index is O', () => {
            clockView.setBerlinClockTime('YOOOORRROYYRYYRYYROOYYOO');
            let secondsLamp = document.querySelectorAll('#fiveHourRow .light')[0];
    
            expect(secondsLamp.classList.contains('off')).to.be.true;
        });
    });
});