import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";

import Topimage from '/public/images/service/service-bg.jpg'
import Image from 'next/image';

const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid p-0">
                <div className="service-top">
                    <div className="image">
                        <Image src={Topimage} alt="service-bg" />
                    </div>
                    <div className="content">
                        <h2 className="fade_bottom">Creating Landmark Spaces, One Blueprint at a Time</h2>
                        <p className="fade_bottom">Cras nisl nibh commodo ullamcorper aliquet. Gravida orci laoreet eros
                            platea curabitur
                            scelerisque quis cras scelerisque. Fermentum mus et viverra purus nibh fusce integer. Aenean
                            cursus quis pharetra vitae vel sit ac malesuada. </p>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((service, item) => (
                            <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={item}>
                                <div className="service-card">
                                    <div className="icon">
                                        <Image src={service.Icon} alt="icon" />
                                    </div>
                                    <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;

