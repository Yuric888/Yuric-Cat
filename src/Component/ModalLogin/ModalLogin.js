
import './ModalLogin.css'
const ModalLogin = ({state, hide, handleRegis}) => {
  const handleChangeRegis = () => {
    hide();
    handleRegis();
  }
  return (
    
  <div onClick={hide} className={state.isOpenLogin ? "modal-login active":"modal-login"}>
        <div className={state.isOpenLogin ? "modal-login-content active" : "modal-login-content"}  
          onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
            <form className="form-login">
              <span className="modal-login-close" onClick={hide}>&#10005;</span>
              <h2 class="form-heading">Sign in</h2>
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
                  type="password" 
                  name="password"
                  required="required"
                  />
                  <span>Password</span>
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