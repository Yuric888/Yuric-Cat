/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogin, toggleRegister } from '../../Redux/Reducer/loginReducer'
import './loginRegistUser.css'
const loginRegistUser = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch()
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const stateView = useSelector(state => state.login)
   const {firstName, lastName, success} = stateView
   const toggleLog = () => {
        dispatch(toggleLogin())
    }
    const toggleRegis = () => {
      dispatch(toggleRegister())
    }
  return (
    <>
    {success === true && firstName !== "" && lastName !== ""
        ?
        <>
          <li>
            <a >
              <p style={{textTransform: "none"}}>Hi {firstName} {lastName}!</p>
            </a>
          </li>
        </>
        :
        <>
          <li onClick={toggleLog}>
            <a >
              <p>Login</p>
            </a>
          </li>
          <li onClick={toggleRegis}>
            <a  >
              <p>Register</p>
            </a>
          </li>
        </>
        }
    </>
  )
}

export default loginRegistUser