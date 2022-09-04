import './Modal.css'
import ReactDOM from 'react-dom'
import React from 'react'
const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
      <div className="overlay">
        <div className="modal">
          <span className="modal-close" onClick={hide}>&#10005;</span>
          sfkslfhllk
      </div>
      </div>
      
  </React.Fragment>, document.body
)
:
null;

export default Modal