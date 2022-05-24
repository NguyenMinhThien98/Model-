export const formatNumber = (num: number | any) => {
  if (isNaN(num)) {
    return num;
  }
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
