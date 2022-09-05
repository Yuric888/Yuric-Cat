import './Modal.css'
import React from 'react'
const Modal = (props) =>{
  const {isShowing, hide} = props;
  return(
      <div className={isShowing.showLModal ? "modal-overlay active":"modal-overlay"}>
        <div className="modal">
          <span className="modal-close" onClick={hide}>&#10005;</span>
          <div>{isShowing.title}</div>
          <div>{isShowing.content}</div>
          <div>{isShowing.url}</div>
          <div>{isShowing.price_1}</div>
          <div>{isShowing.price_2 ? isShowing.price_2 : null}</div>
      </div>
      </div>
      );
}

export default Modal;