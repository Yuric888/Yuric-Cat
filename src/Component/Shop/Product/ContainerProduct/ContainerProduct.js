import { useDispatch, useSelector } from 'react-redux'
import './ContainerProduct.css'
import DataProduct from './dataProduct'
import CatImg from '../../../Images_Svg/Cat-unplash-1.svg'
import IconPlus from '../../../Images_Svg/IconPlus';
import IconShop from '../../../Images_Svg/IconShop';
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
              <div className="card-image-button">
                <div className="icon-plus">
                  <IconPlus color="#666" width="22" height="22"/>
                </div>
                <div className="icon-shop">
                  <IconShop color="#666" width="22" height="22" />
                </div>
              </div>
            </div>
            <div className="card-content-grid">
              <h1 className="card-content-title">title</h1>
              <div className="card-content-price">
                <p>$34294&nbsp;-&nbsp;</p>
                <p className="card-content-line-through">$43324</p>
              </div>
            </div>
            <div className="card-content-list">
              <h1 className="card-content-title">title</h1>
              <div className="card-content-price">
                <p>$34294&nbsp;-&nbsp;</p>
                <p className="card-content-line-through">$43324</p>
              </div>
              <p className="card-content-info">asdfsdf</p>
              <div className="card-button">
              <div className="icon-shop">
                  <IconShop color="#666" width="22" height="22" />
                </div>
                <div className="icon-plus">
                  <IconPlus color="#666" width="22" height="22"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerProduct