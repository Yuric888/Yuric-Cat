import { useEffect, useState } from "react";
import LogoYuric from '../Images_Svg/LogoYuric'
import DataHeader from '../Data/DataHeader'
import './Header.css';
import { Link ,NavLink} from "react-router-dom";
const Header = () => {
  const [scrollState, setscrollState] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  useEffect(() => {
    const handleScrollHeader = () => {
      setscrollState((scrollState) => {
        if(!scrollState && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)){
          return true;
        }
        if(scrollState && (document.body.scrollTop < 4 || document.documentElement.scrollTop < 4)){
          return false;
        }
      })
      return scrollState;
    }
    
     window.addEventListener("scroll", handleScrollHeader);
    // return () => window.removeEventListener("scroll", handleScrollHeader);
  })
  const handleClickHeader = () => {
    setToggleNav(!toggleNav)
  }
  const handleHome = () => {
    setToggleNav(false)
  }
  
  return (
    <div>
    <header className={scrollState ? "wrapper-header active": "wrapper-header"}>
      <div className={scrollState ? "container-header active" : "container-header"}>
        <div className="logo-header">
          <Link to="/">
          <div onClick={handleHome}>
            <LogoYuric />
            </div>
          </Link>
        </div> 
        <div className={toggleNav? "navbar active" : "navbar"}>
          <ul>
          { DataHeader.map((item, idx) => {
            return(
               <li 
               key={idx}
               onClick={handleClickHeader}
               >
               <NavLink to={item.href}>
                <h1>{item.name}</h1>
                </NavLink>
              </li>
            )
          })}  
          </ul>
        </div>
        <div 
        className={toggleNav ? "toggle-header active" : "toggle-header"}
        onClick={handleClickHeader}
        ></div> 
      </div>
    </header>
     <div className="bot-header"></div>
    </div>
  )
}
export default Header;