import IconNext from '../../Images_Svg/IconNext';
import IconPrev from '../../Images_Svg/IconPrev';
import './Slider.css';

const BtnSlider = ({moveSlide, direction, width="50", height="50", fill}) => {
  return (
    <button 
        className={direction === "next"? "btn-slide next" : "btn-slide prev"}
        onClick={moveSlide}
    >
        {direction === "next" ? 
        <IconNext className="icon-next" width={width} height={height} fill={"#9d7903"}/>
        : 
        <IconPrev className="icon-prev" width={width} height={height} fill={"#9d7903"} />
        }
    </button>
  )
}

export default BtnSlider