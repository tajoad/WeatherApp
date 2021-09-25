import useFetch from './useFetch';
import UiBody from './Body';

const Weather = ({ city }) => {
    const key = '957609589ee8bd7f7a9c9aeaee8a74ab';
    const weatherURI = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const query = `${city}&appid=${key}`;
    const { data, ispending, error } = useFetch(weatherURI + query);

    // let timeSrc = data.list.dt < data.city.sunset ? Night : Day;
    return (
        <div className="weather">
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && <UiBody weather={data.list} />}
        </div>
    )
}

export default Weather;