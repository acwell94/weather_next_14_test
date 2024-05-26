'use client';
import Image from 'next/image';
import style from '@/styles/page/main/today.module.css';
import TodayInfoBox from '@/container/articleBox/TodayInfoBox';
import ChartInfoBox from '@/container/articleBox/ChartInfoBox';
import SliderInfoBox from '@/container/articleBox/SliderInfoBox';
import TodaySummaryInfoBox from '@/container/articleBox/TodayDetailInfoBox';
import NewsInfoBox from '@/container/articleBox/NewsInfoBox';

export default function Home() {
  const testHourlyLabel = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const testDailyLabel = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const testHourlyChartData = [
    40, 19, 15, 17, 6, 15, 14, -13, 12, 11, 10, 20, 8, 7, 6, 5, 4, 3, 2, 1,
  ];
  const testDailyChartData = [0, 19, 15, 17, 6, 15, 14, -13, 12, 9];
  const testHourlyChartPointData = [
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'sun',
    'cloud',
    'sun',
    'sun',
    'rain',
    'rain',
    'cloud',
    'cloud',
    'cloud',
    'rain',
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'sun',
  ];
  const testDailyChartPointData = [
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'sun',
    'cloud',
    'sun',
    'sun',
    'rain',
    'rain',
    'cloud',
    'cloud',
    'cloud',
    'rain',
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'sun',
  ];
  const testTodayDetailData = [
    { id: 'temp', title: '기온', value: 6, image: 'cloud' },
    { id: 'feel', title: '체감온도', value: 8, image: 'sun' },
    { id: 'wind', title: '바람', value: 6, image: 'rain' },
    { id: 'uv', title: '자외선', value: 6, image: 'sun' },
  ];
  return (
    <main className={style.main}>
      <article className={style.divideArticleContainer}>
        <TodayInfoBox
          title="오늘의 날씨"
          location="고양시 일산서구 대화동"
          temp="25"
          weatherIcon="sun"
          weatherSummary="맑음"
          maxTemp="28"
          minTemp="21"
        />
      </article>
      <article className={style.divideArticleContainer}>
        <SliderInfoBox
          title="시간별"
          hourlyLabels={testHourlyLabel}
          dailyLabels={testDailyLabel}
          hourlySliderData={testHourlyChartData}
          dailySliderData={testDailyChartData}
          hourlySliderWeatherSummaryData={testHourlyChartPointData}
          dailySliderWeatherSummaryData={testDailyChartPointData}
        />
      </article>
      <article className={style.divideArticleContainer}>
        <TodaySummaryInfoBox
          title="오늘의 날씨 상세"
          labels={testHourlyLabel}
          chartData={testHourlyChartData}
          detailData={testTodayDetailData}
        />
      </article>
      <article className={style.divideArticleContainer}>
        <NewsInfoBox title="메인 뉴스" category="main" />
      </article>
    </main>
  );
}
