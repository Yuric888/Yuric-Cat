import './TableBuild.css'
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
            <tr>
                <td>
                  <p>Alfreds Futterkiste</p>
                </td>
                <td>
                  <p>Maria Anders</p>
                </td>
                <td>
                  <p>Germany</p>
                </td>
                <td>
                  <p>Germany</p>
                </td>
                <td>
                   <p>Germany</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Alfreds Futterkiste</p>
                  </td>
                  <td>
                    <p>Maria Anders</p>
                  </td>
                  <td>
                    <p>Germany</p>
                  </td>
                  <td>
                    <p>Germany</p>
                  </td>
                  <td>
                    <p>Germany</p>
                  </td>
            </tr>
        </tbody>
          </table>
  )
}

export default TableBuild