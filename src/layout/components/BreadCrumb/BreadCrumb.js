import {
  Link,
  useMatches,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import PageLinks from "../../../shared/JSON/pageLinks.json";

import RegionAlias from "../../../shared/JSON/regionAlias.json";

const BreadCrumbs = () => {
  const location = useLocation();

  const currentPath = location.pathname + location.search;

  const matches = useMatches();

  const [searchParams] = useSearchParams();

  const region = searchParams.get("region");

  /** 取得路徑名稱 */
  const getPathName = (path) => {
    if (path === "/Triplaner/search" && region) {
      return PageLinks[path] + `-${RegionAlias[searchParams.get("region")]}`;
    }

    return PageLinks[path];
  };

  const crumbs = matches
    .map((match) => {
      return {
        id: match.id,
        path: match.pathname + location.search,
        name: PageLinks[match.pathname]
          ? getPathName(match.pathname)
          : match.params.id,
      };
    })
    .filter((path) => path.name);

  const showCrumbs = currentPath !== "/Triplaner";

  return (
    showCrumbs && (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-2">
          {crumbs.map((crumb) => {
            const isActive = currentPath === crumb.path;

            return !isActive ? (
              <li key={crumb.id} className="breadcrumb-item">
                <Link to={crumb.path}>{crumb.name}</Link>
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
