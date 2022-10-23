import './App.css';
import Header  from './Component/Header/Header';
import {Outlet} from 'react-router-dom'
import ModelLogin from './Component/ModalLogin/ModalLogin';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin, toggleRegister } from './Redux/Reducer/loginReducer';
import ModalRegister from './Component/ModelRegister/ModalRegister';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch()
  const stateLog = useSelector((state)=> state.login)
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
        <ModelLogin state={stateLog} hide={toggleLog} handleRegis={toggleRegis}/>
        <ModalRegister state={stateLog} hide={toggleRegis} handleLogin={toggleLog}/>
        <ToastContainer />
        <footer className="footer"></footer>
      </div> 
    </div>
   
    </>
  );
}

export default App;
