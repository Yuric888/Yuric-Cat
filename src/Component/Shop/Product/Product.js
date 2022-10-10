import HeaderProduct from './HeaderProduct/HeaderProduct'
import Pagination from './Pagination/Pagination'
import './Product.css';
import { useSelector } from "react-redux";
import Loading from '../../Loading/Loading';
const Product = () => {
  const itemPage = 6;
  const state = useSelector(state => state.filter)
    return (
    <div className="wrapper-product">
      <HeaderProduct />
      {state.status === 'idle' && state.dataItem.length > 0 
      ? 
      <Pagination
        itemPage={itemPage}
        data={state.dataItem ?? []}
        />
      :
      <Loading />
      }
    </div>
  )
}

export default Product