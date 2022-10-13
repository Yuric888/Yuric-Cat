import React from 'react'
import IconPlus from '../../../../../Images_Svg/IconPlus'
import IconShop from '../../../../../Images_Svg/IconShop'
import './ProductGrid.css'
const ProducGrid = ({
    data,
    openModal,
    openCard
}) => {
  return (
    <div className="wrapper-grid">
         <div className="card-image">
                <img data-type="editable" alt={data.title} src={data.image ? data.image.url : "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
                <div className="card-button">
                  <div className="icon-plus" onClick={()=>openModal(data)}>
                    <IconPlus color="#666" width="28" height="28"/>
                  </div>
                  <div className="icon-shop" onClick={()=>openCard(data)}>
                    <IconShop color="#666" width="28" height="28" />
                  </div>
                </div>
          </div>
          <div className="card-content-grid">
            <h1 className="card-content-title">{data.title ? data.title : ""}</h1>
            <div className="card-content-price">
              {data.price_2 ? 
                <p>$ {data.price_1} - $ {data.price_2}</p>
                :
                <p>{data.price_1}</p>
              }
            </div>
          </div>
    </div>
  )
}

export default ProducGrid