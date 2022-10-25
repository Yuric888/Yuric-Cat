import React from 'react'
import Loading from '../../Loading/Loading'
import './ModalLoading.css'
const ModalLoading = () => {
  return (
    <div className="modal-loading">
       <div className="modal-loading-content">
        <Loading>Please just one second...</Loading>
       </div>
     </div>
  )
}

export default ModalLoading