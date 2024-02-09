function addFeira (weekDay, weekDayNumber) {
    return (weekDayNumber === 0 || weekDayNumber === 6) ? weekDay : `${weekDay}-feira`;
}

function addZeros (num) {
    return num >= 10 ? num : `0${num}`;
}

function getWeekDayText (weekDay) {
    switch (weekDay) {
        case 0:
            return weekDay = 'Domingo';
        case 1:
            return weekDay = 'Segunda';
        case 2:
            return weekDay = 'Terça';
        case 3:
            return weekDay = 'Quarta';
        case 4:
            return weekDay = 'Quinta';
        case 5:
            return weekDay = 'Sexta';
        case 6:
            return weekDay = 'Sábado';
        default:
            return 'Dia da semana inválido!';
    }
}

function getMonthText (month) {
    switch (month) {
        case 1:
            return weekDay = 'janeiro';
        case 2:
            return weekDay = 'fevereiro';
        case 3:
            return weekDay = 'março';
        case 4:
            return weekDay = 'abril';
        case 5:
            return weekDay = 'maio';
        case 6:
            return weekDay = 'junho';
        case 7:
            return weekDay = 'julho';
        case 8:
            return weekDay = 'agosto';
        case 9:
            return weekDay = 'setembro';
        case 10:
            return weekDay = 'outubro';
        case 11:
            return weekDay = 'novembro';
        case 12:
            return weekDay = 'dezembro';
        default:
            return 'Mês inválido!';
    }
}

function formatDate (data) {
    const weekDayNumber = data.getDay();
    const day = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();
    const hour = data.getHours();
    const minutes = data.getMinutes();

    const weekDayText = addFeira(getWeekDayText(weekDayNumber), weekDayNumber);
    const hourFormatted = addZeros(hour);
    const minutesFormatted = addZeros(minutes);
    const monthText = getMonthText(month);

    return `${weekDayText}, ${day} de ${monthText} de ${year} ${hourFormatted}:${minutesFormatted}`;
}

function updateDate (date) {
    const formattedDate = formatDate(date);
    const divDate = document.querySelector('.data');
    divDate.innerHTML = formattedDate;
}

const data = new Date('2024-04-05 00:12');
updateDate(data);

