import './Slider.css'
import DataSlider from './DataSlider'
import { useEffect, useState } from 'react'
import BtnSlider from './BtnSlider'
import SliderEffect from './SliderEffect'
  const dataSlideSlice = (DataSlider ?? []).slice(0, 6)
  console.log('dataSlideSlice', dataSlideSlice[1])
const Slider = () => {
  const [state, setState] = useState({slideIdx: 1, });
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
  
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
         <SliderEffect data={dataSlideSlice} stateSlide={state.slideIdx} />
         <BtnSlider moveSlide={prevSlide} direction="prev" className={"icon-prev"}/>
         <BtnSlider moveSlide={nextSlide} direction="next" className={"icon-next"}/>
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