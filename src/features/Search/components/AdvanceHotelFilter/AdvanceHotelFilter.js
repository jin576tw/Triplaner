import "./AdvanceHotelFilter.scss";

const AdvanceHotelFilter = () => {
  return (
    <form>
      <div className="filterHotelInput">
        <label htmlFor="advanceHotelInput">進階篩選</label>
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
      <div className="filterHotelOptions">
        <h4>人數</h4>
        <div className="select-warp">
          <select className="form-select">
            <option>1位大人</option>
          </select>
          <select className="form-select">
            <option>0位小孩</option>
          </select>
        </div>
      </div>
      <div className="filterHotelOptions">
        <h4>住宿類別</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="allHotel"
          />
          <label className="form-check-label" htmlFor="allHotel">
            全部
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
            飯店（四星以上）
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
            飯店（一星～三星）
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
            民宿
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
            青旅
          </label>
        </div>
      </div>
      <div className="filterHotelOptions">
        <h4>周邊機能</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="natureSite"
          />
          <label className="form-check-label" htmlFor="natureSite">
            全部
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
            車站/捷運
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
            車站/捷運
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
            車站/捷運
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
            購物中心
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
            郊區
          </label>
        </div>
      </div>
    </form>
  );
};

export default AdvanceHotelFilter;
