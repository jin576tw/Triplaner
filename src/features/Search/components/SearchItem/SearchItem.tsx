import { NavLink } from "react-router-dom";
import { SiteItem } from "../../../../core/models/site-item.model";
import "./SearchItem.scss";

interface SearchItemProps {
  site: SiteItem;
  col?: string;
}

const SearchItem = (props: SearchItemProps) => {
  const site = props.site;

  const { id, image, name, country, city, favorites, region } = site;

  const style = props.col ? `searchItem col-${props.col}` : `searchItem p-1`;

  return (
    <div className={style}>
      <NavLink to={`detail/${id}?region=${region}&title=${name}`}>
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
      </NavLink>
    </div>
  );
};

export default SearchItem;
