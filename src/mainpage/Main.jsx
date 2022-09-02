import React from "react";
import MetaTag from "../components/MetaTag";
import Wording from "../components/Wording";
import "bootstrap/js/src/collapse.js";

import Styles from "../css/Main.css";
const Main = () => {
  return (
    <>
      <MetaTag />
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-opacity-75">
        <div className="container px-5">
          <a className="navbar-brand fs-4 fw-bold" href="#!">
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
                <a className="nav-link active text-dark fw-bold" aria-current="page" href="#!">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#!">
                  Sign Up
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
                <h1 className="display-10 fw-bolder text-white mb-5">
                  여행지를 선택해주세요
                </h1>
                
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-5"
                    href="#!"
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
              <h2 className="h4 fw-bolder">위시리스트</h2>
              <p>
                원하는 관광지 및 숙소, 맛집, 렌트카 등을 사용자가 직접 선택하고 관리할 수 있는 시스템을 제공합니다.
              </p>
              <a className="text-decoration-none" href="https://www.op.gg/summoners/kr/%ED%9B%88%EC%88%98%EC%A1%B0%EA%B8%88%EB%A7%8C" target="_blank" rel="noreferrer">
                훈수조금만 주세요.... 저 브론즈임...
                <i className="bi bi-arrow-right"></i>
              </a>  
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="h4 fw-bolder">365일 휴무</h2>
              <p>
                저희 사이트는 365일 휴무이므로 문의를 보내지 마시길 바랍니다.
              </p>
              <a className="text-decoration-none" href="https://www.epeople.go.kr/nep/pttn/pttnOnln/PttnOnlnWrtnInfo.npaid" target="_blank" rel="noreferrer">
                보내면 신고함 ㅅㄱ
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <h2 className="h4 fw-bolder">방문자</h2>
              <p>
                방문자 수 google 애널리스틱 이용해서 보여주면 될 것 같아요.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-2">
        <div className="container px-5 my-2 px-5">
          <div className="text-center mb-4">
            <h2 className="fw-bolder fs-2 mt-4">오늘의 여행 띵언</h2>
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
