import { useDispatch, useSelector } from "react-redux";
import { changeData, toggleModal } from "../../Redux/Reducer/modalReducer";

const useModal = () => {
    const state = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const toggle = (data) => {
        if(state.showLModal === false){
        dispatch(toggleModal())
        dispatch(changeData(data))
        }else if(state.showLModal === true){
            dispatch(toggleModal())
        }
    }
    return {
        state,
        toggle
    };
}
export default useModal;