import { useDispatch, useSelector } from 'react-redux'
import { addCard, toggleViewCard } from '../../Redux/Reducer/modalReducer';

const useModalCard = () => {
    const stateView = useSelector(state => state.modal);
    const dispatch = useDispatch()
    const toggleView = (data) =>{
       if(stateView.showModalCard === false){
         dispatch(toggleViewCard());
        dispatch(addCard(data));
        }else if(stateView.showModalCard === true){
            dispatch(toggleViewCard());
        }
    }
  return {
    stateView, toggleView
  }
}

export default useModalCard