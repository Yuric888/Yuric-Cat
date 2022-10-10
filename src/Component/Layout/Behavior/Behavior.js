import './Behavior.css'
import DataBehavior from './DataBehavior.js'
const Behavior = () => {
  return (
    <div className="wrapper-behavior">
      {DataBehavior && DataBehavior.map((item, idx) => {
        return(
          <div key={idx} style={{backgroundImage: `url(${item.url})`}} className="content-behavior">
           <div className="container-behavior">
           <h1 className="text-1">{item.p1}</h1>
           <h1 className="text-2">{item.p2}</h1>
           <h1 className="text-3">{item.p3}</h1>
          </div>
          </div>
        )
      })}
    </div>
  )
}

export default Behavior