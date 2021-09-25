import Logo from "./img/Clouds.png";
import Rain from "./img/rain.png";
import { format } from 'date-fns';

const UiBody = (weather) => {

    const importImg = (input) => {
        if (input === 'Clouds') {
            return Logo;
        } else if (input === 'Rain') {
            return Rain;
        }
    }


    const updateImg = importImg(weather.weather[0].weather[0].main);
    const updateImg1 = importImg(weather.weather[1].weather[0].main);
    const updateImg2 = importImg(weather.weather[2].weather[0].main);
    const updateImg3 = importImg(weather.weather[3].weather[0].main);
    const updateImg4 = importImg(weather.weather[4].weather[0].main);

    console.log()
    return (
        <div>
            <ul className="card-wrapper">
                <li className="card">
                    <img src={updateImg} id="bg1" alt='' />
                    <h3>{weather.weather[0].weather[0].main}</h3>
                    <p>{weather.weather[0].weather[0].description}</p>
                    <h3>{(weather.weather[0].main.temp - 273).toFixed(2)} ⁰C</h3>
                    <p>{format(new Date(weather.weather[0].dt_txt), "PPPPpppp")}</p>
                </li>
                <li className="card">
                    <img src={updateImg1} id="bg1" alt='' />
                    <h3>{weather.weather[1].weather[0].main}</h3>
                    <p>{weather.weather[1].weather[0].description}</p>
                    <h3>{(weather.weather[1].main.temp - 273).toFixed(2)} ⁰C</h3>
                    <p>{format(new Date(weather.weather[1].dt_txt), "PPPPpppp")}</p>
                </li>
                <li className="card">
                    <img src={updateImg2} id="bg1" alt='' />
                    <h3>{weather.weather[2].weather[0].main}</h3>
                    <p>{weather.weather[2].weather[0].description}</p>
                    <h3>{(weather.weather[2].main.temp - 273).toFixed(2)} ⁰C</h3>
                    <p>{format(new Date(weather.weather[2].dt_txt), "PPPPpppp")}</p>
                </li>
                <li className="card">
                    <img src={updateImg3} id="bg1" alt='' />
                    <h3>{weather.weather[3].weather[0].main}</h3>
                    <p>{weather.weather[3].weather[0].description}</p>
                    <h3>{(weather.weather[3].main.temp - 273).toFixed(2)} ⁰C</h3>
                    <p>{format(new Date(weather.weather[3].dt_txt), "PPPPpppp")}</p>
                </li>
                <li className="card">
                    <img src={updateImg4} id="bg1" alt='' />
                    <h3>{weather.weather[4].weather[0].main}</h3>
                    <p>{weather.weather[4].weather[0].description}</p>
                    <h3>{(weather.weather[4].main.temp - 273).toFixed(2)} ⁰C</h3>
                    <p>{format(new Date(weather.weather[4].dt_txt), "PPPPpppp")}</p>
                </li>
            </ul>
        </div>
    );
}

export default UiBody;