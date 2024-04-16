import { useEffect, useState } from "react";
import { SelectOption } from "../../../../core/models/select-option.model";

import "./index.scss";

import CITY from "../../../../shared/JSON/DataExample/cityExample.json";
import MultiSelect from "../../../../shared/components/MultiSelect/MultiSelect";
import RouteItem from "../../../Home/components/RouteItem/RouteItem";
import PageContent from "../../../../shared/components/PageContent/PageContent";

const TripPageIndex = () => {
  /** 查詢多選選項 */
  const [searchOptions, setSearchOptions] = useState<SelectOption[]>([]);

  const [sharedTrips, setSharedTrips] = useState<React.ReactNode[]>([]);

  const fetchSearchOption = () => {
    const options = CITY.map((region) => {
      return {
        label: region.regionName,
        options: region.cityList.map((city) => {
          return {
            value: city.cityCode,
            label: city.cityName,
          };
        }),
      };
    });

    setSearchOptions(options);
  };

  const fetchSharedTrips = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const results = data.map((trip) => {
      return <RouteItem key={trip} />;
    });

    setSharedTrips(results);
  };

  useEffect(() => {
    fetchSearchOption();
    fetchSharedTrips();
  }, []);

  return (
    <div className="trip-page">
      <div className="trip-page-header">
        <form className="trip-search-bar">
          <div className="d-flex search-bar">
            <div style={{ width: "40%" }}>
              <MultiSelect options={searchOptions} />
            </div>
            <select className="form-select">
              <option>所有國家</option>
            </select>

            <button type="submit" className="search-btn"></button>
          </div>

          <select className="form-select">
            <option>收藏數：由高到低</option>
          </select>
        </form>

        <button type="button" className="shared-btn">
          <div className="shared-icon"></div>
          分享我的行程
        </button>
      </div>

      <div className="trip-page-content">
        <div className="row g-3">
          <PageContent data={sharedTrips} row={6} />
        </div>
      </div>
    </div>
  );
};

export default TripPageIndex;
