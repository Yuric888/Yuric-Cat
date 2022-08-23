import IconGrid from '../../../../Images_Svg/IconGrid'
import IconList from '../../../../Images_Svg/IconList'
import './ButtonList.css'
const ButtonList = ({direction, show, onClick}) => {
  return (
    <ul className={ show === true ? "wrapper-button active" : "wrapper-button" } 
    >
      {direction && direction === "grid" ? 
      <li onClick={(e) => onClick(e)}><IconGrid  color={show === true ? "white" : "black" } /></li>
      : 
      <li onClick={(e) => onClick(e)}><IconList  fill={show === true ? "white" : "black"}/></li>
      }
    </ul>
  )
}

export default ButtonList