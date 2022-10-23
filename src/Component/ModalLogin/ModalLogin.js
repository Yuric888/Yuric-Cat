
import { useState } from 'react';
import './ModalLogin.css'
import ToggleShowEye from '../Images_Svg/ToggleShowEye'
const ModalLogin = ({state, hide, handleRegis}) => {
  const [showPass, setShowPass] = useState(false)
  const handleChangeRegis = () => {
    hide();
    handleRegis();
  }
  const handleChange = () => {

  }
  const handleSubmit = () => {

  }
  return ( 
  <div onClick={hide} className={state.isOpenLogin ? "modal-login active":"modal-login"}>
        <div className={state.isOpenLogin ? "modal-login-content active" : "modal-login-content"}  
          onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
            <form className="form-login" onSubmit={handleSubmit}>
              <span className="modal-login-close" onClick={hide}>&#10005;</span>
              <h2 class="form-heading">Sign in</h2>
              <div class="form-group">
                <input 
                  type="text" 
                  name="email"
                  required="required"
                  onChange={handleChange}
                  />
                  <span>Email</span>
                  <i></i>
              </div>
              <div class="form-group">
                <input 
                  type={showPass ? "text" : "password"}
                  name="password"
                  required="required"
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
                  onClick={handleChangeRegis}
                >Sign up</span>
              </div>
              <input type="submit" value="Login" class="form-submit" />
            </form>
        </div>
      </div>
   
  )
}

export default ModalLogin;