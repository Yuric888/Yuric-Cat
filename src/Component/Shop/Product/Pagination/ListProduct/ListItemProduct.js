import './ListItemProduct.css';
import IconPlus from '../../../../Images_Svg/IconPlus';
import IconShop from '../../../../Images_Svg/IconShop';
const ListItemProduct = ({data, showLayout}) => {
  if(data === []){
    return(
      <div>Data Available</div>
    )
  }
  return (
      <div className="wrapper-list">
      <div className="container-list">
    <div className={showLayout && showLayout === true ? "content-layout-list" : "content-layout-grid"}>
          {data && data.map((item, idx) => {
            return(
            <div className="card-product" key={idx}>
            <div className="card-image">
              <img alt={item.title} src={item.url ? item.url : "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
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
              <h1 className="card-content-title">{item.title ? item.title : ""}</h1>
              <div className="card-content-price">
                <p>${item.price_2 ? `${item.price_1} - ` : item.price_1}</p>
                <p className="card-content-line-through">{item.price_2 ? ` $${item.price_2}` : ""}</p>
              </div>
            </div>
            <div className="card-content-list">
              <h1 className="card-content-title">{item.title ? item.title : ""}</h1>
              <div className="card-content-price">
                <p>${item.price_2 ? `${item.price_1} - ` : item.price_1}</p>
                <p className="card-content-line-through">{item.price_2 ? ` $${item.price_2}` : ""}</p>
              </div>
              <p className="card-content-info">{item.content ? item.content : ""}</p>
              <div className="card-button">
              <div className="icon-shop">
                  <p>add to card</p>
                </div>
                <div className="icon-plus">
                  <IconPlus color="#666" width="22" height="22"/>
                </div>
              </div>
            </div>
          </div>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default ListItemProduct