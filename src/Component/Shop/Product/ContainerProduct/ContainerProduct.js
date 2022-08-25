import { useDispatch, useSelector } from 'react-redux'
import './ContainerProduct.css'
import DataProduct from './dataProduct'

const ContainerProduct = () => {
   const showLayout = useSelector((state) => state.reduce.showLayout)
  // const dispatch = useDispatch()
  return (
    <div className="wrapper-list">
      <div className="container-list">
    {/* {DataProduct && DataProduct} */}
        <div className={showLayout && showLayout === true ? "content-layout-list" : "content-layout-grid"}>
          <div className="card-product">asf</div>
          <div className="card-product">saf</div>
          <div className="card-product">safd</div>
          <div className="card-product">rjhy</div>
          <div className="card-product">jtdyj</div>
          <div className="card-product">fdtyjn</div>
          <div className="card-product">seht</div>
          <div className="card-product">aerhyvgrh</div>
        </div>
      </div>
    </div>
  )
}

export default ContainerProduct