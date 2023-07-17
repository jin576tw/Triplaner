import "./SiteWindow.scss";
import React from "react";
import Slider from "react-slick";

// import pic from "../../../../assets/images/pic01.jpeg";
const SiteWindow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="siteWindow">
      <div className="windowItem col-3">
        <div className="itemPic">
          <img
            src="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2021/12/Hero-iStock-1326007584.renditionimage.1700.1133.jpg"
            alt="pic"
          />
        </div>
        <div className="itemDescription">
          <h3>景點名稱0001</h3>
          <div className="itemTags">
            <div className="itemLocate">
              <p>國家名, 地名</p>
            </div>
            <div className="itemFavorite">
              <p>10542</p>
            </div>
          </div>
        </div>
      </div>
      <div className="windowItem col-3">
        <div className="itemPic">
          <img
            src="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2021/12/Hero-iStock-1326007584.renditionimage.1700.1133.jpg"
            alt="pic"
          />
        </div>
        <div className="itemDescription">
          <h3>景點名稱0001</h3>
          <div className="itemTags">
            <div className="itemLocate">
              <p>國家名, 地名</p>
            </div>
            <div className="itemFavorite">
              <p>10542</p>
            </div>
          </div>
        </div>
      </div>
      <div className="windowItem col-3">
        <div className="itemPic">
          <img
            src="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2021/12/Hero-iStock-1326007584.renditionimage.1700.1133.jpg"
            alt="pic"
          />
        </div>
        <div className="itemDescription">
          <h3>景點名稱0001</h3>
          <div className="itemTags">
            <div className="itemLocate">
              <p>國家名, 地名</p>
            </div>
            <div className="itemFavorite">
              <p>10542</p>
            </div>
          </div>
        </div>
      </div>
      <div className="windowItem col-3">
        <div className="itemPic">
          <img
            src="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2021/12/Hero-iStock-1326007584.renditionimage.1700.1133.jpg"
            alt="pic"
          />
        </div>
        <div className="itemDescription">
          <h3>景點名稱0001</h3>
          <div className="itemTags">
            <div className="itemLocate">
              <p>國家名, 地名</p>
            </div>
            <div className="itemFavorite">
              <p>10542</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteWindow;
