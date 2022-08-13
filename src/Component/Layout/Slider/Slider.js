import './Slider.css'
import DataSlider from './DataSlider'
import { useEffect, useState } from 'react'
import BtnSlider from './BtnSlider'
const Slider = () => {
  const [state, setState] = useState({slideIdx: 1, });
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
  
    return () => {
      clearInterval(interval);
    }
  })
  
  const nextSlide = () => {
    if(state.slideIdx !== DataSlider.length){
      setState(pre => ({...pre, slideIdx: state.slideIdx + 1}))
    }else if(state.slideIdx === DataSlider.length){
      setState(pre => ({...pre, slideIdx: 1}))
    }
    
  }
  const prevSlide = () => {
     if(state.slideIdx !== 1){
      setState(pre => ({...pre, slideIdx: state.slideIdx - 1}))
    }else if(state.slideIdx === 1){
      setState(pre => ({...pre, slideIdx: DataSlider.length}))
    }
    
  }
  const moveDot = (id) => {
    setState(pre => ({...pre, slideIdx: id}))
  }
  return (
    <div className="wrapper-slider">
        <div className="container-slider">
         {DataSlider?.map((item, idx) => {
          return(
            <div
            className={ state.slideIdx === idx + 1 ? "slide active" : "slide"}
            key={idx}
            >
              <img 
                src={item.url}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          )
         })}
         {/* <button style={{cursor: 'pointer', width: '100px', height: '100px', background:'red', position: 'absolute'}}>
          <img style={{width: "25px", height: "25px"}} alt="" src="https://raw.githubusercontent.com/Ziratsu/slider-react/main/src/Components/Slider/icons/right-arrow.svg" />
         </button> */}
         <BtnSlider moveSlide={prevSlide} direction="prev" width="80" height="80" fill/>
         <BtnSlider moveSlide={nextSlide} direction="next" width="80" height="80" fill/>
         <div className="container-dots">
          {Array.from({length: 6}).map((item, index) => (
            <div  
              key={index}
              onClick={() => moveDot(index + 1)}
              className={state.slideIdx === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
         </div>
        </div>
    </div>
  )
}

export default Slider