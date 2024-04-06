import "./SiteWindow.scss";
import WindowItem from "./WindowItem/WindowItem";
import SliderComponent from "../../../../shared/components/SliderComponent/SliderComponent";

interface SiteWindowProps {
  sites: any[];
}

const SiteWindow = (props: SiteWindowProps) => {
  const sites = props.sites.map((site) => (
    <WindowItem name={site} key={site} />
  ));

  return <SliderComponent nodes={sites} count={4} />;
};

export default SiteWindow;
