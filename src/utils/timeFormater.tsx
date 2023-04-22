export default function timeFormater(seconds: number) {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  if (hour > 0) return [hour, min < 10 ? `0${min}` : min, sec < 10 ? `0${sec}` : sec].join(':');
  else return [min, sec < 10 ? `0${sec}` : sec].join(':');
}
