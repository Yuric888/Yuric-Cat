import './TableBuild.css'
import IconDelete from '../../Images_Svg/IconDelete'
const TableBuild = ({data}) => {
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
                <h1>Until Price</h1>
              </th>
              <th>
                <h1>Amount</h1>
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
                    <img src={item.url} alt={item.title} />
                  </div>
                </td>
                <td>
                  <p>{item.content}</p>
                </td>
                <td>
                  <p>{item.price_1}</p>
                </td>
                <td>
                  <p>{item.price_2}</p>
                </td>
                <td>
                  <span style={{padding: "10px", cursor:"pointer"}}>
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