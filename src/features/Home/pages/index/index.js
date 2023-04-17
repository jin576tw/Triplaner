import { Fragment } from "react";
import "./index.scss";
const Index = () => {
  return (
    <Fragment>
      <div className="landingPage">
        <div className="background">
          <div className="bg-block"></div>
        </div>
        <div className="title">
          <h2>Triplaner</h2>
          <h1>Triplaner</h1>
          <h4>旅行的好夥伴！最佳旅程規劃網站</h4>
        </div>
        <div className="start">
          <div className="start-title">
            <h3>START YOUR TRIP</h3>
            <div className="start-line"></div>
          </div>
          <div className="start-pic"></div>
        </div>
      </div>

      <div className="searchSection">
        <div className="searchTag">
          <div className="tag-text">
            <p>The best assistant with your travel.</p>
          </div>
        </div>
        <div className="searchContent">
          <h1 className="homeTitle">Search</h1>
          <div className="searchBar">
            <div className="searchBarWarp">
              <select></select>
              <select></select>
              <select></select>
              <button></button>
            </div>
          </div>
        </div>
      </div>

      <div className="newsSection">
        <h1 className="homeTitle">News</h1>
        <div className="newsWarp">
          <div className="newsList">
            <ul>
              <li>
                <p>
                  2021/11/20
                  年放戶上。不林、的、年改大輾穎頭不計價遇…，種檸別，22222222222222222222
                </p>
              </li>
              <li>
                <p>
                  2021/11/20
                  年放戶上。不林、的、年改大輾穎頭不計價遇…，種檸別，22222222222222222222
                </p>
              </li>
              <li>
                <p>
                  2021/11/20
                  年放戶上。不林、的、年改大輾穎頭不計價遇…，種檸別，22222222222222222222
                </p>
              </li>
              <li>
                <p>
                  2021/11/20
                  年放戶上。不林、的、年改大輾穎頭不計價遇…，種檸別，22222222222222222222
                </p>
              </li>
            </ul>
          </div>
          <button>+ More News</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
