import { useState } from 'react'
import ButtonList from './ButtonList/ButtonList'
import './HeaderProduct.css'
const HeaderProduct = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show)
  }
  return (
    <div className="wrapper-header-product">
      <div className="show-result"><p>Show to 123 result</p></div>
      <div className="button-change">
      <ButtonList onClick={handleClick} show={!show} direction="grid" />
      <ButtonList onClick={handleClick} show={show} direction="list" />
      </div>
    </div>
  )
}

export default HeaderProduct