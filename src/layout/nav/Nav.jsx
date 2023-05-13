import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll } from "react-scroll";

// css
import "./Nav.css";

// icon
import { ReactSVG } from "react-svg";
import icon_close from "../../assets/icon/close-sm-svgrepo-com.svg";
import icon_search from "../../assets/icon/search-svgrepo-com.svg";
import icon_cart from "../../assets/icon/cart-svgrepo-com.svg";

// data
import { data_linkbar } from "./data/Nav_data";

const Nav = ({ onScroll }) => {
  const ref = useRef(null);

  let [pos, setPos] = useState("absolute");
  let [Top_link, setTop_link] = useState("25px");
  let [Pos_link, setPos_link] = useState("absolute");
  useEffect(() => {
    const handleScroll = (e) => {
      const node = ref.current;
      // ตรวจสอบว่าผู้ใช้เลื่อนมาถึงตำแหน่งที่ต้องการหรือไม่
      if (node && node.getBoundingClientRect().top <= window.innerHeight) {
        if (node.getBoundingClientRect().top < -515) {
          setPos_link((Pos_link = "absolute"));
          setTop_link((Top_link = "0"));
        } else {
          setPos_link((Pos_link = "fixed"));
          setTop_link((Top_link = "25px"));
        }
        if (node.getBoundingClientRect().top < -58) {
          setPos((pos = "fixed"));
        } else {
          setPos((pos = "absolute"));
          setPos_link((Pos_link = "absolute"));
        }
        onScroll(pos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="nav_header" ref={ref}>
        <div className="nav_header_img">
          <img src="https://icms-image.slatic.net/images/ims-web/c3259ddf-fbef-4119-9c02-f47a000c55d3.jpg" />

          <div className="X">
            <ReactSVG src={icon_close} />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          height: "100px",
          position: "absolute",
          top: "80px",
          // left: "calc(50% - 594px)",
          zIndex: "4",
        }}
      >
        <div
          className="nav_linkbar"
          style={{
            position: Pos_link,
            top: Pos_link === "absolute" ? "0" : "0",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div className="nav_linkbar_header">
              {data_linkbar &&
                data_linkbar.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        padding: ` ${
                          index + 1 === data_linkbar.length
                            ? "0 0 0 17px"
                            : "0 17px"
                        } `,
                        color: item.color,
                      }}
                      className="font"
                    >
                      {item.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div
          className="nav_search_header"
          style={{ position: pos, top: Top_link }}
        >
          <div className="nav_search_content">
            <div style={{ width: "200px", textAlign: "left" }}>
              <img
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png"
                style={{ height: "40px", width: "127px" }}
              />
            </div>
            <div className="nav_search_input">
              <input placeholder="ค้นหาในลาซาด้า" />
              <div className="btn_Search">
                <ReactSVG src={icon_search} />
              </div>
            </div>
            <div className="nav_cart">
              <ReactSVG src={icon_cart} />
            </div>
            <div className="nav_coupon">
              <img src="//laz-img-cdn.alicdn.com/images/ims-web/TB1DcZESBr0gK0jSZFnXXbRRXXa.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
