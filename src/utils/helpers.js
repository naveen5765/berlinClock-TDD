export const prependZero = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
};

export const isInValidTime = (time) => {
    return !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
};

export const isEven = (number) => {
  return number % 2 === 0;
};

export const modulo5 = (number) => {
  return number % 5; 
};

export const isMultipleOf3 = (number) => {
  return number % 3 === 0;
};

export const splitDigitalTime = (time) => {
  let timeParts = time.split(":");
  let hours = timeParts[0];
  let minutes = timeParts[1];
  let seconds = timeParts[2];

  return {hours, minutes, seconds};
};