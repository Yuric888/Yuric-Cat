import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchRegister } from '../../../Redux/Reducer/registerReducer';
import ToggleShowEye from '../../Images_Svg/ToggleShowEye';
import './ModalRegister.css';
import ModalLoading from '../ModalLoading/ModalLoading'
const ModalRegister = ({state, hide, handleLogin}) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [stateRegis, setStateRegis] = useState({
    email: '', password: '',confirmPassword: '', firstName: '', lastName: '',
  })
  const dispatch = useDispatch();
  const stateRedux = useSelector(state => state.register)
  useEffect(() => {
    if(stateRedux.success === true){
      handleChangeLogin();
      toast.success(stateRedux.message)
      handleValue()
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[stateRedux.success]);
  if(stateRedux.status ==='loading'){
    return (
     <ModalLoading />
    )
  }
  const handleChangeLogin = () => {
    hide();
    handleLogin();
  }
   const handleChange = (e) => {
    setStateRegis((state) => ({
      ...state,
      [e.target.name]: e.target.value
    })
    )
  }
   const handleValue = (e) => {
    setStateRegis((state) => ({
      ...state,
      email: '', password: '', confirmPassword: '', firstName: '', lastName: '',
    })
    )
  }
   const handleSubmit = (e) => {
    e.preventDefault();
    if(validateUser() === true){
      dispatch(fetchRegister(stateRegis))
    }
  }
  const validateUser = ()=> {
    const  {email, password,confirmPassword} = stateRegis
    if(email.length < 6 ){
      toast.error("Email needs at least 6 characters")
      return false
    }
    const partern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if(!email.match(partern)  ){
      toast.error("Email needs right form!")
      return false
    }
    if (password.length < 6){
      toast.error("Password must be at least 6 characters!");
      return false
    }
    if(password !== confirmPassword){
      toast.error("Password and confirm password must be the same!")
      return false;
    }
    return true
  }
  return (
    <div onClick={hide} className={state.isOpenRegister ? "modal-register active":"modal-register"}>
        <div className={state.isOpenRegister ? "modal-register-content active" : "modal-register-content"}  
          onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>      
            <form className="form-login" onSubmit={handleSubmit}>
              <span className="modal-register-close" onClick={hide}>&#10005;</span>
              <h2 className="form-heading">Sign up</h2>
              <div className="form-group">
                <input 
                  type="text" 
                  name="firstName"
                  required="required"
                  value={stateRegis.firstName}
                  onChange={handleChange}
                  />
                  <span>Fist Name</span>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="lastName"
                  required="required"
                  value={stateRegis.lastName}
                  onChange={handleChange}
                  />
                  <span>Last Name</span>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="email"
                  required="required"
                  value={stateRegis.email}
                  onChange={handleChange}
                  />
                  <span>Email</span>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type={showPass ? "text" : "password"}
                  name="password"
                  required="required"
                  autoComplete="on"
                  value={stateRegis.password}
                  onChange={handleChange}
                  />
                  <span>Password</span>
                  <div onClick={()=>setShowPass(!showPass)} className="show-password">
                    <ToggleShowEye show={showPass} 
                      width="36"
                      height="22"
                      color="#555353"
                    />
                  </div>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  required="required"
                  autoComplete="on"
                  value={stateRegis.confirmPassword}
                  onChange={handleChange}
                  />
                  <span>Confirm Password</span>
                  <div onClick={()=>setShowConfirm(!showConfirm)} className="show-password">
                    <ToggleShowEye show={showConfirm} 
                      width="36"
                      height="22"
                      color="#555353"
                    />
                  </div>
                  <i></i>
              </div>
              <div className="links">
                <span
                  onClick={handleChangeLogin}
                >Login</span>
              </div>
              <input type="submit" value="Register" className="form-submit" />
            </form>
        </div>
      </div>
  )
}

export default ModalRegister