import Image from "next/image";
import style from "@/styles/page/main/today.module.css"
import TodayInfoBox from "@/container/articleBox/TodayInfoBox";

export default function Home() {
  return (
    <main className={style.main}>
      <article className={style.divideArticleContainer}>
        <TodayInfoBox title="오늘의 날씨" location="고양시 일산서구 대화동" temp="25" weatherIcon="sun" weatherSummary="맑음" maxTemp="28" minTemp="21"/>
      </article>
      <article className={style.divideArticleContainer}>
        <section className={style.innerArticleContainer}>여기는 사이드바</section>
      </article>
    </main>
  );
}
