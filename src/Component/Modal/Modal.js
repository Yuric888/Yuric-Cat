import './Modal.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import useModalCard from '../ModalCard/useModalCard';
const Modal = (props) =>{
  const {isShowing, hide} = props;
   const navigate = useNavigate();
   const {addCardModal} = useModalCard();
   const handleClick = (e,data) => {
      Delay(e);
      addCardModal(data);
   }
 const Delay = (e) => {
    e.preventDefault();
    hide();
    setTimeout(() => {
        navigate("/cards") //make this work
    },300)
}

const dataItem = isShowing.itemModal
  return(
      <div onClick={hide} className={isShowing.showLModal ? "modal active":"modal"}>
        <div className={isShowing.showLModal ? "modal-content active" : "modal-content"}  
          onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
            <span className="modal-close" onClick={hide}>&#10005;</span>
            <div className="modal-image">
              <img alt={dataItem.title} 
              src={dataItem.image ? dataItem.image.url : "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="modal-text">
              <h1>{dataItem.title}</h1>
              <div className="modal-price">
               {dataItem.price_2 ? 
                <p>$ {dataItem.price_1} - $ {dataItem.price_2}</p>
                :
                <p>{dataItem.price_1}</p>
              }
              </div>
              <p>{dataItem.content}</p>
              <div className="add-card">
              <button 
                onClick={(e) => handleClick(e, dataItem)}
              >
                <p>add to card</p>
                </button>
              </div>
              
            </div>
        </div>
      </div>
      );
}

export default Modal;