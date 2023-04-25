import { Link, useMatches, useLocation } from "react-router-dom";

import pageLinks from "../../../shared/JSON/pageLinks.json";

const BreadCrumbs = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  const matches = useMatches();

  const crumbs = matches
    .map((match) => {
      return {
        id: match.id,
        path: match.pathname,
        name: pageLinks[match.pathname]
          ? pageLinks[match.pathname]
          : match.params.id,
      };
    })
    .filter((path) => path.name);

  const showCrumbs = currentPath !== "/Triplaner";

  return (
    showCrumbs && (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
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
