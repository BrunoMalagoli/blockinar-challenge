export default async function checkIsSameDate(
  arrivalDate: string,
  check_in_date: string
) {
  let result;
  if (arrivalDate.slice(0, 10) === check_in_date.slice(0, 10)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
