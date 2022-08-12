import './App.css';
import Header  from './Component/Header/Header';
import Layout from './Component/Layout/Layout';
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Layout />
        <footer className="footer"></footer>
      </div>
      
    </div>
  );
}

export default App;
