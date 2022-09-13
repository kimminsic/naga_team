import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
const DomSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [imageno, setImageNo] = useState(0);
  const [festival, setFestival] = useState([]);
  const [loading, setLoading] = useState(true);

  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  const startday = "20220913";

  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/searchFestival?serviceKey=${servicekey}&numOfRows=10&pageNo=10&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&eventStartDate=${startday}"`
        );
        setImageNo(randomNumberInRange(response.data.response.body.totalCount));
      } catch (error) {
        console.log(error);
      }
    }
    getImage();
  }, []);

  useEffect(() => {
    async function changeImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/searchFestival?serviceKey=${servicekey}&numOfRows=10&pageNo=${imageno}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&eventStartDate=${startday}`
        );
        console.log(`imageno는 : `, imageno);
        console.log(response.data.response.body.items.item);
        setFestival(response.data.response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    changeImage();
  }, [imageno]);

  function randomNumberInRange(index) {
    return Math.floor(Math.random() * index * 0.02);
  }

  return (
    <div>
      <DomMetaTag />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>
      </Helmet>

      <div>
        <Slider {...settings}>
          {festival.map((v, index) => (
            <div className="d-flex justify-content-center">
              <a href={"festival/" + v.createdtime}>
                <img
                  object-fit="fill"
                  src={v.firstimage}
                  width="400px"
                  height="500px"
                  // 대체 이미지
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://cdn.discordapp.com/attachments/1019149016560324618/1019205553437822996/unknown.png";
                  }}

                  // 숨기기
                  // onError={(i) => {
                  //   i.target.style.display = "none";
                  // }}

                  //삭제
                  // onError={(i) => {
                  //   i.target.remove ? i.target.remove() : i.target.removeNode();
                  // }}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DomSlick;
