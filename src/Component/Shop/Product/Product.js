import DataProduct from '../../Data/DataProduct';
import HeaderProduct from './HeaderProduct/HeaderProduct'
import Pagination from './Pagination/Pagination'
import './Product.css';const Product = () => {
  const itemPage = 9
  return (
    <div className="wrapper-product">
      <HeaderProduct />
      <Pagination
            itemPage={itemPage}
            data={DataProduct ?? []}
           />
    </div>
  )
}

export default Product