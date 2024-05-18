'use client'
import Image from "next/image";
import style from "@/styles/page/main/today.module.css"
import TodayInfoBox from "@/container/articleBox/TodayInfoBox";
import ChartInfoBox from "@/container/articleBox/ChartInfoBox";

export default function Home() {
  const testLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const testChartData = [40, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  return (
    <main className={style.main}>
      <article className={style.divideArticleContainer}>
        <TodayInfoBox title="오늘의 날씨" location="고양시 일산서구 대화동" temp="25" weatherIcon="sun" weatherSummary="맑음" maxTemp="28" minTemp="21"/>
      </article>
      <article className={style.divideArticleContainer}>
        <ChartInfoBox labels={testLabel} chartData={testChartData}/>
      </article>
    </main>
  );
}
