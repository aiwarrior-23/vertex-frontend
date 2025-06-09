import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarS4 from "../../components/NavbarS4/NavbarS4";
import PageTitle from "../../components/pagetitle/PageTitle";
import Projects from "../../api/projects";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/logo-4.svg";
import VideoModal from "../../components/ModalVideo/VideoModal";

import shanti1 from "/public/images/varanasi-projects/shanti-1.jpeg";
import shanti2 from "/public/images/varanasi-projects/shanti-2.jpeg";
import adarsh1 from "/public/images/varanasi-projects/adarsh-1.jpeg";
import adarsh2 from "/public/images/varanasi-projects/asarsh-2.jpg";
import mangari1 from "/public/images/varanasi-projects/mangari-1.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";
import shantiLayout1 from "/public/images/varanasi-projects/shanti-layout-1.jpeg";
import shantiLayout2 from "/public/images/varanasi-projects/shanti-layout-2.jpeg";
import adarshLayout1 from "/public/images/varanasi-projects/adarsh-layout-1.jpeg";
const adarshLayout2Pdf = "/images/varanasi-projects/adarsh-layout-2.pdf";
import mangariLayout1 from "/public/images/varanasi-projects/mangari-layout-1.jpg";

const ProjectData = (props) => {
  // Add state for dialog/modal
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState(null);
  const [dialogPdf, setDialogPdf] = useState(null);

  return (
    <Fragment>
      <Navbar
        hclass={"wpo-site-header wpo-header-style-s11"}
        Logo={Logo}
        col1={"col-lg-3 col-md-3 col-3 d-lg-none dl-block"}
        col2={"col-lg-2 col-md-4 col-6"}
        col3={"col-lg-7 col-md-1 col-1"}
        col4={"col-lg-3 col-md-4 col-2"}
        margin={"-20%"}
      />

      <PageTitle pageTitle="Projects" pagesub={"Varanasi"} />
      <div style={{ height: "10px" }}></div>
      <section className="project-single-page">
        <div className="container-fluid">
          {/* <div className="project-image scroll-text-animation" data-animation="fade_from_bottom">
                        <Image src={ProjectData?.sing} alt="" />
                    </div> */}
          <div className="row align-items-center">
            <div className="col-lg-12  col-12">
              <div className="content">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Shanti Vihar Phase 1
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="solve-section"
        style={{ padding: 0, marginTop: "-10%" }}
      >
        <div className="container-fluid">
          <div className="image-wrap">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <div
                    className="image"
                    style={{
                      border: "2px solid black",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={shanti1} alt="" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-primary mt-3" onClick={() => { setDialogImage(shantiLayout1); setDialogOpen(true); }}>
                      View Site Layout
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <div
                    className="image"
                    style={{
                      border: "2px solid black",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={shanti2} alt="" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-primary mt-3" onClick={() => { setDialogImage(shantiLayout2); setDialogOpen(true); }}>
                      View Site Layout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "50px" }}></div>
      <section className="project-single-page">
        <div className="container-fluid">
          {/* <div className="project-image scroll-text-animation" data-animation="fade_from_bottom">
                        <Image src={ProjectData?.sing} alt="" />
                    </div> */}
          <div className="row align-items-center">
            <div className="col-lg-12  col-12">
              <div className="content">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Adarsh Nagar Phase 2
                </h2>
                {/* <p><span>M</span>odern Buildings Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has beening the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a good
                                    type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was a popularised in the
                                    1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id amet cyrium. Nulla
                                    thurg varius purus bibendum pellentesque eu sit nascetur vitae. Nibh tortor etrutnibh
                                    tincidunt tempor proin. Est placerat felis pellentesque temupus condimentum consectetur.
                                    Faucibus nunc pellentesque ac mus posuere aliquam mor augue orci. Egestas donec sit
                                    pellentesque lacus.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="solve-section"
        style={{ padding: 0, marginTop: "-10%" }}
      >
        <div className="container-fluid">
          {/* <div className="project-title">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <h2 className="scroll-text-animation" data-animation="fade_from_bottom">How We Solve
                                    The Critical Issues?</h2>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p className="scroll-text-animation" data-animation="fade_from_bottom">Simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled.</p>
                            </div>
                        </div>
                    </div> */}
          <div className="image-wrap">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <div
                    className="image"
                    style={{
                      border: "2px solid black",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={adarsh1} alt="" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-primary mt-3" onClick={() => { setDialogImage(adarshLayout1); setDialogOpen(true); }}>
                      View Site Layout
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <div
                    className="image"
                    style={{
                      border: "2px solid black",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={adarsh2} alt="" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-primary mt-3" onClick={() => { setDialogPdf(adarshLayout2Pdf); setDialogImage(null); setDialogOpen(true); }}>
                      View Site Layout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "50px" }}></div>
      <section className="project-single-page">
        <div className="container-fluid">
          {/* <div className="project-image scroll-text-animation" data-animation="fade_from_bottom">
                        <Image src={ProjectData?.sing} alt="" />
                    </div> */}
          <div className="row align-items-center">
            <div className="col-lg-12  col-12">
              <div className="content" style={{ width: "100%" }}>
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Gangapur Mangari
                </h2>
                {/* <p><span>M</span>odern Buildings Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has beening the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a good
                                    type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was a popularised in the
                                    1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id amet cyrium. Nulla
                                    thurg varius purus bibendum pellentesque eu sit nascetur vitae. Nibh tortor etrutnibh
                                    tincidunt tempor proin. Est placerat felis pellentesque temupus condimentum consectetur.
                                    Faucibus nunc pellentesque ac mus posuere aliquam mor augue orci. Egestas donec sit
                                    pellentesque lacus.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="solve-section"
        style={{ padding: 0, marginTop: "-10%" }}
      >
        <div className="container-fluid">
          {/* <div className="project-title">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <h2 className="scroll-text-animation" data-animation="fade_from_bottom">How We Solve
                                    The Critical Issues?</h2>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p className="scroll-text-animation" data-animation="fade_from_bottom">Simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled.</p>
                            </div>
                        </div>
                    </div> */}
          <div className="image-wrap" style={{ marginBottom: "1%" }}>
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <div
                    className="image"
                    style={{
                      border: "2px solid black",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={mangari1} alt="" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => { setDialogImage(mangariLayout1); setDialogOpen(true); }}
                    >
                      View Site Layout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dialog/Modal Implementation */}
        {dialogOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              zIndex: 9999,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                background: "#fff",
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                textAlign: "center",
                overflowY: "auto",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div style={{padding: "2rem 0 0 0", width: "100%", flex: 1}}>
                <h4>Site Layout</h4>
                {dialogImage && (
                  <Image src={dialogImage} alt="Site Layout" style={{maxWidth: "90vw", maxHeight: "80vh", height: "auto", marginBottom: "1rem"}} />
                )}
                {dialogPdf && (
                  <iframe
                    src={dialogPdf}
                    title="Site Layout PDF"
                    style={{ width: "90vw", height: "80vh", border: "none", marginBottom: "1rem" }}
                    allowFullScreen
                  />
                )}
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => { setDialogOpen(false); setDialogImage(null); setDialogPdf(null); }}
                style={{margin: "2rem auto"}}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectData;
