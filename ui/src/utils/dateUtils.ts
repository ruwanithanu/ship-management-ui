import { TFunction } from 'react-i18next';

const getMonth = (t: TFunction, monthNumber: string) => {
  const months = [
    'jan', 'feb', 'mar', 'apr',
    'may', 'jun', 'jul', 'aug',
    'sep', 'oct', 'nov', 'dec'
  ];
  const index = parseInt(monthNumber) - 1;

  return t(`months.${months[index]}`);
}

export const getLocalDate = (d: Date, ms: number = 0): Date => {
  const offset: number = d.getTimezoneOffset();
  return new Date(d.getTime() - (offset * 60 * 1000) + ms);
};

export const parseDate = (t: TFunction, date: string) => {
  const theDate = getLocalDate(new Date(date));
  const [datePart, timePart] = theDate.toJSON().split('T');
  const [year, monthnum, day] = datePart.split('-');
  const time = timePart.substr(0, 5);
  const month = getMonth(t, monthnum);

  return { day, month, year, time };
}

export const formatDateTime = (t: TFunction, d: string) => {
  const parsedDate = parseDate(t, d);
  return t('format.datetime', { ...parsedDate });
};

export const formatDate = (t: TFunction, d: string) => {
  const { day, month, year } = parseDate(t, d);
  return t('format.date', { day, month, year });
};
