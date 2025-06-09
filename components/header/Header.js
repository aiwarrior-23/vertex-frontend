import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";

/* Homefullviewimage */
import Home1 from "/public/images/home/modern-architecture.jpg";
import Home2 from "/public/images/home/classic-architecture.jpg";
import Home3 from "/public/images/home/modern-architecture-s2.jpg";
import Home4 from "/public/images/home/classic-architecture-dark.jpg";
import Home5 from "/public/images/home/classic-interior-design.jpg";
import Home6 from "/public/images/home/classic-interior-design-s2.jpg";
import Home7 from "/public/images/home/classic-interior-design-dark.jpg";
import Home8 from "/public/images/home/renovation.jpg";
import Home9 from "/public/images/home/modern-woocommerce.jpg";
import Home10 from "/public/images/home/minimal-woocommerce-s2.jpg";
import Home11 from "/public/images/home/urban-planning.jpg";
import Home12 from "/public/images/home/costruction.jpg";
import Home13 from "/public/images/home/costruction-s2.jpg";
import Home14 from "/public/images/home/construction-profile.jpg";
import Home15 from "/public/images/home/frelancer-architect.jpg";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header id="header">
      <div className={props.hclass || ""}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center g-0">
              <div className={props.col1 || ""}>
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className={props.col2 || ""}>
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/home"
                  >
                    <Image src={props.Logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className={props.col3 || ""}>
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                  style={{
                    width: "200%",
                    marginLeft: props.margin || 0
                  }}
                >
                  <button className="menu-close" type="button">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children image-style-item">
                      <Link onClick={ClickHandler} href="/home">
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#">
                        About Us
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/about">
                            About Company
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/chairman-message">
                            Chairman Message
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#">
                        Project
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/shanti-vihar">
                            Shanti Vihar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/proposed-layout">
                            Proposed Layout
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/plot-availability">
                        Plot Availability
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/enquiry">
                        Enquiry
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/career">
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="http://localhost:3000/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
