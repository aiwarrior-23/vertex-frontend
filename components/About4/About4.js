import React from 'react';
import Link from 'next/link';
import VideoModalS2 from '../ModalVideoS2/ModalVideoS2';
import CountUp from 'react-countup';

const About4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section id="about" className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="content">
                    <div className="title fade_bottom">
                        <h2>
                            <span className="bg-text">a</span>
                            <span>About
                            </span> <br />
                            Vertex Inn
                        </h2>
                    </div>
                    <p className="fade_bottom">Vertexinn Developer Pvt.Ltd. is a young & dynamic company with a goal to devote significantly in giving a new world to your family .We are known for the quality of our services. The customers count on us not just for their splendid homes but also for the pleasant experience of dealing. <br /><br />
                        The company has established itself as one of the best Real-estate company in Lucknow. Vertexinn Developer Pvt.Ltd. has been synonymous with unmatched quality and reliability in the project its implementation and has been the reason for the growing trust of its ever-increasing customer base. Since its inception, Vertexinn Developer Pvt.Ltd. has always aimed at setting standards by providing quality and prompt service. The satisfied customers have been a strength to them, which in turn prompts the company to go ahead with its projects and be a winner.</p>
                    <div className="about-btn ">
                        <Link onClick={ClickHandler} href="/about" className="theme-btn"> <span className="rolling-text">Discover More</span> </Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModalS2 />
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>

                </div>
                <div className="funfact fade_bottom">
                    <div className="item">
                        <h2><span><CountUp end={100} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>ROW HOUSES</h3>
                    </div>
                    <div className="item">
                        <h2><span><CountUp end={40} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>VILLAS</h3>
                    </div>
                    <div className="item">
                        <h2><span><CountUp end={30} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>ROW HOUSES</h3>
                    </div>
                    <div className="item">
                        <h2><span><CountUp end={40} enableScrollSpy /></span> <span className="icon">+</span></h2>
                        <h3>APARTMENTS</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About4;