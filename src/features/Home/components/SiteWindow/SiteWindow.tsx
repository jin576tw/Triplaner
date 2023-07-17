import "./SiteWindow.scss";
import Slider from "react-slick";
import WindowItem from "./WindowItem/WindowItem";

interface SiteWindowProps {
  sites: any[];
}

const SiteWindow = (props: SiteWindowProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const sites = props.sites;

  return (
    <div className="siteWindow">
      <Slider {...settings}>
        {sites.map((site) => (
          <WindowItem name={site} />
        ))}
      </Slider>
    </div>
  );
};

export default SiteWindow;
