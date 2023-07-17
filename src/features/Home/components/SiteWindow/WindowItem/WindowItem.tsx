import "./WindowItem.scss";

interface WindowItemProps {
  name: any;
}
const WindowItem = (props: WindowItemProps) => {
  return (
    <div className="windowItem">
      <div className="window_content">
        <div className="item_pic">
          <img
            src="https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2021/12/Hero-iStock-1326007584.renditionimage.1700.1133.jpg"
            alt="pic"
          />
        </div>
        <div className="item_description">
          <h3>{`景點名稱000${props.name}`}</h3>
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

export default WindowItem;
