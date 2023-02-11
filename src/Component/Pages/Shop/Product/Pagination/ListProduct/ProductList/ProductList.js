import IconPlus from "../../../../../../Images_Svg/IconPlus";
import "./ProductList.css";
const ProductList = ({ data, openModal, openCard }) => {
  return (
    <div className="wrapper-list">
      <div className="card-image">
        <img
          data-type="editable"
          alt={data.title}
          src={
            data.image
              ? data.image.url
              : "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"
          }
        />
      </div>
      <div className="card-content">
        <h1 className="card-content-title">{data.title ? data.title : ""}</h1>
        <div className="card-content-price">
          {data.price_2 ? (
            <p>
              $ {data.price_1} - $ {data.price_2}
            </p>
          ) : (
            <p>$ {data.price_1}</p>
          )}
        </div>
        <p className="card-content-info">{data.content ? data.content : ""}</p>
        <div className="content-button">
          <div className="icon-shop" onClick={() => openCard(data)}>
            <p>add to card</p>
          </div>
          <div className="icon-plus" onClick={() => openModal(data)}>
            <IconPlus color="#666" width="22" height="22" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
