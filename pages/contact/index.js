import React, { Fragment } from "react";
import NavbarS4 from "../../components/NavbarS4/NavbarS4";
import dynamic from "next/dynamic";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/logo-4.svg";
import Contactpage from "../../components/Contactpage/Contactpage";
import Navbar from '../../components/Navbar/Navbar'
import TopbarS2 from "../../components/TopbarS2/TopbarS2";

const ScrollTextAnimation = dynamic(
  () => import("../../components/ScrollTextAnimation/ScrollTextAnimation"),
  { ssr: false }
);

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                                  col2={'col-lg-2 col-md-4 col-6'}
                                  col3={'col-lg-7 col-md-1 col-1'}
                                  col4={'col-lg-3 col-md-4 col-2'} 
                                  margin={'-20%'} />
    <TopbarS2 />
      <PageTitle pageTitle={""} pagesub={"Contact Us"} />
      <ScrollTextAnimation />
      <Contactpage />
      <section className="wpo-contact-map-section">
        <h2 className="hidden">Contact map</h2>
        <div className="wpo-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.09799758684!2d82.9087065233239!3d25.32089492070588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1749448968822!5m2!1sen!2sin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
