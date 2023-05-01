import "./AdvanceSiteFilter.scss";

const AdvanceSiteFilter = () => {
  return (
    <form>
      <div className="filterSiteInput">
        <label htmlFor="advanceSiteInput">進階篩選</label>
        <div className="input-group">
          <input
            className="form-control"
            name="name"
            id="advanceSiteInput"
            type="text"
            placeholder="請輸入景點關鍵字..."
          />
          <button className="searchBtn" type="submit"></button>
        </div>
      </div>
      <div className="filterSiteOptions">
        <h4>景點類別</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="natureSite"
          />
          <label className="form-check-label" htmlFor="natureSite">
            自然景觀
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="historicalSite"
          />
          <label className="form-check-label" htmlFor="historicalSite">
            歷史景觀
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="citySite"
          />
          <label className="form-check-label" htmlFor="citySite">
            城市觀光
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="shoppingSite"
          />
          <label className="form-check-label" htmlFor="shoppingSite">
            購物逛街
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="playgroundSite"
          />
          <label className="form-check-label" htmlFor="playgroundSite">
            休憩遊樂
          </label>
        </div>
      </div>
    </form>
  );
};

export default AdvanceSiteFilter;
