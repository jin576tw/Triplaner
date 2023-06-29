import { useDrag } from "react-dnd";
import "./TripCard.scss";
import { ItemTypes } from "../../constant/Constants";

const TripCard = (props: { title: string }) => {
  const [_item, dragRef] = useDrag({
    type: ItemTypes.CARD,
    item: {
      title: props.title,
    },
  });

  return (
    <div ref={dragRef}>
      <div className="trip-card">
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default TripCard;
