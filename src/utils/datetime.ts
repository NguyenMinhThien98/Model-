import dayjs from 'dayjs';

export const formatBirthDate = (date?: Date) => {
  if (!date) {
    return '';
  }
  return dayjs(date).format('DD/MM/YYYY');
};
