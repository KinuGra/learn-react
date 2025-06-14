export async function getWeather(cityId) {
    // const cityId = '130010';
    const url = `https://weather.tsukumijima.net/api/forecast/city/${cityId}`;

    const res = await fetch(url);
    const data = await res.json();

    const today = data.forecasts;

    return data;
}