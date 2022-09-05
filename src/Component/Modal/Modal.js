import './Modal.css'
import React from 'react'
const Modal = ({isShowing, hide}) =>{
  return(
      <div className={isShowing ? "modal-overlay active":"modal-overlay"}>
        <div className="modal">
          <span className="modal-close" onClick={hide}>&#10005;</span>
          sfkslfhllk
      </div>
      </div>
      );
}

export default Modal