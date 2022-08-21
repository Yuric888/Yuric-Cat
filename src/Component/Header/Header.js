import { useEffect, useState } from "react";
import LogoYuric from '../Images_Svg/LogoYuric'
import DataHeader from "./DataHeader";
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollState, setscrollState] = useState(false);
  const [state, setState] = useState({clickHeaderState: false})
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
    setState(pre => ({...pre, clickHeaderState: !state.clickHeaderState}))
  }
  return (
    <div>
    <header className={scrollState ? "wrapper-header active": "wrapper-header"}>
      <div className={scrollState ? "container-header active" : "container-header"}>
        <div className="logo-header">
          <Link to="/">
            <LogoYuric />
          </Link>
        </div> 
        <div className={state.clickHeaderState ? "navbar active" : "navbar"}>
          <ul>
          { DataHeader.map((item, idx) => {
            return(
               <li 
               key={idx}
               onClick={() => setState(prev => ({...prev,clickHeaderState: false}))}
               >
               <Link to={item.href}>
                <h1>{item.name}</h1>
                </Link>
              </li>
            )
          })}  
          </ul>
        </div>
        <div 
        className={state.clickHeaderState ? "toggle-header active" : "toggle-header"}
        onClick={handleClickHeader}
        ></div> 
      </div>
    </header>
     <div className="bot-header"></div>
    </div>
  )
}
export default Header;