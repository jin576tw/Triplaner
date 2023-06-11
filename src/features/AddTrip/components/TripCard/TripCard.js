import { useDrag } from "react-dnd";
import "./TripCard.scss";
import { ItemTypes } from "../../constant/Constants";

const TripCard = (props) => {
  // const [{ }, dragRef] = useDrag({
  //     item: { type: ItemTypes.CARD, ...props.title }
  // });

  return (
    <div>
      <div className="trip-card">
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default TripCard;
