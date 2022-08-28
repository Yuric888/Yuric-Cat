import { useSelector } from 'react-redux'
import './ContainerProduct.css'
import DataProduct from './dataProduct';
import ListItemProduct from './ListItemProduct/ListItemProduct';
const ContainerProduct = () => {
   const showLayout = useSelector((state) => state.reduce.showLayout)
  return (
    <div className="wrapper-list">
      <div className="container-list">
        <ListItemProduct data={DataProduct} showLayout={showLayout}/>
      </div>
    </div>
  )
}

export default ContainerProduct