import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./detail.scss";

import DETAIL from "../../../../shared/JSON/DataExample/siteDetailExample.json";

import WEATHER from "../../../../shared/JSON/DataExample/weatherExample.json";

import SiteWindow from "../../../Home/components/SiteWindow/SiteWindow";
import WeatherWindow from "../../components/WeatherWindow/WeatherWindow";
import { WeatherData } from "../../../../core/models/weather-data.model";

interface SiteDetailItem {
  id: string;
  name: string;
  region: string;
  city: string;
  images: string[];
  tags: string[];
  description: string;
  location: number[];
  info: {
    address?: string;
    phone?: string;
    schedule?: string[];
  };
  website: string;
  notice?: string;
  open: boolean;
}

const SearchPageDetail = () => {
  const { id } = useParams();

  const [siteDetail, setSiteDetail] = useState<SiteDetailItem | undefined>(
    undefined
  );

  const [weatherData, setWeatherDate] = useState<WeatherData | undefined>(
    undefined
  );

  const [relateSite, setRelateSite] = useState<any[]>([]);

  /** 獲取景點明細 */
  const fetchSiteDetail = (id: string) => {
    setSiteDetail(DETAIL);
    fetchWeatherData(DETAIL.location);
  };

  /** 獲取天氣資訊 */
  const fetchWeatherData = (location: number[]) => {
    setWeatherDate(WEATHER);
  };

  const fetchRelateSite = () => {
    setRelateSite([1, 2, 3, 4, 5, 6]);
  };

  useEffect(() => {
    if (id) {
      fetchSiteDetail(id);
      fetchRelateSite();
    }
  }, [id]);

  return siteDetail ? (
    <div className="site-detail-page">
      {siteDetail.notice ? (
        <div className="notice-alert">
          <span className="alert-icon"></span>
          <span>{siteDetail.notice}</span>
        </div>
      ) : null}

      <div className="site-header">
        <div className="site-title">
          <h3>{siteDetail.name}</h3>
        </div>

        <div className="site-button-warp">
          <button type="button" className="btn collect-site">
            <span>收藏景點</span>
          </button>
          <button type="button" className="btn add-trip">
            <span>+ 加入我的行程</span>
          </button>
        </div>
      </div>
      <div className="site-detail-container">
        <div className="site-detail-head">
          <div className="site-images">
            <img src={siteDetail.images[0]} alt={siteDetail.images[0]} />
          </div>
          <div className="site-weather-block">
            {weatherData ? (
              <WeatherWindow data={weatherData}></WeatherWindow>
            ) : null}
          </div>
        </div>

        <div className="site-detail-tags">
          {siteDetail.tags.map((tag) => (
            <div className="detail-tag" key={tag}>
              # {tag}
            </div>
          ))}
        </div>

        <div className="site-detail-description">
          <div className="description-container">
            <div className="site-title">
              <h4>景點介紹</h4>
            </div>
            <p>{siteDetail.description}</p>
          </div>
          <div className="info-container">
            <div className="site-title">
              <h4>景點資訊</h4>
            </div>
            <ul>
              <li className="info-address">{siteDetail.info.address}</li>
              <li className="info-phone">{siteDetail.info.phone}</li>
              {siteDetail.info.schedule ? (
                <li className="info-schedule">
                  {siteDetail.info.schedule.map((time) => (
                    <div key={time}> {time}</div>
                  ))}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="site-operator ">
        <ul>
          <li>
            <button className="share-btn"></button>
            分享給協作夥伴
          </li>
          <li>
            <button className="add-achieve-btn"></button>加入我的成就
          </li>
          <li>
            <button className="site-relate-btn"></button>景點相關網站
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="other-sites ">
        <div className="site-title mb-4">
          <h4>附近景點</h4>
        </div>
        <SiteWindow sites={relateSite} />
      </div>
    </div>
  ) : null;
};

export default SearchPageDetail;
