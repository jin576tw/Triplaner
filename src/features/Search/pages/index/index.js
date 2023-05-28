import { useSearchParams } from "react-router-dom";

import "./index.scss";

import RegionAlias from "../../../../shared/JSON/regionAlias.json";
import { Fragment, useEffect, useState } from "react";

import SwitchSearch from "../../components/SwitchSearch/SwitchSearch";
import AdvanceSiteFilter from "../../components/AdvanceSiteFilter/AdvanceSiteFilter";
import AdvanceHotelFilter from "../../components/AdvanceHotelFilter/AdvanceHotelFilter";
import DateSelector from "../../../../shared/components/DateSelector/DateSelector";
import SearchItem from "../../components/SearchItem/SearchItem";
import PageContent from "../../../../shared/components/PageContent/PageContent";

import sites from "../../../../shared/JSON/searchSites.json";

const Index = () => {
  const [searchParams] = useSearchParams();

  /** 顯示查詢結果 */
  const [results, setResults] = useState([]);

  const [isSitePage, setIsSitePage] = useState(true);

  // 地區
  const region = searchParams.get("region");

  // 頁面樣式
  const color = isSitePage ? "siteColor" : "hotelColor";

  // 地區標題
  const regionTitle = RegionAlias[region];

  /** 切換景點/飯店查詢 */
  const switchSearch = (event) => {
    setIsSitePage(event);
  };

  useEffect(() => {
    /** 取得景點資訊 */
    const getSites = (sites) => {
      return sites
        .filter((site) => site.region === region)
        .map((site) => {
          return <SearchItem key={site.id} site={site} />;
        });
    };

    setResults(getSites(sites));
  }, [region]);

  return (
    <Fragment>
      <h1 className="regionTitle">{regionTitle}</h1>
      <div className="searchPage d-flex gap-3">
        <div className="searchBar col-3">
          <div className="searchSwitch">
            <h3 className={color}>我想要找...</h3>
            <SwitchSearch onSwitch={switchSearch} />
          </div>
          <div className="advanceFilter">
            {isSitePage ? <AdvanceSiteFilter /> : <AdvanceHotelFilter />}
          </div>
        </div>
        <div className="searchContent col-9 ">
          <div className="searchFiler">
            <div className="filer-wrap">
              <select className="form-select">
                <option>京都、大阪、奈良</option>
              </select>
              <DateSelector />
            </div>
            <select className="form-select">
              <option>收藏數：由高到低</option>
            </select>
          </div>

          <div className="searchResults">
            <div className="row g-3">
              <PageContent data={results} row={10} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
