import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from '/public/images/testimonial/img-1.jpg'
import testimonial2 from '/public/images/testimonial/img-2.jpg'
import testimonial3 from '/public/images/testimonial/img-3.jpg'
import testimonial4 from '/public/images/testimonial/new-testimonial.png'
import Quote from '/public/images/testimonial/quote.svg'
import Image from "next/image";


const testimonials = [
    {
        id: '01',
        Des: "Vertexinn Developer Pvt.Ltd. has all the necessary govt. accreditations, which really helped me in making a decision to invest in Vertexinn Developer Pvt.Ltd. , as I knew my investment would be safe and protected.",
        Title: 'Sailesh Singh',
        image: testimonial4,
    },
    {
        id: '02',
        Des: "Vertexinn Developer Pvt.Ltd. has excellent surroundings with green parks and modern amenities, which makes it a blessing for children and the elderly. ",
        Title: 'Saurabh Verma',
        image: testimonial4,
    },
    {
        id: '03',
        Des: "I could have never thought of owning a house in Lucknow at such a young age, would like to thank Vertexinn Developer Pvt.Ltd. for developing such affordable apartments with premium facilities. ",
        Title: 'Kaushal Sharma',
        image: testimonial4,
    },


]

const Testimonial = (props) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    }


    return (
        <section className={"" + props.hclass}>
            <Slider {...settings} className="testimonial-slider">
                {testimonials.slice(0, 3).map((testimonial, item) => (
                    <div className="item" key={item}>
                        <div className="bg-image">
                            <Image src={testimonial.image} alt="testimonial" />
                        </div>
                        <div className="content fade_bottom">
                            <div className="icon">
                                <Image src={Quote} alt="quote" />
                            </div>
                            <h3>{testimonial.Des}</h3>
                            <h4>{testimonial.Title}</h4>
                            <span>{testimonial.Sub}</span>
                        </div>
                    </div>
                ))}

            </Slider>
        </section>
    );
}

export default Testimonial;







