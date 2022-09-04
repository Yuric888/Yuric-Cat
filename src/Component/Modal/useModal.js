import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../Redux/Reducer/modalReducer";

const useModal = () => {
    const state = useSelector(state => state.modal.showLModal)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(toggleModal())
    }
    return {
        state,
        toggle
    };
}
export default useModal;