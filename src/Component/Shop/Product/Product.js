import DataProduct from '../../Data/DataProduct';
import HeaderProduct from './HeaderProduct/HeaderProduct'
import Pagination from './Pagination/Pagination'
import './Product.css';
import { useSelector } from "react-redux";
const Product = () => {
  const itemPage = 8;
  const state = useSelector(state => state.filter.valueSearch)
 
   // eslint-disable-next-line array-callback-return
   const data =  DataProduct.filter((val) => {
    if(state === ""){
      return val
    }else if(val.title.toLowerCase().includes(state.toLowerCase())){
        return val
      }
    })
    return (
    <div className="wrapper-product">
      <HeaderProduct />
      <Pagination
            itemPage={itemPage}
            data={data ?? []}
           />
    </div>
  )
}

export default Product