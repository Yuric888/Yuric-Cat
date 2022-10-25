
import './Slider.css'

const SliderEffect = ({data = [], stateSlide}) => {
  return (
    <div className="content-slider">
    {data?.map((item, idx) => {
          return(
            <div
            className={ stateSlide === idx + 1 ? "slide active" : "slide"}
            key={idx}
            >
              <img 
                src={item.url}
                alt={item.title}
              />
              <div className="slide-info">
                <h1>{item.title}</h1>
                <p>{item.subTitle}</p>
              </div>
            </div>
          )
         })}
    </div>
  )
}

export default SliderEffect