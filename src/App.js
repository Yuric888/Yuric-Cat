import './App.css';
import Header  from './Component/Header/Header';
import {Outlet} from 'react-router-dom'
import ModalAdd from './Component/ModalAdd/ModalAdd';
function App() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <Header />
        <Outlet />
        <footer className="footer"></footer>
      </div>
      
    </div>
    <ModalAdd />
    </>
  );
}

export default App;
