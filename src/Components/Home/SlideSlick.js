import React from 'react';
import Slider from 'react-slick';
import './SlideSlick.scss';
import slide4 from '../../../src/assets/img/main(2)-mini1.png';
import slide5 from '../../../src/assets/img/main(2)-mini4.png';
import slide6 from '../../../src/assets/img/main(2)-mini5.png';
import slide7 from '../../../src/assets/img/main(2)-mini6.png';

const SlideSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <div className='slick-warp'>
      <Slider {...settings}>
        <div className='slick-content'>
          <img src={slide4} />
          <h1>1인가구를 위한 다양한 요리 정보</h1>
        </div>
        <div className='slick-content'>
          <img src={slide5} />
          <h1>식단 정보 및 레시피 상세 제공</h1>
        </div>
        <div className='slick-content'>
          <img src={slide6} />
          <h1>검색 기능을 통한 1인가구 편의시설 제공</h1>
        </div>
        <div className='slick-content'>
          <img src={slide7} />
          <h1>로그인 기능을 이용한 다양한 정보 제공</h1>
        </div>
        <div className='slick-content'>
          <img src={slide5} />
        </div>
        {/* <div className='slick-content'>
          <img src={slide3} />
        </div> */}
      </Slider>
    </div>
  );
};

export default SlideSlick;
