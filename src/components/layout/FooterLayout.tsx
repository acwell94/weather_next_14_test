import Image from 'next/image';
import style from '@/styles/layout/layout.module.css';
export default function FooterLayout() {
  return (
    <nav className={style.footer}>
      <div className={style.footerWrapper}>
        <div className={style.footerContainer}>
          <div className={style.footerIconImgContainer}>
            <Image src="/icons/footer/today.svg" alt="today" fill />
          </div>
          <div className={style.footerContentsName}>Today</div>
        </div>
        <div className={style.footerContainer}>
          <div className={style.footerIconImgContainer}>
            <Image src="/icons/footer/time.svg" alt="today" fill />
          </div>
          <div className={style.footerContentsName}>Hourly</div>
        </div>
        <div className={style.footerContainer}>
          <div className={style.footerIconImgContainer}>
            <Image src="/icons/footer/calender.svg" alt="today" fill />
          </div>
          <div className={style.footerContentsName}>Weekly</div>
        </div>
      </div>
    </nav>
  );
}
