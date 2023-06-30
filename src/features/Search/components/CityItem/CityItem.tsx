import { CityInfoItem } from "../../../../core/models/city-info.model";
import "./CityItem.scss";

interface CityItemProps {
  city: CityInfoItem;
}

const CityItem = (props: CityItemProps) => {
  const city = props.city;

  return (
    <div className="city-item">
      <div className="city-pic">
        <img src={city.image} alt={city.image}></img>
        <div className="mask"></div>
      </div>
      <p className="city-name">{city.cityName}</p>
    </div>
  );
};

export default CityItem;
