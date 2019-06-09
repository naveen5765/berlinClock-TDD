import ClockPresenter from './presenter/clockPresenter';
import ClockView from './view/clockView';
import DigitalTime from './model/digitalTime';

const berlinClockContainer = document.getElementById('container');
const clock = new ClockPresenter(new ClockView(berlinClockContainer));
const digitalTime = new DigitalTime().getTime();

clock.setTime(digitalTime);
