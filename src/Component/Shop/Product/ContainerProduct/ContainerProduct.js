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
          <div className="card-product">
            <div className="card-image">
              <img alt="cat" src={"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="card-content-grid"></div>
            <div className="card-content-list"></div>
          </div>
         <div className="card-product">
            <div className="card-image">
              <img alt="cat" src={"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="card-content-grid"></div>
            <div className="card-content-list"></div>
          </div>
          <div className="card-product">
            <div className="card-image">
              <img alt="cat" src={"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="card-content-grid"></div>
            <div className="card-content-list"></div>
          </div>
          <div className="card-product">
            <div className="card-image">
              <img alt="cat" src={"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="card-content-grid"></div>
            <div className="card-content-list"></div>
          </div>
          <div className="card-product">
            <div className="card-image">
              <img alt="cat" src={"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="card-content-grid"></div>
            <div className="card-content-list"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerProduct