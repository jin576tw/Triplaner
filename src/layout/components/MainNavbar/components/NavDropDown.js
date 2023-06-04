import Dropdown from "react-multilevel-dropdown";
import { NavLink, useSearchParams } from "react-router-dom";

const NavDropDown = (props) => {
  const [searchParams] = useSearchParams();

  // 地區
  const regionCode = searchParams.get("region");

  const dropDownItems = props.items;

  const hasSubOptions = (item) => {
    return item.children && item.children.length > 0;
  };

  return (
    <Dropdown title={props.title} position="right" openOnHover={true}>
      {dropDownItems.map((item) => {
        return (
          <Dropdown.Item
            key={item.code}
            isActive={regionCode === item.code}
            className={regionCode === item.code ? "item_active" : ""}
          >
            {hasSubOptions(item) ? (
              item.name
            ) : (
              <NavLink to={`search?region=${item.code}`}>{item.name}</NavLink>
            )}

            {hasSubOptions(item) ? (
              <Dropdown.Submenu position="right">
                {item.children.map((item) => {
                  return (
                    <Dropdown.Item
                      key={item.code}
                      isActive={regionCode === item.code}
                      className={regionCode === item.code ? "item_active" : ""}
                    >
                      <NavLink to={`search?region=${item.code}`}>
                        {item.name}
                      </NavLink>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Submenu>
            ) : null}
          </Dropdown.Item>
        );
      })}
    </Dropdown>
  );
};

export default NavDropDown;
