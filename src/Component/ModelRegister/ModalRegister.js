import { useState } from 'react';
import ToggleShowEye from '../Images_Svg/ToggleShowEye';
import './ModalRegister.css'
const ModalRegister = ({state, hide, handleLogin}) => {
  const [showPass, setShowPass] = useState(false)
  const handleChange = () => {
    hide();
    handleLogin();
  }
  return (
    <div onClick={hide} className={state.isOpenRegister ? "modal-register active":"modal-register"}>
        <div className={state.isOpenRegister ? "modal-register-content active" : "modal-register-content"}  
          onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
            <form className="form-login">
              <span className="modal-register-close" onClick={hide}>&#10005;</span>
              <h2 class="form-heading">Sign up</h2>
              <div class="form-group">
                <input 
                  type="text" 
                  name="fistName"
                  required="required"
                  />
                  <span>Fist Name</span>
                  <i></i>
              </div>
              <div class="form-group">
                <input 
                  type="text" 
                  name="lastName"
                  required="required"
                  />
                  <span>Last Name</span>
                  <i></i>
              </div>
              <div class="form-group">
                <input 
                  type="text" 
                  name="email"
                  required="required"
                  />
                  <span>Email</span>
                  <i></i>
              </div>
              <div class="form-group">
                <input 
                  type={showPass ? "text" : "password"}
                  name="password"
                  required="required"
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
                  onClick={handleChange}
                >Login</span>
              </div>
              <input type="submit" value="Register" class="form-submit" />
            </form>
        </div>
      </div>
  )
}

export default ModalRegister