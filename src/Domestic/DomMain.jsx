import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Styles from "./css/style.css";
import { Link } from "react-router-dom";
import owl from "./lib/owlcarousel/assets/owl.carousel.min.css";
import ScrollTop from "../components/ScrollTop";
import DomMetaTag from "./components/DomMetaTag";
import axios from "axios";
import "bootstrap/js/src/collapse.js";
import DomSlick from "./components/DomSlick";
const DomMain = () => {
  return (
    <div>
      <DomMetaTag />
      <Helmet>
        <title>당신의 여행 도우미 NAGA | DOMHOME</title>
      </Helmet>

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i className="fa fa-1x fa-plane text-blue pr-2"></i>NAGA
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              <Link to="/submain" className="nav-item nav-link active">
                Home
              </Link>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/service" className="nav-item nav-link">
                Service
              </a>
              <a href="/price" className="nav-item nav-link">
                Price
              </a>
              <div className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              {/* <a href="contact.html" className="nav-item nav-link">
                Contact
              </a> */}
            </div>
            <Link
              to="/login"
              className="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
      <div
        className="jumbotron jumbotron-fluid mb-5"
        style={{
          // backgroundImage:
          //   "url(https://mblogthumb-phinf.pstatic.net/MjAxNzA2MTlfNDgg/MDAxNDk3ODAwMTMzNDIx.GF4RP0mOJpPcemv2CX2cA8b08L23eJ0VFpIKqpAw7jIg.G2-7h3-G5PArRS2WO9MCvAvzFibyHi0M0KJb8r9hTeog.JPEG.kusshand_official/3.jpg?type=w800)",
          backgroundSize: "100%",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white mb-4">국내 (Domestic)</h1>

          <div className="mx-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px" }}
                placeholder="검색어를 입력해주세요"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-3">검색</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DomSlick />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Services
            </h6>
            <h1 className="mb-4">Best Logistic Services</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-plane text-dark pr-3"></i>
                <h6 className="text-white font-weight-medium m-0">항공편</h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="/">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                <h6 className="text-white font-weight-medium m-0">배편</h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="/">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                <h6 className="text-white font-weight-medium m-0">
                  Land Transport
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="/">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-store text-dark pr-3"></i>
                <h6 className="text-white font-weight-medium m-0">
                  Cargo Storage
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              가격비교
            </h6>
            <h1 className="mb-4">Affordable Pricing Packages</h1>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="bg-secondary">
                <div className="text-center p-4">
                  <h1 className="display-4 mb-0">
                    <small
                      className="align-top text-muted font-weight-medium"
                      style={{ fontSize: "22px", lineHeight: "45px" }}
                    >
                      $
                    </small>
                    49
                    <small
                      className="align-bottom text-muted font-weight-medium"
                      style={{ fontSize: "16px;", lineHeight: "40px" }}
                    >
                      /Mo
                    </small>
                  </h1>
                </div>
                <div className="bg-primary text-center p-4">
                  <h3 className="m-0">Basic</h3>
                </div>
                <div className="d-flex flex-column align-items-center py-4">
                  <p>HTML5 & CSS3</p>
                  <p>Bootstrap 4</p>
                  <p>Responsive Layout</p>
                  <p>Compatible With All Browsers</p>
                  <Link to="/" className="btn btn-primary py-2 px-4 my-2">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="bg-secondary">
                <div className="text-center p-4">
                  <h1 className="display-4 mb-0">
                    <small
                      className="align-top text-muted font-weight-medium"
                      style={{ fontSize: "22px", lineHeight: "45px" }}
                    >
                      $
                    </small>
                    99
                    <small
                      className="align-bottom text-muted font-weight-medium"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      /Mo
                    </small>
                  </h1>
                </div>
                <div className="bg-primary text-center p-4">
                  <h3 className="m-0">Premium</h3>
                </div>
                <div className="d-flex flex-column align-items-center py-4">
                  <p>HTML5 & CSS3</p>
                  <p>Bootstrap 4</p>
                  <p>Responsive Layout</p>
                  <p>Compatible With All Browsers</p>
                  <Link to="/" className="btn btn-primary py-2 px-4 my-2">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="bg-secondary">
                <div className="text-center p-4">
                  <h1 className="display-4 mb-0">
                    <small
                      className="align-top text-muted font-weight-medium"
                      style={{ fontSize: "22px", lineHeight: "45px" }}
                    >
                      $
                    </small>
                    149
                    <small
                      className="align-bottom text-muted font-weight-medium"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      /Mo
                    </small>
                  </h1>
                </div>
                <div className="bg-primary text-center p-4">
                  <h3 className="m-0">Business</h3>
                </div>
                <div className="d-flex flex-column align-items-center py-4">
                  <p>HTML5 & CSS3</p>
                  <p>Bootstrap 4</p>
                  <p>Responsive Layout</p>
                  <p>Compatible With All Browsers</p>
                  <Link to="/" className="btn btn-primary py-2 px-4 my-2">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Delivery Team
            </h6>
            <h1 className="mb-4">Meet Our Delivery Team</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src={require("../Domestic/img/team-1.jpg")}
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src={require("../Domestic/img/team-2.jpg")}
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src="img/team-3.jpg" alt="" />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src="img/team-4.jpg" alt="" />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Testimonial
            </h6>
            <h1 className="mb-4">Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="position-relative bg-secondary p-4">
              <i
                className="fa fa-3x fa-quote-right text-primary position-absolute"
                style={{ top: "-6px", right: "0" }}
              ></i>
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-1.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                clita lorem. Dolor ipsum sanct clita
              </p>
            </div>
            <div className="position-relative bg-secondary p-4">
              <i
                className="fa fa-3x fa-quote-right text-primary position-absolute"
                style={{ top: "-6px", right: "0" }}
              ></i>
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-2.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                clita lorem. Dolor ipsum sanct clita
              </p>
            </div>
            <div className="position-relative bg-secondary p-4">
              <i
                className="fa fa-3x fa-quote-right text-primary position-absolute"
                style={{ top: "-6px", right: "0" }}
              ></i>
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-3.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                clita lorem. Dolor ipsum sanct clita
              </p>
            </div>
            <div className="position-relative bg-secondary p-4">
              <i
                className="fa fa-3x fa-quote-right text-primary position-absolute"
                style={{ top: "-6px", right: "0" }}
              ></i>
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid rounded-circle"
                  src="img/testimonial-4.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <div className="ml-3">
                  <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                  <small>- Profession</small>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                clita lorem. Dolor ipsum sanct clita
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Blog
            </h6>
            <h1 className="mb-4">Latest From Blog</h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    bottom: "-30px",
                    right: "30px",
                  }}
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary">
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      // style="width: 40px; height: 40px;"
                      src="img/user.jpg"
                      alt=""
                    />
                    <a className="text-muted ml-2" href="/">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary"></i>
                    <a className="text-muted ml-2" href="/">
                      Web Design
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">
                  Kasd tempor diam sea justo dolor
                </h4>
                <p>
                  Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                  dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                  lorem sea sed diam est lorem magna
                </p>
                <a
                  className="border-bottom border-primary text-uppercase text-decoration-none"
                  href="/"
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  // style="width: 60px; height: 60px; bottom: -30px; right: 30px;"
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary">
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      // style="width: 40px; height: 40px;"
                      src="img/user.jpg"
                      alt=""
                    />
                    <a className="text-muted ml-2" href="/">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary"></i>
                    <a className="text-muted ml-2" href="/">
                      Web Design
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">
                  Kasd tempor diam sea justo dolor
                </h4>
                <p>
                  Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                  dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                  lorem sea sed diam est lorem magna
                </p>
                <a
                  className="border-bottom border-primary text-uppercase text-decoration-none"
                  href="/"
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New
                  York, USA
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-social mr-2" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Our Services
                  </a>
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Pricing Plan
                  </a>
                  <a className="text-white" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "#3E3E4E" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <Link to="/">Your Site Name</Link>. All Rights Reserved.
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button>
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
};

export default DomMain;
