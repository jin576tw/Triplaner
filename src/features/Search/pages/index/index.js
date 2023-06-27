import { useSearchParams } from "react-router-dom";

import "./index.scss";

import RegionAlias from "../../../../shared/JSON/regionAlias.json";
import { useEffect, useState } from "react";

import SwitchSearch from "../../components/SwitchSearch/SwitchSearch";
import AdvanceSiteFilter from "../../components/AdvanceSiteFilter/AdvanceSiteFilter";
import AdvanceHotelFilter from "../../components/AdvanceHotelFilter/AdvanceHotelFilter";

import SearchItem from "../../components/SearchItem/SearchItem";
import PageContent from "../../../../shared/components/PageContent/PageContent";

import SITE from "../../../../shared/JSON/DataExample/sitesExample.json";
import { flatten } from "../../../../core/utils/flatten.utils";
import RecommendContent from "../../components/RecommendContent/RecommendContent";
import LoadingComponent from "../../../../shared/components/LoadingComponent/LoadingComponent";

const SearchPageIndex = () => {
  /** 區域資訊 */
  const [regionInfo, setRegionInfo] = useState({});

  /** 顯示查詢結果 */
  const [searchResults, setSearchResults] = useState([]);

  /** 切換頁面查詢種類 */
  const [isSwitched, setIsSwitched] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  // 地區代碼
  const regionCode = searchParams.get("region");

  const showSearch = searchParams.get("showSearch");

  /** 切換景點/飯店查詢 */
  const switchSearch = () => {
    setIsSwitched((prev) => !prev);
  };

  /** 取得區域資訊 */
  const fetchRegionInfo = (code) => {
    const regionList = flatten(RegionAlias, "children");

    const region = regionList.find((region) => {
      return region.code === code;
    });

    setRegionInfo(region ? region : {});
  };

  /** 取得景點資訊 */
  const handleSearch = (event) => {
    event.preventDefault();

    fetch("https://triplaner-8e46a-default-rtdb.firebaseio.com/sites.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const results = data
          .filter((site) => site.region === regionCode)
          .map((site) => {
            return <SearchItem key={site.id} site={site} col="4" />;
          });

        if (!results.length) {
          alert("查無內容");
          return;
        }

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        setSearchParams({ region: regionCode, showSearch: true });

        setTimeout(() => {
          setSearchResults(results);
        }, 1000);
      });
  };

  useEffect(() => {
    if (!showSearch) {
      setIsSwitched(true);
      setSearchResults([]);
    }

    fetchRegionInfo(regionCode);
  }, [regionCode, showSearch]);

  return (
    <div className="search-page">
      <h1 className="title">{regionInfo.name}</h1>

      <form className="search-bar">
        <div className="search-bar-item">
          <SwitchSearch
            label="我想要找..."
            isSwitched={isSwitched}
            onSwitch={switchSearch}
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

        <button
          type="submit"
          className="search-btn"
          onClick={handleSearch}
        ></button>
      </form>

      <div className="search-page-content">
        {showSearch ? (
          <div className="search-results-content gap-2">
            <div className="search-filter col-3">
              {isSwitched ? <AdvanceSiteFilter /> : <AdvanceHotelFilter />}
            </div>
            <div className="search-results col-9">
              <div className="row g-3">
                {searchResults.length ? (
                  <PageContent data={searchResults} row={10} />
                ) : (
                  <LoadingComponent />
                )}
              </div>
            </div>
          </div>
        ) : (
          <RecommendContent code={regionCode} />
        )}
      </div>
    </div>
  );
};

export default SearchPageIndex;
