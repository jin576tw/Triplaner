import { NavLink } from "react-router-dom";
import "./MainNavbar.scss";
import RegionAlias from "../../../shared/JSON/regionAlias.json";
import NavDropDown from "./components/NavDropDown";

const MainNavbar = () => {
  const regionData = RegionAlias;

  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink to="" className="navbar-brand" end>
        <span>Triplaner</span>
      </NavLink>

      <ul className="navbar-nav">
        <div className="navbar-wrap">
          <li className="nav-item">
            <NavLink to="">最新消息</NavLink>
          </li>

          <li className="nav-item nav-dropdown">
            <NavDropDown title="探索景點 ▾" items={regionData} />
          </li>

          <li className="nav-item">
            <NavLink to="trip">分享行程</NavLink>
          </li>
        </div>
        <div className="navbar-wrap">
          <li className="nav-item">
            <NavLink>
              <div className="nav-icon nav-ask"></div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="addTrip">
              <div className="nav-icon nav-trip"></div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="member">
              <div className="nav-icon nav-member"></div>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavbar;
