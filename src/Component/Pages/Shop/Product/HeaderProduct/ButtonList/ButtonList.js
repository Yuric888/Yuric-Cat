import IconGrid from '../../../../../Images_Svg/IconGrid'
import IconList from '../../../../../Images_Svg/IconList'
import './ButtonList.css'
const ButtonList = ({direction, show, handleClick}) => {
  return (
    <ul className={ show === true ? "wrapper-button active" : "wrapper-button" } 
    >
      {direction && direction === "grid" ? 
      <li id="grid-data" onClick={handleClick}><IconGrid  color={show === true ? "white" : "black" } /></li>
      : 
      <li  id="list-data" onClick={handleClick}><IconList  fill={show === true ? "white" : "black"}/></li>
      }
    </ul>
  )
}

export default ButtonList