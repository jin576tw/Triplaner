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
        <div className="row g-2">{items.map((item) => item)}</div>
      ) : (
        "尚未建立"
      )}

      <div className="arrow"></div>
    </div>
  );
};

export default RecommendList;
