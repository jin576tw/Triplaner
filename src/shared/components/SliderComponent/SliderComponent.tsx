import Slider, { CustomArrowProps } from "react-slick";
import "./SliderComponent.scss";

interface SliderComponentProps {
  nodes: React.ReactNode[];
  showDots?: boolean;
  showArrows?: boolean;
  count: number;
}

const CustomNextArrow = ({ onClick }: CustomArrowProps) => {
  return <div className="custom-arrow next-arrow" onClick={onClick} />;
};

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => {
  return <div className="custom-arrow prev-arrow" onClick={onClick} />;
};

const SliderComponent = ({
  nodes,
  count,
  showDots = true,
  showArrows = true,
}: SliderComponentProps) => {
  const settings = {
    dots: showDots,
    arrows: showArrows,
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: count,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{nodes.map((node) => node)}</Slider>
    </div>
  );
};

export default SliderComponent;
