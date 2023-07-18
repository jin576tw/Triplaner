import SliderComponent from "../../../../../../shared/components/SliderComponent/SliderComponent";
import "./RecommendLocation.scss";

interface RecommendLocationProps {
  title: string;
  items: React.ReactNode[];
}

const RecommendLocation = (props: RecommendLocationProps) => {
  const items = props.items;

  return (
    <div className="recommend-location">
      <h2>{props.title}</h2>
      {items && items.length ? (
        <SliderComponent
          nodes={items}
          count={5}
          showDots={false}
          showArrows={false}
        />
      ) : (
        "尚未建立"
      )}
    </div>
  );
};

export default RecommendLocation;
