import './TableBuild.css'
import { useDispatch } from 'react-redux';
import {deleteCard} from '../../../../Redux/Reducer/modalReducer'
import IconDelete from '../../../Images_Svg/IconDelete'
const TableBuild = ({data}) => {
  const dispatch = useDispatch();
  return (
     <table id="customers">
          <thead>
            <tr>
              <th>
                <h1>Image</h1>
              </th>
              <th>
                <h1>Name</h1>
              </th>
              <th>
                <h1>Price</h1>
              </th>
              <th>
                <h1>Delete</h1>
              </th>
            </tr>
            </thead>
            <tbody>
            {data && data.length !== 0 && data.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <div className="card-image">
                    <img data-type="editable" alt={item.title} src={item.image ? item.image.url : "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg"} />
                  </div>
                </td>
                <td>
                  <p>{item.title}</p>
                </td>
                <td>
                  <p>$ {item.price_1}</p>
                </td>
                <td>
                  <span 
                  onClick={()=>dispatch(deleteCard(item))}
                  style={{padding: "10px", cursor:"pointer"}}>
                    <IconDelete width="20" height="20" color="#7e4c4f" />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
          </table>
  )
}

export default TableBuild