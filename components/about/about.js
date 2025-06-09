import React from "react";
import VideoModal from "../ModalVideo/VideoModal";
import Link from 'next/link';
import CountUp from 'react-countup';
import abImg from '/public/images/home/h1.jpg';
import abImg2 from '/public/images/home/h2.jpg';
import RollingText from "../RollingText/RollingText";
import Image from "next/image";

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section id="about" className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="content">
                    <h2 className="scroll-text-animation" data-animation="fade_from_right">About Vertex Inn</h2>
                    <p className="fade_bottom">
  Vertex Inn Developer Pvt. Ltd., based in Varanasi, is a young and dynamic real estate company dedicated to building better living spaces for modern families. Known for our quality construction, timely delivery, and customer-centric approach, we are committed to delivering not just homes, but meaningful experiences that inspire trust and satisfaction.
</p>

                    <div className="about-btn ">
                        <Link onClick={ClickHandler} href="/about" className="theme-btn">
                            <RollingText text={'Discover More'}/>
                        </Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModal />
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>
                    <div className="about-funfact fade_bottom">
                        <h3><span><CountUp end={23} enableScrollSpy /></span><span className="icon">+</span></h3>

                        <h4>Years Of <br />
                            Experience</h4>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="image-1  poort-in-right">
                    <Image src={abImg} alt="" />
                </div>
                <div className="image-2 poort-in-right">
                    <Image src={abImg2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;
