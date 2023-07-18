import "./RouteItem.scss";

const RouteItem = () => {
  return (
    <div className="route_item col-6">
      <div className="route_content">
        <div className="routePic">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Tainan_CP1125X624_1_rnf80b.jpg"
            alt="pic"
          ></img>
          <div className="mask"></div>
        </div>
        <div className="route_description">
          <div className="route_title">
            <h2>超好玩的三天兩夜台南之旅</h2>
          </div>
          <div className="route_context">
            <p>
              副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容副標內容
            </p>
          </div>
          <div className="routeTags">
            <div className="routeLocate">
              <p>台灣, 台南</p>
            </div>
            <div className="routeFavorite">
              <p>10888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteItem;
