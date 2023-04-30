import { useSearchParams } from "react-router-dom";

import "./index.scss";

import RegionAlias from "../../../../shared/JSON/regionAlias.json";

const Index = () => {
  const [searchParams] = useSearchParams();

  const searchRegion = RegionAlias[searchParams.get("region")];

  return <h1 className="regionTitle">{searchRegion}</h1>;
};

export default Index;
