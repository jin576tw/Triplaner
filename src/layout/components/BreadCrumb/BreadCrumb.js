import {
  Link,
  useMatches,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import PageLinks from "../../../shared/JSON/pageLinks.json";

import RegionAlias from "../../../shared/JSON/regionAlias.json";
import { flatten } from "../../../core/utils/flatten.utils";

const BreadCrumbs = () => {
  // 當前Url
  const location = useLocation();
  const currentPath = location.pathname + location.search;

  /** 抓取queryParams**/
  const [searchParams] = useSearchParams();

  // 當前頁面地區代碼
  const regionCode = searchParams.get("region");

  const matches = useMatches();

  /** 取得路徑位置 */
  const formatPath = (path) => {
    return path === "/Triplaner/search" ? path + location.search : path;
  };

  /** 取得路徑名稱 */
  const formatPathName = (path) => {
    if (path === "/Triplaner/search" && regionCode) {
      const regionList = flatten(RegionAlias, "children");

      const region = regionList.find((region) => {
        return region.code === regionCode;
      });

      return PageLinks[path] + `-${region.name}`;
    }

    return PageLinks[path];
  };

  const crumbs = matches
    .map((match) => {
      return {
        id: match.id,
        path: formatPath(match.pathname),
        name: PageLinks[match.pathname]
          ? formatPathName(match.pathname)
          : match.params.id,
      };
    })
    .filter((path) => path.name);

  const showCrumbs = location.pathname !== "/Triplaner";

  return (
    showCrumbs && (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-2">
          {crumbs.map((crumb) => {
            const isActive = currentPath === crumb.path;

            return !isActive ? (
              <li key={crumb.id} className="breadcrumb-item">
                <Link to={crumb.path}>{crumb.name} </Link>
              </li>
            ) : (
              <li key={crumb.id} className="breadcrumb-item active">
                {crumb.name}
              </li>
            );
          })}
        </ol>
      </nav>
    )
  );
};

export default BreadCrumbs;
