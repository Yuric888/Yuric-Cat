import './Shop.css'
import Filter from './Filter/Filter';
import Product from './Product/Product';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import useModalCard from '../ModalCard/useModalCard';
const Shop = () => {
  
  const {state, toggle} = useModal();
  const {stateView, toggleView} = useModalCard();
  return (
    <div className="wrapper-shop">
      <div className="container-shop">
        <div className="content-shop">
          <Filter />
          <Product />
          <Modal
            isShowing={state}
            hide={toggle}
          />
          <ModalCard
            state={stateView}
            hide={toggleView}
           />
        </div>
      </div> 
    </div>
  )
}

export default Shop