

const key=`493182a8712c7f267b99797539a8f75e`;
const b_url=`https://api.openweathermap.org/data/2.5`;
const getweather=(infotype,searchParams)=>{
    const url=new URL(b_url+"/"+infotype);
    url.search=new URLSearchParams({...searchParams, appid: key});
    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data);


}
export default getweather;