import { useEffect, useState } from "react";
import LogoYuric from '../Images_Svg/LogoYuric'
import './Header.css';
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
    <header className={scrollState ? "wrapperHeader active": "wrapperHeader"}>
      <div className={scrollState ? "containerHeader active" : "containerHeader"}>
        <div className="logo-header"><LogoYuric /></div> 
        <div className={state.clickHeaderState ? "navbar active" : "navbar"}>
          <ul>
            <li>
              <a href="#home"><p>Home</p></a>
            </li>
            <li>
              <a href="#about"><p>About</p></a>
            </li>
            <li>
              <a href="#info"><p>Info</p></a>
            </li>
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