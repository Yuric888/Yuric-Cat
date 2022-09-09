import './Modal.css'
import React from 'react'
const Modal = (props) =>{
  const {isShowing, hide} = props;
  return(
    <>
      <div onClick={hide} className={isShowing.showLModal ? "modal active":"modal"}>
        <div className={isShowing.showLModal ? "modal-content active" : "modal-content"}  
          onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
            <span className="modal-close" onClick={hide}>&#10005;</span>
            <div className="modal-image">
              <img alt={isShowing.itemModal.title} 
              src={isShowing.itemModal.url ? isShowing.itemModal.url : "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
            </div>
            <div className="modal-text">
              <h1>{isShowing.itemModal.title}</h1>
              <div className="modal-price">
                <p>{isShowing.itemModal.price_1}</p>
                <p>{isShowing.itemModal.price_2}</p>
              </div>
              <p>{isShowing.itemModal.content}</p>
              <div className="add-card">
                <p>add to card</p>
              </div>
              
            </div>
            {/* <div>{isShowing.itemModal.title}</div>
            <div>{isShowing.itemModal.content}</div>
            <div>{isShowing.itemModal.url}</div>
            <div>{isShowing.itemModal.price_1}</div>
            <div>{isShowing.itemModal.price_2 ? isShowing.price_2 : null}</div> */}
        </div>
      </div>
      </>
      );
}

export default Modal;