import "./SiteWindow.scss";
import pic from "../../../../assets/images/pic01.jpeg";
const SiteWindow = () => {
  return (
    <div className="siteWindow ">
      <div className="windowItem col-3">
        <div className="itemPic">
          <img src={pic} />
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
          <img src={pic} />
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
          <img src={pic} />
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
          <img src={pic} />
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
