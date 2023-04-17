import { NavLink } from "react-router-dom";
import "./MainNavbar.scss";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        <span>Triplaner</span>
      </NavLink>

      <ul className="navbar-nav">
        <div className="navbar-wrap">
          <li className="nav-item">
            <NavLink>最新消息</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search">景點查詢</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trip">分享行程</NavLink>
          </li>
        </div>
        <div className="navbar-wrap">
          <li className="nav-item">
          <NavLink>
            <div className="nav-icon nav-ask"></div>
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/addTrip">
            <div className="nav-icon nav-trip"></div>
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/member">
          <div className="nav-icon nav-member"></div>
          </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavbar;
