import './Shop.css'
import Product from './Product/Product';
import useModal from '../../Use_Modal/Modal/useModal';
import Modal from '../../Use_Modal/Modal/Modal';
import ModalCard from '../../Use_Modal/ModalCard/ModalCard';
import useModalCard from '../../Use_Modal/ModalCard/useModalCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost } from '../../../Redux/Reducer/filterReducer';
const Shop = () => {
  const {state, toggle} = useModal();
  const {stateView, toggleView} = useModalCard();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost())
  },[dispatch])
  return (
    <div className="wrapper-shop">
      <div className="container-shop">
        <div className="content-shop">
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