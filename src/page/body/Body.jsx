import React, { useState, useEffect } from "react";

// css
import "./Body.css";

// data
import {
  Body_menu,
  Body_product,
  data_LazMall,
  data_Cate,
} from "./data/Body_data";
import { Product } from "./data/Data_Product";

// icon
import { ReactSVG } from "react-svg";
import icon_arrow_right from "../../assets/icon/right-arrow-backup-2-svgrepo-com.svg";
import icon_star from "../../assets/icon/star-svgrepo-com (3).svg";

const Body = () => {
  const [timeLeft, setTimeLeft] = useState(36000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft - hours * 3600) / 60);
  const seconds = timeLeft % 60;

  const [data_Products, setData_Products] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  let [load, setLoad] = useState(false);

  const handleClick = () => {
    setLoad((load = true));
    const slicedData = Product.slice(currentIndex, currentIndex + 4);
    setData_Products((prevData) => [...prevData, ...slicedData]);
    setCurrentIndex(currentIndex + 4);
    setLoad((load = false));
  };

  useEffect(() => {
    if (data_Products.length < 4) {
      handleClick();
    }
  }, [data_Products, load]);
  return (
    <>
      <div className="Body_">
        <div className="Body_Header">
          <div className="Body_Menu">
            {Body_menu.map((item, index) => {
              return (
                <div className="Body_Menu_item" key={index}>
                  <img src={item.url} />
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Body_Flash">
          <div className="Flash_header">
            <div className="header">Flash Sale</div>
            <div className="content_time">
              <div className="sale_">
                <div className="sale_text">ขณะนี้ลดราคาอยู่</div>
                <div className="sale_time">จะสิ้นสุดใน</div>
                <div className="sale_time_hour">{hours}</div> :
                <div className="sale_time_hour">{minutes}</div> :
                <div className="sale_time_hour">{seconds}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="sale_button">ช้อปสินค้าทั้งหมด</div>
              </div>
            </div>
            <div className="content_element">
              {Body_product.map((item, index) => {
                return (
                  <div className="content_element_card" key={index}>
                    <div className="card_head">
                      <img src={item.img} />
                    </div>
                    <div className="card_content">
                      <div className="card_title">{item.name}</div>
                      <div className="card_price">
                        <span>{item.currency}</span>
                        {parseFloat(item.price).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div className="card_discount">
                        <span className="card_price_ori">
                          <span>{item.currency}</span>
                          <span>
                            {parseFloat(item.discount_price).toLocaleString(
                              "en-US",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </span>
                        </span>
                        <span className="card_price_discount">
                          <span>{item.discount}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="Body_LazMall">
          <div className="Body_LazMall_header">
            <span>LazMall</span>
            <div className="product_More">
              <span>เลือกซื้อสินค้าต่อ</span>
              <ReactSVG src={icon_arrow_right} />
            </div>
          </div>
          <div className="Body_LazMall_content">
            {data_LazMall.map((item, index) => {
              return (
                <div key={index} className="LazMall_card">
                  <div className="img_overlay"></div>
                  <div className="img_back">
                    <img src={item.img_back} />
                  </div>
                  <div className="img_pos">
                    <img src={item.img} />
                  </div>
                  <div className="name">{item.name}</div>
                  <p>{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Body_Category">
          <div className="Category_Header">หมวดหมู่</div>
          <div>
            <div className="Category_Content">
              {data_Cate.map((item, index) => {
                return (
                  <div key={index} className="Category_Card">
                    <div className="Category_Card_content">
                      <div className="Category_Card_img">
                        <img src={item.img} />
                      </div>
                      <div className="Category_Card_name">
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="Body_Product">
          <div className="Category_Header">
            <div>สินค้าเพื่อคุณโดยเฉพาะ</div>
          </div>
          <div>
            <span style={{ visibility: "hidden" }}>.</span>
            <div>
              <span style={{ visibility: "hidden" }}>.</span>
              <div className="Product_Content">
                {/* data_Products */}
                {/* {Product.map((item, index) => { */}
                {data_Products.length !== 0 &&
                  data_Products.map((item, index) => {
                    return (
                      <div className="Product_Card" key={index}>
                        {item.item.map((item, index) => {
                          return (
                            <div className="Product_Content_Card" key={index}>
                              <div className="Product_Card_Container">
                                <div
                                  style={{ height: "100%" }}
                                  className="Card_Pro"
                                >
                                  <div className="Card_img">
                                    <img src={item.img} />
                                  </div>
                                  <div className="Card_detail">
                                    <div className="Card_lazmall">
                                      {item.laz !== "none" && (
                                        <div className="laz_show">
                                          <img src={item.laz} />
                                        </div>
                                      )}
                                    </div>
                                    <div className="Card_name">
                                      {item.mid !== "none" && (
                                        <img src={item.mid} />
                                      )}
                                      {item.name}
                                    </div>
                                    <div
                                      className="Card_price"
                                      style={{
                                        margin: "4px 0 0 0",
                                        textAlign: "left",
                                      }}
                                    >
                                      <div className="price">
                                        <span>{item.currency}</span>
                                        <span>{item.price}</span>
                                      </div>
                                      <div className="dis">
                                        <span
                                          style={{
                                            textDecoration: " line-through",
                                          }}
                                        >
                                          <span>{item.currency}</span>
                                          <span>{item.discount_price}</span>
                                        </span>

                                        <span
                                          style={{
                                            margin: "0 4px 0 4px",
                                            color: "#212121",
                                          }}
                                        >
                                          {item.discount}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="rating">
                                      <div className="rating_icon">
                                        <div
                                          style={{
                                            position: "absolute",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            display: "flex",
                                          }}
                                        >
                                          <ReactSVG
                                            src={icon_star}
                                            className="iconStar"
                                          />
                                          <ReactSVG
                                            src={icon_star}
                                            className="iconStar"
                                          />
                                          <ReactSVG
                                            src={icon_star}
                                            className="iconStar"
                                          />
                                          <ReactSVG
                                            src={icon_star}
                                            className="iconStar"
                                          />
                                          <ReactSVG
                                            src={icon_star}
                                            className="iconStar"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          // float: "left",
                                          fontSize: "12px",
                                          color: "#9e9e9e",
                                        }}
                                      >
                                        ({item.vote})
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
              </div>

              <div className="btn_loadData">
                {data_Products.length < 12 ? (
                  !load ? (
                    <button onClick={() => handleClick()}>โหลดเพิ่มเติม</button>
                  ) : (
                    <div className="spinner"></div>
                  )
                ) : (
                  <div className="data_end">
                    สินสุดการค้นหา<br></br>{" "}
                    กรุณาค้นหาต่อหรือลองใช้ฟังก์ชั่นอื่นบนเว็บ
                  </div>
                )}
              </div>

              <div className="Body_end">
                <div className="Body_end_content">
                  <div className="Body_end_Card">
                    <img src="//icms-image.slatic.net/images/ims-web/888209b8-a1b1-4d44-8497-0e22c88dfed2.jpg" />
                  </div>
                  <div className="Body_end_Card">
                    <img src="//icms-image.slatic.net/images/ims-web/7dc7c8e2-aa43-4323-b58f-2ad06a280c28.jpg" />
                  </div>
                  <div className="Body_end_Card">
                    <img src="//icms-image.slatic.net/images/ims-web/18bdc8ba-58bb-4a1d-979f-dc479838a51f.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
