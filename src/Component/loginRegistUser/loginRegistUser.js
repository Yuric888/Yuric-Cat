/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  logoutUser, toggleLogin, toggleRegister } from '../../Redux/Reducer/loginReducer'
import './loginRegistUser.css'
const loginRegistUser = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch()
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const stateView = useSelector(state => state.login)
   const {userDetails} = stateView
   console.log('userDetails', userDetails)
  //  let axiosJWT = createAxios(userDetails, dispatch)
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const navigate = useNavigate()
   const toggleLog = () => {
        dispatch(toggleLogin())
    }
    const toggleRegis = () => {
      dispatch(toggleRegister())
    }
    const handleLogout = () => {
      dispatch(logoutUser())
      navigate('/')
    }
  return (
    <>
    {userDetails !== null
        ?
        <>
          <li style={{pointerEvents: "none"}}>
            <a >
              <p style={{textTransform: "none"}}>Hi {userDetails?.firstName}!</p>
            </a>
          </li>
          <li onClick={handleLogout}>
            <a >
              <p style={{textTransform: "none"}}>Logout</p>
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