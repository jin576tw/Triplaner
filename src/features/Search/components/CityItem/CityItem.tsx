import { CityInfo } from "../../../../core/models/city-info.model";
import "./CityItem.scss";

interface CityItemProps {
  city: CityInfo;
}

const CityItem = (props: CityItemProps) => {
  const city = props.city;

  return (
    <div className="city-item">
      <div className="city-pic">
        <img src={city.image} alt={city.image}></img>
        <div className="mask"></div>
      </div>
      <p className="city-name">{city.name}</p>
    </div>
  );
};

export default CityItem;
