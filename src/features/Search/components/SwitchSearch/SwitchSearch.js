import "./SwitchSearch.scss";
const SwitchSearch = (props) => {
  const handleSwitch = () => {
    props.onSwitch();
  };

  // 按鈕樣式
  const switchStyle = props.isSwitched ? "siteColor" : "hotelColor";

  return (
    <div className="SiteSwitchButton">
      <h3 className={switchStyle}>{props.label}</h3>
      <label className="switch">
        <input
          type="checkbox"
          checked={!props.isSwitched}
          onChange={handleSwitch}
        />
        <span className="slider"></span>
        <div className="text">
          <span>景點</span>
          <span>住宿 </span>
        </div>
      </label>
    </div>
  );
};

export default SwitchSearch;
