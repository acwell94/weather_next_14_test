import RowChart from '@/components/chart/RowChart';
import ArticleBoxTitle from '@/components/title/articleBox/ArticleBoxTitle';
import TodayDetailInfo from '@/components/weatherInfo/TodayDetailInfo';
import commonStyle from '@/container/articleBox/style/ArticleBoxCommon.module.css';
import style from '@/container/articleBox/style/TodayDetailInfoBox.module.css';
interface TodaySummary {
  title: string;
  labels: number[];
  chartData: number[];
  detailData: {
    id: string;
    title: string;
    value: string | number;
    image: string;
  }[];
}

const TodaySummaryInfoBox = (props: TodaySummary) => {
  const { title, labels, chartData, detailData } = props;
  return (
    <div>
      <ArticleBoxTitle title={title} />
      <div className={commonStyle.innerArticleContainer}>
        <RowChart labels={labels} chartData={chartData} />
      </div>
      <div className={style.TodayDetailInfoBoxDetailContainer}>
        {detailData.map((el, i) => (
          <TodayDetailInfo
            key={i}
            id={el.id}
            title={el.title}
            value={el.value}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaySummaryInfoBox;
