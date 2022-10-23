import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchRegister } from '../../Redux/Reducer/registerReducer';
import ToggleShowEye from '../Images_Svg/ToggleShowEye';
import './ModalRegister.css'
const ModalRegister = ({state, hide, handleLogin}) => {
  const [showPass, setShowPass] = useState(false);
  const [stateRegis, setStateRegis] = useState({
    email: '', password: '', firstName: '', lastName: '',
  })
  const dispatch = useDispatch();
  const stateRedux = useSelector(state => state.register)
  useEffect(() => {
    if(stateRedux.success === true){
      handleChangeLogin();
      toast.success(stateRedux.message)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[stateRedux.success])
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
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRegister(stateRegis))
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