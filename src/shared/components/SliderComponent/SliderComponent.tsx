import Slider, { CustomArrowProps } from "react-slick";
import "./SliderComponent.scss";

interface SliderComponentProps {
  data: React.ReactNode[];
  count: number;
}

const CustomNextArrow = ({ onClick }: CustomArrowProps) => {
  return <div className="custom-arrow next-arrow" onClick={onClick} />;
};

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => {
  return <div className="custom-arrow prev-arrow" onClick={onClick} />;
};

const SliderComponent = (props: SliderComponentProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.count,
    slidesToScroll: props.count,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const data = props.data;

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{data.map((result) => result)}</Slider>
    </div>
  );
};

export default SliderComponent;
