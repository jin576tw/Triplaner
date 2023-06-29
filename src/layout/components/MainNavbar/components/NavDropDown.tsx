import Dropdown from "react-multilevel-dropdown";
import { NavLink, useSearchParams } from "react-router-dom";
import { RegionItem } from "../../../../core/models/region-item.model";

export interface NavDropDownProps {
  title: string;
  items: RegionItem[];
}

const NavDropDown = (props: NavDropDownProps) => {
  const [searchParams] = useSearchParams();

  // 地區
  const regionCode = searchParams.get("region");

  const dropDownItems = props.items;

  return (
    <Dropdown title={props.title} position="right" openOnHover={true}>
      {dropDownItems.map((item: RegionItem) => {
        return (
          <Dropdown.Item
            key={item.code}
            isActive={regionCode === item.code}
            className={regionCode === item.code ? "item_active" : ""}
          >
            {item.children && item.children.length > 0 ? (
              item.name
            ) : (
              <NavLink to={`search?region=${item.code}`}>{item.name}</NavLink>
            )}

            {item.children && item.children.length > 0 ? (
              <Dropdown.Submenu position="right">
                {item.children.map((item: RegionItem) => {
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
