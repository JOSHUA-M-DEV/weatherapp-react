import { DateTime } from "luxon";
const key = `493182a8712c7f267b99797539a8f75e`;
const b_url = `https://api.openweathermap.org/data/2.5`;

const getweather1 = (infotype, searchParams) => {
  const url = new URL(b_url + "/" + infotype);
  url.search = new URLSearchParams({ ...searchParams, appid: key });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

const formatecurweather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
    humidity,
    timezone,
  };
};
const formateforcastweather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily?.slice(1, 6).map((d) => {
    return {
      title: formatetolocaltime(d.dt, timezone, "ccc"),
      temp: d.temp.daily,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly?.slice(1, 6).map((d) => {
    return {
      title: formatetolocaltime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};
const getformatecurweather = async (searchParams) => {
  const formatedformatecurweather = await getweather1(
    "weather",
    searchParams
  ).then(formatecurweather);
  const { lat, lon } = formatecurweather;
  const formattedforcastweather = await getweather1("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formateforcastweather);
  return { ...formatedformatecurweather, ...formattedforcastweather };
};
const formatetolocaltime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconUrlFormCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getformatecurweather;
export { formatetolocaltime, iconUrlFormCode };
