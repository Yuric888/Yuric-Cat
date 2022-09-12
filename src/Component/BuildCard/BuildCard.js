import './BuildCard.css'
import TableBuild from './TableBuild/TableBuild'
const BuildCard = () => {
  return (
    <div className="wrapper-build">
      <div className="container-build">
        <div className="content-build">
          <h3>your cart items</h3>
          <TableBuild />
        </div>
      </div>
    </div>
  )
}

export default BuildCard