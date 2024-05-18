import style from "@/components/title/articleBox/ArticleBoxTitle.module.css"

interface ArticleBoxTitle {
    title : string;
}
const ArticleBoxTitle = (props :ArticleBoxTitle) => {
    const {title} = props
  return (
    <>
      <h2 className={style.innerArticleTitle}>{title}</h2>
    </>
  );
}

export default ArticleBoxTitle;

