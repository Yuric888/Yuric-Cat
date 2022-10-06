import HeaderProduct from './HeaderProduct/HeaderProduct'
import Pagination from './Pagination/Pagination'
import './Product.css';
import { useSelector } from "react-redux";
const Product = () => {
  const itemPage = 8;
  const state = useSelector(state => state.filter)
    return (
    <div className="wrapper-product">
      <HeaderProduct />
      <Pagination
            itemPage={itemPage}
            data={state.dataItem ?? []}
           />
    </div>
  )
}

export default Product