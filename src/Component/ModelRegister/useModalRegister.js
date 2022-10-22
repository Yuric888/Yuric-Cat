import { useDispatch, useSelector } from "react-redux"
import { toggleRegister } from "../../Redux/Reducer/loginReducer"

const useModalLogin = () => {
    const stateReg = useSelector(state => state.login)
    const dispatch = useDispatch()
    const toggleRegis = () => {
        dispatch(toggleRegister())
    }
    return {
        stateReg,
        toggleRegis
    };
}
export default useModalLogin;