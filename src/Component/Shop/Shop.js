import './Shop.css'
import Filter from './Filter/Filter';
import Product from './Product/Product'
const Shop = () => {
  return (
    <div className="wrapper-shop">
      <div className="container-shop">
        <div className="content-shop">
          <Filter />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Shop