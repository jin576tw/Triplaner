import "./SearchItem.scss";

import image from "../../../../assets/images/Site001.png";

const SearchItem = () => {
  return (
    <div className="searchItem col-4">
      <div className="searchContent">
        <div className="searchPic">
          <img src={image} alt={image}></img>
        </div>
        <div className="searchTitle">
          <h3>景點名稱0001</h3>
          <div className="searchTags">
            <span className="tagLocate">國家名, 地名</span>
            <span className="tagFavorite">10542</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
