import './App.css';
import Header  from './Component/Header/Header';
import {Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin, toggleRegister } from './Redux/Reducer/loginReducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModelLogin from './Component/Use_Modal/ModalLogin/ModalLogin'
import ModalRegister from './Component/Use_Modal/ModelRegister/ModalRegister'
function App() {
  const dispatch = useDispatch()
  const stateRedux = useSelector((state)=> state)
  const toggleLog = () => {
    dispatch(toggleLogin())
  }
  const toggleRegis = () => {
    dispatch(toggleRegister())
  }
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <Header />
        <Outlet /> 
        <ModelLogin state={stateRedux.login} hide={toggleLog} handleRegis={toggleRegis}/>
        <ModalRegister state={stateRedux.login} hide={toggleRegis} handleLogin={toggleLog}/>
        <ToastContainer />
        <footer className="footer"></footer>
      </div> 
    </div>
   
    </>
  );
}

export default App;
