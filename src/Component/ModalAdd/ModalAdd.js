import './ModalAdd.css'
import ReactDOM from 'react-dom'
const ModalAdd = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  
    <div className="wrapper-modal">
      <div className="overlay"></div>
      <div className="modal">
        <header className="modal__header">
              <h2>Modal Title</h2>
              <button className="close-button">&times;</button>
            </header>
            <main className="modal__main">
              <p>Some content here!</p>
            </main>
      </div>
    </div>
  
)
:
null

export default ModalAdd