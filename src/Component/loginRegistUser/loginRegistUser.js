/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from 'react-redux'
import { toggleLogin, toggleRegister } from '../../Redux/Reducer/loginReducer'
import './loginRegistUser.css'
const loginRegistUser = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch()
   const toggleLog = () => {
        dispatch(toggleLogin())
    }
    const toggleRegis = () => {
      dispatch(toggleRegister())
    }
  return (
    <>
        <li onClick={toggleLog}>
          <a href="#" >
            <p>Login</p>
          </a>
        </li>
        <li onClick={toggleRegis}>
          <a href="#" >
            <p>Register</p>
          </a>
        </li>
    </>
  )
}

export default loginRegistUser