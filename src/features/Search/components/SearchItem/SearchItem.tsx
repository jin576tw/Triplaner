import { SiteItem } from "../../../../core/models/site-item.model";
import "./SearchItem.scss";

// import image from "../../../../assets/images/Site001.png";

interface SearchItemProps {
  site: SiteItem;
  col: string;
}

const SearchItem = (props: SearchItemProps) => {
  const site = props.site;

  const { image, name, country, city, favorites } = site;

  const style = `searchItem col-${props.col}`;

  return (
    <div className={style}>
      <div className="searchContent">
        <div className="searchPic">
          <img src={image} alt={image}></img>
        </div>
        <div className="searchTitle">
          <h3>{name}</h3>
          <div className="searchTags">
            <span className="tagLocate">
              {country}, {city}
            </span>
            <span className="tagFavorite"> {favorites}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
