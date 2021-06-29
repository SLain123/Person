import moment from 'moment';
import { Week } from '../../types/timelineTypes';

export const findNextMonday = (startDate: Date) => {
    if (startDate.getDay() === 1) {
        return startDate;
    } else {
        return new Date(moment(startDate).day(8).format());
    }
};

export const findNextSunday = (startDate: Date) => {
    if (startDate.getDay() === 0) {
        return startDate;
    } else {
        return new Date(moment(startDate).day(7).format());
    }
};

export const getSplitWeekArray = (startDate: Date) => {
    let resultArray: Week[] = [];

    const getWeek = (startDate: Date) => {
        const startMonday = findNextMonday(startDate);
        const nextSunday = findNextSunday(startMonday);
        const now = new Date();

        const week = {
            begin: moment(startMonday).format('DD.MM.YYYY'),
            end: moment(nextSunday).format('DD.MM.YYYY'),
        };

        resultArray.push(week);

        if (nextSunday < now) {
            getWeek(new Date(nextSunday.setDate(nextSunday.getDate() + 1)));
        }
    };

    getWeek(startDate);

    return resultArray;
};
