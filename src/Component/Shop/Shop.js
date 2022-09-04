import './Shop.css'
import Filter from './Filter/Filter';
import Product from './Product/Product'
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';
const Shop = () => {
  const {state, toggle} = useModal();
  return (
    <div className="wrapper-shop">
      <div className="container-shop">
        <div className="content-shop">
          <Filter />
          <Product />
        </div>
      </div>
      <Modal
        isShowing={state}
        hide={toggle}
       />
    </div>
  )
}

export default Shop