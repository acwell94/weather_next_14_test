import Image from "next/image";
import style from "@/components/slider/style/WeatherSliderElement.module.css"
interface WeatherSliderElementInfo {
    weatherSummary : string;
    temp : number;
    maxTemp? : number[];
    minTemp? : number[];
}

const WeatherSliderElement = (props : WeatherSliderElementInfo) => {
    const {weatherSummary, temp, maxTemp, minTemp} = props;
    const weatherIconImage = `/icons/weather/${weatherSummary}.svg`

  return (
    <div className={style.weatherSliderElementContainer}>
        <div className={style.weatherSliderTemp}>{temp}°</div>
        <div className={style.weatherIconImageContainer}>
            <Image
            src={weatherIconImage}
            alt={weatherSummary}
            fill
            />
        </div>
        <div className={style.weatherSliderTime}>오후 1시</div>
    </div>
  );
}

export default WeatherSliderElement;