import { useEffect, useState } from "react";
import RecommendList from "./components/RecommendList/RecommendList";
import RecommendLocation from "./components/RecommendLocation/RecommendLocation";
import SearchItem from "../SearchItem/SearchItem";

import SITE from "../../../../shared/JSON/DataExample/sitesExample.json";

import CITY from "../../../../shared/JSON/DataExample/cityExample.json";

import "./RecommendContent.scss";
import CityItem from "../CityItem/CityItem";

const RecommendContent = ({ code }) => {
  const [siteTopTen, setSiteTopTen] = useState([]);

  const [hotelTopTen, setHotelTopTen] = useState([]);

  const [hotCities, setHotCities] = useState([]);

  /** 抓取人氣景點Top10 */
  const fetchSiteTopTen = (code) => {
    const results = SITE.filter((site) => site.region === code)
      .slice(0, 4)
      .map((site) => {
        return <SearchItem key={site.id} site={site} col="3" />;
      });

    setSiteTopTen(results);
  };

  /** 抓取人氣住宿Top10 */
  const fetchHotelTopTen = (code) => {
    const results = SITE.filter((site) => site.region === code)
      .slice(0, 4)
      .map((site) => {
        return <SearchItem key={site.id} site={site} col="3" />;
      });

    setHotelTopTen(results);
  };

  const fetchHotCities = (code) => {
    const results = CITY.filter((city) => city.region === code).map((city) => (
      <CityItem city={city} key={city.id} />
    ));

    setHotCities(results);
  };

  useEffect(() => {
    fetchSiteTopTen(code);

    fetchHotelTopTen(code);

    fetchHotCities(code);
  }, [code]);

  return (
    <div className="recommend-content">
      <RecommendList title="人氣景點Top10" items={siteTopTen} />
      <RecommendList title="人氣住宿Top10" items={hotelTopTen} />
      <RecommendLocation title="熱門城市" items={hotCities} />
    </div>
  );
};

export default RecommendContent;
