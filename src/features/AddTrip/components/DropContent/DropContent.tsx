import { useDrop } from "react-dnd";
import { ItemTypes } from "../../constant/Constants";
import TripCard from "../TripCard/TripCard";

interface DropContentProps {
  items: string[];
  onDrop: (item: string) => void;
}

const DropContent = (props: DropContentProps) => {
  let items = props.items;

  const [, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (drag: any) => {
      const item = drag.title;
      props.onDrop(item);
    },
  });

  return (
    <div className="colum-content" ref={dropRef}>
      {items.map((item, i) => {
        return <TripCard title={item} key={i} />;
      })}
    </div>
  );
};

export default DropContent;
