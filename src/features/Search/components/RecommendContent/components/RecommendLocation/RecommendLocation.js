import "./RecommendLocation.scss";

const RecommendLocation = (props) => {
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
