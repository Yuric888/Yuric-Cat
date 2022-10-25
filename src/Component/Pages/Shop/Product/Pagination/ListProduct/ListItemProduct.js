import './ListItemProduct.css';
import useModal from '../../../../../Use_Modal/Modal/useModal';
import useModalCard from '../../../../../Use_Modal/ModalCard/useModalCard';
import ProductGrid from './ProductGrid/ProductGrid';
import ProductList from './ProductList/ProductList';
const ListItemProduct = ({data, showLayout}) => {
  const {toggle} = useModal();
  const {toggleView} = useModalCard();
  return (
    <div className="wrapper-list-product">
      <div className={showLayout === false ? "grid" : "list"}>
        {data && data.map((item, idx) => {
          return(
            <div className="card-product" key={idx}>
                {showLayout === false ? 
                <ProductGrid
                    data={item} 
                    openModal={toggle}
                    openCard={toggleView}
                  />
                :
                <ProductList
                    data={item} 
                    openModal={toggle}
                    openCard={toggleView}
                  />
                }
            </div>
              )
        })}
      </div>
    </div>
  )
}

export default ListItemProduct