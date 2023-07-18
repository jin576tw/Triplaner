import SliderComponent from "../../../../../../shared/components/SliderComponent/SliderComponent";
import "./RecommendList.scss";

interface RecommendListProps {
  title: string;
  items: React.ReactNode[];
}

const RecommendList = (props: RecommendListProps) => {
  const items = props.items;

  return (
    <div className="recommend-list">
      <h2>{props.title}</h2>
      {items && items.length ? (
        <SliderComponent nodes={items} count={4} />
      ) : (
        "尚未建立"
      )}
    </div>
  );
};

export default RecommendList;
