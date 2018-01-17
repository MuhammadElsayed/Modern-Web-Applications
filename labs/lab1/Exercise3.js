function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    let weekendDays = [0,6];
    return weekendDays.filter(d => d == day).length != 0;
}

console.log(isWeekend());