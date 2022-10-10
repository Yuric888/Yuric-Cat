import {  useSelector } from "react-redux"
import ListButton from "./ListButton/ListButton";
import ListItemProduct from "./ListProduct/ListItemProduct";

const Pagination = ({data,itemPage}) => {
  const currentPage = useSelector(state => state.reduce.currentPage)
    const showLayout = useSelector((state) => state.reduce.showLayout) 
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemPage); i++){
      pages.push(i);
    }
  const indexOfLastPost = currentPage * itemPage;
	const indexOfFirstPost = indexOfLastPost - itemPage;
  const currentData = data.slice(indexOfFirstPost,indexOfLastPost);
  return (
    <div className="wrapper-pagination">
    <ListItemProduct data={currentData} showLayout={showLayout}/>
    <ListButton numberPage={pages} currentPage={currentPage} />
    </div>
  )
}

export default Pagination
