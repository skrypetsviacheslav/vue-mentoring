export function extractYearFromDate(stringDate) {
  if (/^\d\d\d\d-\d\d-\d\d$/.test(stringDate)) {
    return stringDate.substring(0, 4);
  }
  return stringDate;
}
