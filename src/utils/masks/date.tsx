export const isValidDate = (date: string): boolean => {
  const splitedDate = date.split('/');
  if (splitedDate.length < 3) return false;

  const actualYear = new Date().getFullYear();
  const oldYear = actualYear - 150;
  const transformStringYearToInt = parseInt(splitedDate[2]);

  if (
    transformStringYearToInt > actualYear ||
    transformStringYearToInt < oldYear
  ) {
    return false;
  }
  const isValid = Number(
    new Date(`${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`)
  );

  return !Number.isNaN(isValid);
};
