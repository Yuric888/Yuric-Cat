import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './BuildCard.css'
import TableBuild from './TableBuild/TableBuild'
const BuildCard = () => {
  const data = useSelector(state => state.modal.cards);
  const navigate = useNavigate()
  const Delay = (e) => {
    e.preventDefault();
    setTimeout(() => {
        navigate("/shop") //make this work
    },300)
}
  return (
    <div className="wrapper-build">
      <div className="container-build">
        <div className="content-build">
          {data && data.length !== 0 
            ? 
            <>
              <h3>your cart items</h3>
              <TableBuild data={data} />
            </>
            :
            <>
              <h3>Your cards empty...</h3>
              <button onClick={(e) => Delay(e)}>
                <p>Return shops</p>
              </button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default BuildCard