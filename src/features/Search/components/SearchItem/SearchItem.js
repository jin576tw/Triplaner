import "./SearchItem.scss";

// import image from "../../../../assets/images/Site001.png";

const SearchItem = (props) => {
  const site = props.site;

  const { image, name, country, city, favorite } = site;

  return (
    <div className="searchItem col-4">
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
            <span className="tagFavorite"> {favorite}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
