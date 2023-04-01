import "./Slide.scss";
import Slider from "infinite-react-carousel";


type Props = {
  children: string | JSX.Element | JSX.Element[];
  slidesToShow: number;
  arrowsScroll: number;
}


const Slide = ({ children, slidesToShow, arrowsScroll }: Props) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;