import React from "react";
import MetaTag from "../components/MetaTag";
import { TextArea } from "@adobe/react-spectrum";
import Wording from "../components/Wording";
import "bootstrap/js/src/collapse.js";

import Styles from "../css/Main.css";
const Main = () => {
  return (
    <>
      <MetaTag />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            NAGA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="backgroundImg1 py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8">
              <div className="text-center my-5">
                <h1 className="display-10 fw-bolder text-white mb-4">
                  여행지를 선택해주세요.
                </h1>
                <p className="lead text-white-50 mb-4">
                  {/* Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit! */}
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-5"
                    href="#features"
                  >
                    해외
                  </a>
                  <a className="btn btn-primary btn-lg px-4" href="#!">
                    국내
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-2 border-bottom opacity-100" id="features">
        <div className="container px-5 my-5 ">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="h2 fw-bolder">위시리스트</h2>
              <p className="h5">
                The real voyage of discovery consists not in seeking new
                landscapes but in having new eyes.
              </p>
              <p className="text-decoration-none text">
                -마르셀 푸르스트(Marcel Proust)-
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="h4 fw-bolder">365일 휴무</h2>
              <p>
                저희 사이트는 365일 휴무이므로 문의를 보내지 마시길 바랍니다.
              </p>
              <a className="text-decoration-none" href="#!">
                보내지마세요
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <h2 className="h4 fw-bolder">매일 개같이 유기한다.</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-2 border-bottom">
        <div className="container px-5 my-2 px-5">
          <div className="text-center mb-4">
            <h2 className="fw-bolder fs-1">오늘의 여행 글귀</h2>
            <p className="lead mb-0"></p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-4">
                <Wording />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
