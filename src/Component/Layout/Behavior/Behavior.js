import { useEffect, useState } from 'react'
import './Behavior.css'
import DataBehavior from './DataBehavior.js'
const Behavior = () => {
  const [state, setState] = useState({activeState: true})
  useEffect(() =>{
    const handleChange = () => {
      let scroll = window.pageYOffset;
      console.log('scroll', scroll)
  }
  window.addEventListener('scroll', handleChange)

  return window.removeEventListener('scroll', handleChange)
  })
  
  return (
    <div className="wrapper-behavior">
      
      {DataBehavior && DataBehavior.map((item, idx) => {
        return(
          <div key={idx} style={{backgroundImage: `url(${item.url})`}} className="content-behavior">
           <div className="container-behavior">
           <p className={state.activeState === true ? "text-1 active" : "text-1"}>{item.p1}</p>
           <p className={state.activeState === true ? "text-2 active" : "text-2"}>{item.p2}</p>
           <p className={state.activeState === true ? "text-3 active" : "text-3"}>{item.p3}</p>
          </div>
          </div>
        )
      })}
    </div>
  )
}

export default Behavior