function seconds(s: number): number {
  return s * 1000;
}

function minutes(m: number): number {
  return seconds(m) * 60;
}

function hours(h: number): number {
  return minutes(h) * 60;
}

function days(d: number): number {
  return hours(d) * 24;
}

export function months(m: number): number {
  return days(m) * 30.42;
}
