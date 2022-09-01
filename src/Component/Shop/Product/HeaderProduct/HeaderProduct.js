import { useDispatch, useSelector } from 'react-redux'
import { changeLayout } from '../../../../Redux/Reducer/reducer'
import ButtonList from './ButtonList/ButtonList'
import './HeaderProduct.css'
const HeaderProduct = () => {
  const showLayout = useSelector((state) => state.reduce.showLayout)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(changeLayout())
  }
  return (
    <div className="wrapper-header-product">
      <div className="show-result"><h1>Show to 123 result</h1></div>
      <div className="button-change">
      <ButtonList handleClick={handleClick} show={!showLayout} direction="grid" />
      <ButtonList handleClick={handleClick} show={showLayout} direction="list" />
      </div>
    </div>
  )
}

export default HeaderProduct