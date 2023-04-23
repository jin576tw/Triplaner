import { Fragment, useState } from "react";

import "./index.scss";

import { Box, Tab } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import SiteWindow from "../../components/SiteWindow/SiteWindow";
import RouteItem from "../../components/RouteItem/RouteItem";

const Index = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <div className="landingPage">
        <div className="background">
          <div className="bg-block"></div>

          <div className="start">
            <div className="start-title">
              <h3>START YOUR TRIP</h3>
              <div className="start-line"></div>
            </div>
            <div className="start-pic"></div>
          </div>
        </div>
        <div className="title">
          <h2>Triplaner</h2>
          <h1>Triplaner</h1>
          <h4>旅行的好夥伴！最佳旅程規劃網站</h4>
        </div>

      </div>

      <div className="section searchSection">
        <div className="searchTag">
          <div className="tag-text">
            <p>The best assistant with your travel.</p>
          </div>
        </div>
        <div className="searchContent">
          <h1 className="sectionTitle">Search</h1>
          <div className="searchBar">
            <form className="searchBarWarp">
              <select class="form-select">
                <option selected>所有國家</option>
              </select>
              <select class="form-select" >
                <option selected>所有城市</option>
              </select>
              <input class="form-control" type="text" placeholder="請輸入景點關鍵字..." />
              <button />
            </form > 
          </div>
        </div>
      </div>

      <div className="section newsSection">
        <h1 className="sectionTitle">News</h1>
        <div className="newsWarp">
          <div className="newsList">
            <ul>
              <li>
                <p>
                  2021/11/20 親子放電趣！台北日夜皆美私房點 美拍打卡飽覽城市風光
                </p>
              </li>
              <li>
                <p>
                  2021/11/20 桃園米干節22日起估湧2萬人塞爆 警三層交管接駁線出爐
                </p>
              </li>
              <li>
                <p>
                  2021/11/20
                  超浮誇「6公分厚豬排三明治」！台北人氣早午餐「日初」期間限定吃得到，店推、主打美味一次看
                </p>
              </li>
              <li>
                <p>
                  2021/11/20
                  荷包準備好！嚴選7條人氣必逛日本東京商店街，逛不完的街、買不完的戰利品
                </p>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary">+ More News</button>
        </div>
      </div>
      <div className="section recommendedSection">
        <h1 className="sectionTitle">Recommended</h1>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", width: "70%" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Popular Destinaiton | 熱門景點" value="1" />
                <Tab label="Natural | 自然景觀" value="2" />
                <Tab label="Urban | 城市觀光" value="3" />
                <Tab label="Hotel | 住宿" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <SiteWindow />
            </TabPanel>
            <TabPanel value="2">
              <SiteWindow />
            </TabPanel>
            <TabPanel value="3">
              <SiteWindow />
            </TabPanel>
            <TabPanel value="4">
              <SiteWindow />
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      <div className="section popularRouteSection">
        <h1 className="sectionTitle">Popular Route</h1>
        <RouteItem />

        <div className="moreRoute">
          <button className="btn btn-primary">+ More News</button>
        </div>
      </div>


      <div className="addTripButton">
        <button className="btn btn-secondary">
          <span>現在就開始規劃我的旅程！</span></button>
      </div>
    </Fragment>
  );
};
export default Index;
