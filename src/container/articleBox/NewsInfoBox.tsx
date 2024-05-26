import News from '@/components/article/News';
import ArticleBoxTitle from '@/components/title/articleBox/ArticleBoxTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface NewsInfoBox {
  title: string;
  category: string;
}
interface NewsType {
  id: string;
  title: string;
  img: string;
}
const NewsInfoBox = (props: NewsInfoBox) => {
  const { title, category } = props;

  const [newsData, setNewsData] = useState<Array<NewsType>>();

  const getNewsData = async (category: string) => {
    try {
      const response = await axios.get(`/json/article/${category}Article.json`);
      setNewsData(response.data);
    } catch (err) {
      console.log('error');
    }
  };

  useEffect(() => {
    getNewsData(category);
  }, []);
  console.log(newsData);
  return (
    <div>
      <ArticleBoxTitle title={title} />
      <div style={{ border: '1px solid grey', borderRadius: '0.6rem' }}>
        {newsData?.map((el) => (
          <News key={el.id} id={el.id} title={el.title} img={el.img} />
        ))}
      </div>
    </div>
  );
};

export default NewsInfoBox;
