import ArticleBoxTitle from "@/components/title/articleBox/ArticleBoxTitle";
import commonStyle from "@/container/articleBox/style/ArticleBoxCommon.module.css"
import RowChart from "@/components/chart/RowChart"

interface ChartInfo {
    labels : number[];
    chartData : number[];
}

const ChartInfoBox = (props: ChartInfo) => {
    const {labels, chartData} = props;
  return (
    <>
        <ArticleBoxTitle title="test"/>
        <article className={commonStyle.innerArticleContainer}>
            <RowChart labels={labels} chartData={chartData}/>
        </article>
    </>
  );
}

export default ChartInfoBox;