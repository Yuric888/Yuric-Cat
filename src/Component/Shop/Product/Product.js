import ContainerProduct from './ContainerProduct/ContainerProduct'
import HeaderProduct from './HeaderProduct/HeaderProduct'
import './Product.css'
const Product = () => {
  return (
    <div className="wrapper-product">
      <HeaderProduct />
      <ContainerProduct />
    </div>
  )
}

export default Product