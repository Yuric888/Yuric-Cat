
import { useEffect, useState } from 'react';
import './ModalLogin.css'
import ToggleShowEye from '../../Images_Svg/ToggleShowEye'
import { fetchLogin} from '../../../Redux/Reducer/loginReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const ModalLogin = ({state, hide, handleRegis}) => {
  const [showPass, setShowPass] = useState(false);
  const [stateLogin, setStateLogin] = useState({
    email: '', password: ''
  })
  const dispatch = useDispatch()
  const stateRedux = useSelector(state => state.login);
  useEffect(() => {
    if(stateRedux.success === true){
      toast.success(stateRedux.message)
      hide();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[stateRedux.success])
  const handleChangeRegis = () => {
    hide();
    handleRegis();
  }
  const handleChange = (e) => {
    setStateLogin((data) => ({
      ...data,
      [e.target.name]: e.target.value
    })
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(stateLogin))
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
              <h2 className="form-heading">Sign in</h2>
              <div className="form-group">
                <input 
                  type="text" 
                  name="email"
                  required="required"
                  value={stateLogin.email}
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
                  value={stateLogin.password}
                  onChange={handleChange}
                  autoComplete="on"
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
              <input type="submit" value="Login" className="form-submit" />
            </form>
            
        </div>
      </div>
   
  )
}

export default ModalLogin;