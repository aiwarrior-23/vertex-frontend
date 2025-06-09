import React from "react";
import Link from "next/link";
import { Navigation, Pagination, A11y, Autoplay } from  'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Slide6 from '/public/images/slider/hero-text.jpg';


/* heroTeam */
import heroTeam from '/public/images/team/hero-team/1.jpg'
import heroTeam2 from '/public/images/team/hero-team/2.jpg'
import heroTeam3 from '/public/images/team/hero-team/3.jpg'
import heroTeam4 from '/public/images/team/hero-team/4.jpg'
import arrow from '/public/images/down-arrow.svg'
import Image from "next/image";



const Hero = () => {

  

    return (
        <section className="wpo-hero-slider">
            <Swiper className="swiper-container" modules={[Navigation, A11y, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'fraction',
                    renderFraction: (currentClass, totalClass) => {
                        return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
                    },
                }}


            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{
                        backgroundImage: `url(${'/images/home/h3.jpg'})`
                    }}>
                        {/* <div className="container">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Innovation in Every Line, Strength <span><Image
                                        src={Slide6} alt="" /></span> in Every
                                        Build</h2>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/home/slider_3.png'})` }}>
                        {/* <div className="container">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Innovation in Every Line, Strength <span><Image
                                        src={Slide6} alt="" /></span> in Every
                                        Build</h2>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/home/slider_2.png'})` }}>
                        {/* <div className="container">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Innovation in Every Line, Strength <span><Image
                                        src={Slide6} alt="" /></span> in Every
                                        Build</h2>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
            {/* <div className="hero-team">
                <ul>
                    <li><Image src={heroTeam} alt="hero-team" /></li>
                    <li><Image src={heroTeam2} alt="hero-team" /></li>
                    <li><Image src={heroTeam3} alt="hero-team" /></li>
                    <li><Image src={heroTeam4} alt="hero-team" /></li>
                    <li>
                        <Link href="/">
                            <svg width="32" height="8" viewBox="0 0 32 8" fill="none">
                                <rect width="8" height="8" rx="4" fill="white" />
                                <rect x="12" width="8" height="8" rx="4" fill="white" />
                                <rect x="24" width="8" height="8" rx="4" fill="white" />
                            </svg>
                        </Link>
                    </li>
                </ul>
                <span>Meet Our Team</span>
            </div> */}
            <AnchorLink href="#about" className="scroll-btn">
                <span>Scroll For More</span>
                <div className="scroll-befor">
                    <Image src={arrow} alt="" />
                </div>
            </AnchorLink>

        </section>
    );
};

export default Hero;
