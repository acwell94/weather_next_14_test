import Image from 'next/image';
import style from '@/components/article/style/News.module.css';
interface News {
  id: string;
  title: string;
  img: string;
}

const News = (props: News) => {
  const { id, title, img } = props;
  return (
    <div className={style.newsArticleContainer}>
      <div className={style.newsArticleImgContainer}>
        <Image src={img} alt={title} fill objectFit="cover" />
      </div>
      <div className={style.newsTitle}>{title}</div>
    </div>
  );
};

export default News;
