import React from 'react'
import Link from 'next/link';

// images
import Logo from '/public/images/logo-3.svg' 
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="blog" />
                                </div>
                                <p>Vertexinn Developer Pvt.Ltd. is one of the India's leading real estate company, having developed approximately many apartment and building residential, commercial and other business segments and with operations in all over india. </p>
                                <div className="social-widget">
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} href="#"><i className="ti-facebook"></i></Link>
                                            <Link onClick={ClickHandler} href="#"><i className="ti-twitter-alt"></i></Link>
                                            <Link onClick={ClickHandler} href="#"><i className="ti-linkedin"></i></Link>
                                            <Link onClick={ClickHandler} href="#"><i className="ti-instagram"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <ul>
                                    <li>vertexinn07@gmail.com</li>
                                    <li>+(91) 8853554077</li>
                                    <li>House No. S 2/346, A-1, Gate No.3 </li>
                                    <li> Patrakarpuram colony, Gilat Bazar, Varanasi-221002 (Uttar Pradesh)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/about"><span className="rolling-text">About Us</span> </Link></li>
                                    <li><Link onClick={ClickHandler} href="/services"><span className="rolling-text">Services</span> </Link></li>
                                    <li><Link onClick={ClickHandler} href="/projects"><span className="rolling-text">Projects</span></Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog"><span className="rolling-text">Blog</span> </Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact"><span className="rolling-text">Contact</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <ul>
                                    <li>Varanasi</li>
                                    <li>Ghazipur</li>
                                    <li>Lucknow</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2025 Vertex Inn Developer Pvt. Ltd. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul className="right">
                                <li><Link onClick={ClickHandler} href="/privacy"><span className="rolling-text">privacy & Policy</span> </Link></li>
                                <li><Link onClick={ClickHandler} href="/terms"><span className="rolling-text">Terms</span></Link></li>
                                <li><Link onClick={ClickHandler} href="/about"><span className="rolling-text">About us</span></Link></li>
                                <li>
                                    <a
                                        href="http://localhost:3000/login"
                                        onClick={e => {
                                            ClickHandler();
                                            // Optionally, remove the next line if you want to open in new tab
                                            // e.preventDefault();
                                        }}
                                    >
                                        <span className="rolling-text">Login</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


