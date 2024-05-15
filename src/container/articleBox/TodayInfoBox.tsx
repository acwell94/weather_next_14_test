interface Today{
  title : string;
  location : string;
  temp : string;
  weatherIcon: string;
  weatherSummary : string;
  maxTemp : string;
  minTemp : string;

}

import Image from "next/image";
import commonStyle from "@/container/articleBox/style/ArticleBoxCommon.module.css"
import style from "@/container/articleBox/style/TodayInfoBox.module.css"
const TodayInfoBox = (props:Today) => {
    const {title, location, temp, weatherIcon, weatherSummary, maxTemp, minTemp} = props
    const weatherIconImage = `/icons/weather/${weatherIcon}.svg`
  return (
    <>
        <h2 className={commonStyle.innerArticleTitle}>{title}</h2>
        <section className={commonStyle.innerArticleContainer}>
            <div className={style.locationContainer}>
              <div className={style.location}>{location}</div>
              <div>2024-05-15</div>
            </div>
            <div className={style.currentTempContainer}>
                <div className={style.currentTemp}>{temp}°C</div>
              <div className={style.currentWeatherIconContainer}>
                <Image
                  src={weatherIconImage}
                  alt={weatherIcon}
                  fill
                />
              </div>
            </div>
            <div className={style.currentWeatherBottomContainer}>
              <div className={style.currentWeatherSummary}>{weatherSummary}</div>
              <div className={style.currentWeatherSummary}>최고 {maxTemp}°C 최저 {minTemp}°C</div>
            </div>
        </section>
    </>
  );
}

export default TodayInfoBox;