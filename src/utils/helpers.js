export const prependZero = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
};

export const isInValidTime = (time) => {
    const timeParts = time.split(':');
    const seconds = timeParts[2];
    let minutes = timeParts[1];
    let hours = timeParts[0];

    return !/^([0-5][0-9])?$/.test(seconds) 
        && !/^([0-5][0-9])?$/.test(minutes)
        && !/^([0-1]?[0-9]|2[0-4])?$/.test(hours);
};