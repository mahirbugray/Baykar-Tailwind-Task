import { useRef } from 'react';
import { slides } from "../Constant/constant";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import leftBtn from "../assets/images/leftBtn.png"
import rightBtn from "../assets/images/rightBtn.png"
import 'swiper/css';
import 'swiper/css/pagination';

const Section5Slider = () => {
    const swiperRef = useRef(null);
    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <section className="container mx-auto bg-bigYellow bg-local bg-no-repeat bg-[center_bottom_6.5rem] max-md:bg-[center_top_9rem] bg-[length:95%_55%] max-md:bg-[length:100%_50%]">
            <div className='w-full p-20 max-md:px-4  flex flex-col gap-20 max-md:gap-8 overflow-x-hidden'>
                <div className="relative z-20 w-full flex justify-center md:justify-between items-center max-lg:text-center">
                    <h1 className="font-extrabold max-md:font-bold text-[56px] max-md:text-[32px] w-full">Because they love us</h1>
                    <div className="flex gap-6 max-lg:hidden">
                        <button onClick={slidePrev} >
                            <img src={leftBtn} alt="left" />
                        </button>
                        <button onClick={slideNext}>
                            <img src={rightBtn} alt="right" />
                        </button>
                    </div>
                </div>
                <div className="min-h-[350px] max-md:flex max-md:gap-4">
                    <Swiper className='absolute z-20 left-0 w-full py-4'
                        slidesPerView={3.5} spaceBetween={30} centeredSlides={true}
                        loop={true} pagination={{ clickable: true }} modules={[Navigation]} freeMode={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            350: {
                                slidesPerView: 1.3,
                                spaceBetween: 25,
                            },
                            440: {
                                slidesPerView: 2,
                                spaceBetween: 100,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1023: {
                                slidesPerView: 2.5,
                                spaceBetween: 100,
                            },
                            1279: {
                                slidesPerView: 3.7,
                                spaceBetween: 50,
                            },
                            1600: {
                                slidesPerView: 5,
                                spaceBetween: 120,
                            }

                        }}
                        navigation={true} ref={swiperRef}>
                        {
                            slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col bg-white gap-2 md:gap-8 p-6 md:p-8 w-[300px] md:w-[400px] shadow-lg md:min-h-[350px] rounded-[20px]'>
                                        <div className='py-4 flex items-center gap-2 text-[#475569] text-2xl font-bold'>
                                            <img src={slide.slideLogo} alt={slide.title} />
                                            <h1>{slide.title}</h1>
                                        </div>
                                        <div className=' flex items-center md:max-w-[320px] '>
                                            <p className='text-2xl max-md:text-base font-normal md:h-[160px]  md:line-clamp-5 line-clamp-4 '>{slide.text}</p>
                                        </div>
                                        <div className='pt-4 gap-4 flex items-center'>
                                            <img src={slide.userImg} alt={slide.userName} />
                                            <div className='flex flex-col'>
                                                <h6 className='text-lg'>{slide.userName}</h6>
                                                <p className='text-[#475569]'>{slide.userJob}</p>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default Section5Slider