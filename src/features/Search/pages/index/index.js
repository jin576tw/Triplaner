import { useSearchParams } from "react-router-dom";

import "./index.scss";

import RegionAlias from "../../../../shared/JSON/regionAlias.json";
import { Fragment, useEffect, useState } from "react";

import SwitchSearch from "../../components/SwitchSearch/SwitchSearch";
import AdvanceSiteFilter from "../../components/AdvanceSiteFilter/AdvanceSiteFilter";
import AdvanceHotelFilter from "../../components/AdvanceHotelFilter/AdvanceHotelFilter";
// import PageContent from "../../../../shared/components/PageContent";

const Index = () => {
  const [searchParams] = useSearchParams();

  const [results, setResults] = useState([]);

  const [isSitePage, setIsSitePage] = useState(true);

  useEffect(() => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const content = data.map((data, index) => {
      return <div key={index}>{data}</div>;
    });
    setResults(content);
  }, []);

  const switchSearch = (event) => {
    setIsSitePage(event);
  };

  const color = isSitePage ? "siteColor" : "hotelColor";

  const searchRegion = RegionAlias[searchParams.get("region")];

  return (
    <Fragment>
      <h1 className="regionTitle">{searchRegion}</h1>
      <div className="searchPage">
        <div className="searchBar col-3">
          <div className="searchSwitch">
            <h3 className={color}>我想要找...</h3>
            <SwitchSearch onSwitch={switchSearch} />
          </div>
          <div className="advanceFilter">
            {isSitePage ? <AdvanceSiteFilter /> : <AdvanceHotelFilter />}
          </div>
        </div>
        <div className="searchContent col-9">
          <div className="searchFiler"></div>
          <div className="searchResults">
            {/* <PageContent data={results} row={3}  /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
