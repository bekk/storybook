import moment from 'moment';
function leftPad(num: number) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

export function getDateString(date: Date) {
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());
  return `${year}-${month}-${day}`;
}

export function getDateAtMidnightUtc(date: Date) {
  return new Date(getDateString(date));
}

export function getTodaysDateAtMidnightUtc() {
  const now = new Date();
  return new Date(getDateString(now));
}

export function getMomentAtMidnightUtc(date: moment.Moment | null) {
  if (date) {
    const momentAsDate = date.toDate();
    return moment(getDateAtMidnightUtc(momentAsDate));
  }
  return null;
}

export function generateRandomHexId(): string {
  /* Generate a random 8 digit hexadecimal number */
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += Math.floor(Math.random() * 16).toString(16);
  }
  return id;
}
