import Image from 'next/image';
import style from '@/components/weatherInfo/style/TodayDetailInfo.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
interface TodayDetailInfo {
  id: string;
  title: string;
  value: string | number;
  image: string;
}

const TodayDetailInfo = (props: TodayDetailInfo) => {
  const { id, title, value, image } = props;
  const detailImage = `/icons/weather/${image}.svg`;
  const [cmtData, setCmtData] = useState<any>('');

  const getData = async () => {
    try {
      const response = await axios.get('/json/comment/weatherCmt.json');
      const cmt = response.data;
      if (id == 'temp' || id == 'feel') {
        if (Number(value) <= -1) {
          setCmtData(`${cmt.temp['0']}`);
        } else if (Number(value) <= 20) {
          setCmtData(`${cmt.temp['1']}`);
        } else {
          setCmtData(`${cmt.temp['3']}`);
        }
      } else if (id == 'uv') {
        if (Number(value) <= 2) {
          setCmtData(`${cmt.uv['0']}`);
        } else if (Number(value) <= 4) {
          setCmtData(`${cmt.uv['1']}`);
        } else if (Number(value) <= 6) {
          setCmtData(`${cmt.uv['2']}`);
        } else {
          setCmtData(`${cmt.uv['3']}`);
        }
      } else if (id == 'wind') {
        if (Number(value) <= 0) {
          setCmtData(`${cmt.wind['0']}`);
        } else if (Number(value) <= 2) {
          setCmtData(`${cmt.wind['1']}`);
        } else if (Number(value) <= 4) {
          setCmtData(`${cmt.wind['2']}`);
        } else if (Number(value) <= 6) {
          setCmtData(`${cmt.wind['3']}`);
        } else {
          setCmtData(`${cmt.wind['4']}`);
        }
      }
      // setCmtData(response.data);
    } catch (error) {
      alert('조회 에러');
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className={style.container}>
      <div className={style.detailTitle}>{title}</div>
      <div className={style.valueContainer}>
        <div className={style.detailValue}>{value}</div>
        <div className={style.detailIcon}>
          <Image src={detailImage} fill alt={title} />
        </div>
      </div>
      <div className={style.detailCmt}>{cmtData}</div>
    </div>
  );
};

export default TodayDetailInfo;
