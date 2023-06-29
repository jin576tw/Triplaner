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
      {items.length ? (
        <div className="row g-2">{items.map((item) => item)}</div>
      ) : (
        "尚未建立"
      )}
    </div>
  );
};

export default RecommendLocation;
