import { useSearchParams } from "react-router-dom";

import "./index.scss";

import RegionAlias from "../../../../shared/JSON/regionAlias.json";
import { useEffect, useState } from "react";

import SwitchSearch from "../../components/SwitchSearch/SwitchSearch";
import AdvanceSiteFilter from "../../components/AdvanceSiteFilter/AdvanceSiteFilter";
import AdvanceHotelFilter from "../../components/AdvanceHotelFilter/AdvanceHotelFilter";
import SearchItem from "../../components/SearchItem/SearchItem";
import PageContent from "../../../../shared/components/PageContent/PageContent";

import sites from "../../../../shared/JSON/searchSites.json";
import { flatten } from "../../../../core/utils/flatten.utils";

const Index = () => {
  /** 區域資訊 */
  const [regionInfo, setRegionInfo] = useState({});

  /** 顯示查詢結果 */
  const [searchResults, setSearchResults] = useState([]);

  const [isSitePage, setIsSitePage] = useState(true);

  const [searchParams] = useSearchParams();

  // 地區代碼
  const regionCode = searchParams.get("region");

  // 頁面樣式
  const pageStyle = isSitePage ? "siteColor" : "hotelColor";

  /** 切換景點/飯店查詢 */
  const switchSearch = (event) => {
    setIsSitePage(event);
  };

  /** 取得區域資訊 */
  const fetchRegionInfo = (code) => {
    const regionList = flatten(RegionAlias, "children");

    const region = regionList.find((region) => {
      return region.code === code;
    });

    setRegionInfo(region);
  };

  useEffect(() => {
    fetchRegionInfo(regionCode);

    /** 取得景點資訊 */
    const fetchSites = (sites) => {
      return sites
        .filter((site) => site.region === regionCode)
        .map((site) => {
          return <SearchItem key={site.id} site={site} />;
        });
    };

    setSearchResults(fetchSites(sites));
  }, [regionCode]);

  return (
    <div className="search-page">
      <h1 className="title">{regionInfo.name}</h1>

      <form className="search-bar">
        <div className="search-bar-item">
          <SwitchSearch
            label="我想要找..."
            onSwitch={switchSearch}
            style={pageStyle}
          />
        </div>
        <div className="search-bar-item">
          <select className="form-select">
            <option>京都、大阪、奈良</option>
          </select>
        </div>

        <div className="search-bar-item">
          <input
            className="form-control"
            type="text"
            placeholder="請輸入景點關鍵字..."
          />
        </div>

        <button type="submit" className="search-btn"></button>
      </form>

      <div className="search-page-content">
        {searchResults.length ? (
          <div className="search-results-content gap-2">
            <div className="search-filter col-3">
              {isSitePage ? <AdvanceSiteFilter /> : <AdvanceHotelFilter />}
            </div>
            <div className="search-results col-9">
              <div className="row g-3">
                <PageContent data={searchResults} row={10} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Index;
