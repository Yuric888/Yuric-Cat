import { useDispatch, useSelector } from 'react-redux'
import { changeLayout } from '../../../../../Redux/Reducer/reducer'
import ButtonList from './ButtonList/ButtonList';
import './HeaderProduct.css'
import Filter from '../../Filter/Filter'
const HeaderProduct = () => {
  const showLayout = useSelector((state) => state.reduce.showLayout)
  // const state = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(changeLayout())
  }
  return (
    <div className="wrapper-header-product">
      {/* <div className="show-result"><h1>Showing to from {state.dataItem.length} result</h1></div>
       */}
      <Filter />
      <div className="button-change">
      <ButtonList handleClick={handleClick} show={!showLayout} direction="grid" />
      <ButtonList handleClick={handleClick} show={showLayout} direction="list" />
      </div>
    </div>
  )
}

export default HeaderProduct