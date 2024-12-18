// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const PopularBooks = () => {
    return (
        <div>
          <h1 className='text-4xl font-bold mb-10'>Discover Your Next Book</h1>
             <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link><img src="https://i.ibb.co.com/W0tb8G1/girl-reading-intently-stockcake.jpg" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src="https://i.ibb.co.com/4V6fbpd/girl-reading-book-library-sitting-floor-girl-library-91660-8.jpg" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src="https://i.ibb.co.com/PGSFcpR/4897-thumb-360-0.jpg" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src="https://i.ibb.co.com/W0tb8G1/girl-reading-intently-stockcake.jpg" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src="https://i.ibb.co.com/W0tb8G1/girl-reading-intently-stockcake.jpg" alt="" /></Link>
        </SwiperSlide>
      ...
             </Swiper>
        </div>
    );
};

export default PopularBooks;