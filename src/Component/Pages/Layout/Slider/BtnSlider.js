
import './Slider.css';
import IconNext from '../../../Images_Svg/icon-svg/IconNextSvg.svg';
import IconPrev from '../../../Images_Svg/icon-svg/IconPrevSvg.svg';
const BtnSlider = ({moveSlide, direction, width="50", height="50", fill, className}) => {
  return (
    <button 
        className={direction === "next"? "btn-slide next" : "btn-slide prev"}
        onClick={moveSlide}
    >
        {direction === "next" ? 
        <img src={IconNext} alt='' className={className} />
        : 
        <img src={IconPrev} alt='' className={className} />
        }
    </button>
  )
}

export default BtnSlider