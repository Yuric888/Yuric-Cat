import './Shop.css'
import Filter from './Filter/Filter';
import Product from './Product/Product';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
import ViewCard from '../ViewCard/ViewCard';
import useCardView from '../ViewCard/useCardView';
const Shop = () => {
  
  const {state, toggle} = useModal();
  const {stateView, toggleView} = useCardView();
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
          <ViewCard
            state={stateView}
            hide={toggleView}
           />
        </div>
      </div> 
    </div>
  )
}

export default Shop