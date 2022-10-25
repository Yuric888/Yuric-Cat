import Behavior from './Behavior/Behavior'
import './Layout.css'
import Slider from './Slider/Slider'
const Layout = () => {
  return (
    <div className="wrapper-layout">
      <Slider />
      <Behavior />
    </div>
  )
}

export default Layout