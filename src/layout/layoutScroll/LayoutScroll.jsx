import React from "react";
import { Link, animateScroll } from "react-scroll";

// css
import "./LayoutScroll.css";

// icon
import { ReactSVG } from "react-svg";
import icon_arrow_up from "../../assets/icon/arrow-top-chevron-chevron-top-svgrepo-com.svg";
import icon_fire from "../../assets/icon/fire-svgrepo-com.svg";
import icon_cate from "../../assets/icon/category-svgrepo-com.svg";
import icon_user from "../../assets/icon/user-profile-svgrepo-com.svg";

const LayoutScroll = ({ visible }) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const scrollToFire = () => {
    animateScroll.scrollTo(200);
  };
  const scrollToLM = () => {
    animateScroll.scrollTo(700);
  };
  const scrollToCate = () => {
    animateScroll.scrollTo(1050);
  };
  const scrollToUser = () => {
    animateScroll.scrollTo(1400);
  };

  return (
    <>
      <div
        style={{ visibility: visible, display: "block" }}
        className="LayoutScroll_container"
      >
        <div className="Scroll_Top" onClick={() => scrollToTop()}>
          <ReactSVG src={icon_arrow_up} />
        </div>
        <div className="Scroll_Top" onClick={() => scrollToFire()}>
          <ReactSVG src={icon_fire} />
        </div>
        <div className="Scroll_Top" onClick={() => scrollToLM()}>
          LM
        </div>
        <div className="Scroll_Top" onClick={() => scrollToCate()}>
          <ReactSVG src={icon_cate} />
        </div>
        <div className="Scroll_Top" onClick={() => scrollToUser()}>
          <ReactSVG src={icon_user} />
        </div>
      </div>
    </>
  );
};

export default LayoutScroll;
