import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WeatherSliderElement from './sliderElements/WeatherSliderElement';

interface SliderInfo {
  sliderData: number[];
  sliderWeatherSummaryData: string[];
}

const Slider = (props: SliderInfo) => {
  const { sliderData, sliderWeatherSummaryData } = props;
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <div className="swiper-container">
      <Swiper
        freeMode={true}
        spaceBetween={10} // 슬라이스 사이 간격
        slidesPerView={3.5} // 보여질 슬라이스 수
        breakpoints={{
          360: {
            slidesPerView: 5.5,
          },
        }}
        nested={true}
        allowTouchMove={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <WeatherSliderElement
              weatherSummary={sliderWeatherSummaryData[index]}
              temp={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
