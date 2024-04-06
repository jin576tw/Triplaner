import {
  Link,
  useMatches,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import PageLinks from "../../../shared/JSON/pageLinks.json";

import RegionAlias from "../../../shared/JSON/regionAlias.json";
import { flatten } from "../../../core/utils/flatten.utils";
import { RegionItem } from "../../../core/models/region-item.model";
import { useEffect, useState } from "react";

const BreadCrumbs = () => {
  // 載入連結
  const [pageLink, setPageLink] = useState<Record<string, any>>({});

  // 載入地區
  const [regionData, setRegionData] = useState<RegionItem[]>([]);

  // 當前Url
  const location = useLocation();
  const currentPath = location.pathname + location.search;

  /** 抓取queryParams**/
  const [searchParams] = useSearchParams();

  // 當前頁面地區代碼
  const regionCode = searchParams.get("region");

  const matches = useMatches();

  useEffect(() => {
    setPageLink(PageLinks);

    setRegionData(RegionAlias);
  }, []);

  /** 取得路徑位置 */
  const formatPath = (path: string) => {
    return path === "/Triplaner/search" ||
      path.includes("/Triplaner/search/detail")
      ? path + location.search
      : path;
  };

  /** 取得路徑名稱 */
  const formatPathName = (path: string) => {
    if (path === "/Triplaner/search" && regionCode) {
      const regionList = flatten(regionData, "children");

      const region = regionList.find((region: RegionItem) => {
        return region.code === regionCode;
      });

      return pageLink[path] + `-${region ? region.name : ""}`;
    }

    if (path.includes("/Triplaner/search/detail")) {
      return searchParams.get("title");
    }

    return pageLink[path] as string;
  };

  const crumbs = matches
    .map((match) => {
      return {
        id: match.id,
        path: formatPath(match.pathname),
        name: formatPathName(match.pathname),
      };
    })
    .filter((path) => path.name);

  const showCrumbs =
    location.pathname !== "/Triplaner" && location.pathname !== "/Triplaner/";

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
