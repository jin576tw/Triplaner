import { useEffect, useState } from "react";
import RecommendList from "./components/RecommendList/RecommendList";
import RecommendLocation from "./components/RecommendLocation/RecommendLocation";
import SearchItem from "../SearchItem/SearchItem";

import SITE from "../../../../shared/JSON/DataExample/sitesExample.json";

import CITY from "../../../../shared/JSON/DataExample/cityExample.json";

import "./RecommendContent.scss";
import CityItem from "../CityItem/CityItem";

interface RecommendContentProps {
  code: string;
}

const RecommendContent = ({ code }: RecommendContentProps) => {
  const [siteTopTen, setSiteTopTen] = useState<React.ReactNode[]>([]);

  const [hotelTopTen, setHotelTopTen] = useState<React.ReactNode[]>([]);

  const [hotCities, setHotCities] = useState<React.ReactNode[]>([]);

  /** 抓取人氣景點Top10 */
  const fetchSiteTopTen = (code: string) => {
    const results = SITE.filter((site) => site.region === code).map((site) => {
      return <SearchItem key={site.id} site={site} />;
    });

    setSiteTopTen(results);
  };

  /** 抓取人氣住宿Top10 */
  const fetchHotelTopTen = (code: string) => {
    const results = SITE.filter((site) => site.region === code).map((site) => {
      return <SearchItem key={site.id} site={site} />;
    });

    setHotelTopTen(results);
  };

  const fetchHotCities = (code: string) => {
    const results = CITY.find(
      ({ regionCode }) => regionCode === code
    )?.cityList.map((city) => (
      <CityItem city={city} key={city.cityCode} />
    )) as React.ReactNode[];

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
