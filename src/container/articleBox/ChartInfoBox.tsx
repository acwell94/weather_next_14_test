import ArticleBoxTitle from "@/components/title/articleBox/ArticleBoxTitle";
import commonStyle from "@/container/articleBox/style/ArticleBoxCommon.module.css"
import RowChart from "@/components/chart/RowChart"

interface ChartInfo {
    title : string;
    labels : number[];
    chartData : number[];
}

const ChartInfoBox = (props: ChartInfo) => {
    const {title, labels, chartData} = props;
  return (
    <>
        <ArticleBoxTitle title={title}/>
        <article className={commonStyle.innerArticleContainer}>
            <RowChart labels={labels} chartData={chartData}/>
        </article>
    </>
  );
}

export default ChartInfoBox;