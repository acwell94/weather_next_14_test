import Slider from '@/components/slider/Slider';
import commonStyle from '@/container/articleBox/style/ArticleBoxCommon.module.css';
import ArticleBoxTitle from '@/components/title/articleBox/ArticleBoxTitle';
import { useState } from 'react';

interface SliderInfo {
  title: string;
  hourlyLabels: number[];
  dailyLabels: number[];
  hourlySliderData: number[];
  dailySliderData: number[];
  hourlySliderWeatherSummaryData: string[];
  dailySliderWeatherSummaryData: string[];
}

const SliderInfoBox = (props: SliderInfo) => {
  const {
    title,
    hourlyLabels,
    dailyLabels,
    hourlySliderData,
    dailySliderData,
    hourlySliderWeatherSummaryData,
    dailySliderWeatherSummaryData,
  } = props;
  const hourlyData = {
    id: 'hourly',
    title: '시간별',
    label: hourlyLabels,
    data: hourlySliderData,
    icon: hourlySliderWeatherSummaryData,
  };
  const dailyData = {
    id: 'daily',
    title: '일별',
    label: dailyLabels,
    data: dailySliderData,
    icon: dailySliderWeatherSummaryData,
  };
  const [chartData, setChartData] = useState(hourlyData);

  const switchData = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id == 'hourly') {
      setChartData(hourlyData);
    } else {
      setChartData(dailyData);
    }
  };
  console.log(chartData);
  return (
    <>
      <div className={commonStyle.titleButtonBox}>
        <ArticleBoxTitle title={chartData.title} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            className={commonStyle.titleButton}
            id={hourlyData.id}
            onClick={(event) => switchData(event)}
          >
            {hourlyData.title}
          </button>
          <button
            className={commonStyle.titleButton}
            id={dailyData.id}
            onClick={(event) => switchData(event)}
          >
            {dailyData.title}
          </button>
        </div>
      </div>
      <article className={commonStyle.innerArticleContainer}>
        <Slider
          sliderData={chartData.data}
          sliderWeatherSummaryData={chartData.icon}
        />
      </article>
    </>
  );
};

export default SliderInfoBox;
