import { useDispatch, useSelector } from 'react-redux'
import { toggleViewCard } from '../../Redux/Reducer/modalReducer';

const useCardView = () => {
    const stateView = useSelector(state => state.modal);
    const dispatch = useDispatch()
    const toggleView = () =>{
        dispatch(toggleViewCard())
    }
  return {
    stateView, toggleView
  }
}

export default useCardView