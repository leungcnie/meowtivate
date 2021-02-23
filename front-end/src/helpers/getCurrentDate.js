// Get current date and format into a string with format yyyy-mm-dd
export default function getCurrentDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;

  // Uncomment if vagrant timezone faster than host timezone
  // const nextDay = Number(today.slice(-1)) + 1;
  // const result = today.slice(0,-1).concat(nextDay);
  // return result;

  return today;
}