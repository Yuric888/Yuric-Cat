import { useNavigate } from 'react-router-dom';
import IconCheck from '../../Images_Svg/IconCheck';
import './ModalCard.css'
const ModalCard = (props) => {
  const {state, hide} = props;
  const navigate = useNavigate();
 const Delay = (e) => {
    e.preventDefault();
    hide();
    setTimeout(() => {
        navigate("/cards") //make this work
    }, 600)
}
  return (
    <div className={state.showModalCard ? "wrapper-view active" : "wrapper-view"}
        onClick={hide}
    >
      <div className={state.showModalCard ? "container-view active" : "container-view"}
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
      <span className="modal-close" onClick={hide}>&#10005;</span>
      <div className="icon-check">
      <IconCheck width="30" height="30" color="#056a18" />
      <h1>Added to cart successfully!</h1></div>
        <div className="click-view">
        <button 
          onClick={(e) => Delay(e)}
        >
        <p>View Card</p>
        </button>
      </div>
      </div>
      
    </div>
  )
}

export default ModalCard
