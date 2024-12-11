export function getYearFromDate(dateString: string) {
  // validate date is in the format YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }
  return dateString.split("-")[0];
}