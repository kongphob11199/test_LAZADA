import React, { useState, useEffect } from "react";

// css
import "./Menu.css";

// data
import { data_imgSlice, data_menuSelect } from "./data/Menu_data";

// icon
import { ReactSVG } from "react-svg";
import icon_arrow_right from "../../assets/icon/right-arrow-backup-2-svgrepo-com.svg";

const Menu = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);

      if (count === 7) {
        setCount((count) => (count = 0));
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [count]);

  const setIMG_Menu = (index) => {
    setCount((count) => (count = index));
  };

  const [hoveredMenuCap, setHoveredMenuCap] = useState(false);
  const [data_menuShow, setData_menuShow] = useState([]);
  const [data_menuShow_2, setData_menuShow_2] = useState([]);

  const setMenu_show = (id) => {
    const filteredData = data_menuSelect.filter((item) => item.menu_id === id);
    setData_menuShow(filteredData);
    setData_menuShow_2([]);
  };
  const setMenu_show_2 = (id) => {
    const filteredData = data_menuShow[0].menu_item.filter(
      (item) => item.menu_name === id
    );
    setData_menuShow_2(filteredData);
  };
  useEffect(() => {}, [data_menuShow, data_menuShow_2]);
  useEffect(() => {
    if (!hoveredMenuCap) {
      setData_menuShow_2([]);
      setData_menuShow([]);
    }
  }, [hoveredMenuCap]);

  return (
    <>
      <div
        className="Menu_container"
        style={{
          backgroundColor: `${
            data_imgSlice[count].color !== undefined
              ? data_imgSlice[count].color
              : ""
          }`,
        }}
      >
        <div className="Menu_content">
          <div
            className="Menu_cap"
            onMouseEnter={() => setHoveredMenuCap(true)}
            onMouseLeave={() => setHoveredMenuCap(false)}
          >
            {data_menuSelect &&
              data_menuSelect.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ height: "27px", width: "188px" }}
                    className="Menu_cap_item"
                    onMouseEnter={() => setMenu_show(item.menu_id)}
                  >
                    <div>{item.menu_name}</div>
                    {data_menuShow[0] !== undefined &&
                      data_menuShow[0].menu_name === item.menu_name && (
                        <ReactSVG src={icon_arrow_right} />
                      )}
                  </div>
                );
              })}
          </div>
          {hoveredMenuCap &&
            data_menuShow &&
            data_menuShow[0] !== undefined && (
              <div
                className="Menu_cap_se"
                onMouseEnter={() => setHoveredMenuCap(true)}
                onMouseLeave={() => setHoveredMenuCap(false)}
              >
                {data_menuShow[0].menu_item.lenght !== 0 &&
                  data_menuShow[0].menu_item.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{ height: "27px", width: "188px" }}
                        className="Menu_cap_item"
                        onMouseEnter={() => setMenu_show_2(item.menu_name)}
                      >
                        <div>{item.menu_name}</div>
                        <ReactSVG src={icon_arrow_right} />
                      </div>
                    );
                  })}
              </div>
            )}
          {hoveredMenuCap &&
            data_menuShow_2 &&
            data_menuShow_2[0] !== undefined && (
              <div
                className="Menu_cap_th"
                onMouseEnter={() => setHoveredMenuCap(true)}
                onMouseLeave={() => setHoveredMenuCap(false)}
              >
                {data_menuShow_2[0].menu_item.lenght !== 0 &&
                  data_menuShow_2[0].menu_item.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{ height: "27px", width: "188px" }}
                        className="Menu_cap_item"
                      >
                        <div>{item.menu_name}</div>
                      </div>
                    );
                  })}
              </div>
            )}

          {data_imgSlice && (
            <div className="Menu_imgSlice">
              <img src={data_imgSlice[count].url} />
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  bottom: "12px",
                  left: "calc(50% - 88px)",
                }}
              >
                {data_imgSlice.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="img_count"
                      onClick={() => setIMG_Menu(index)}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
