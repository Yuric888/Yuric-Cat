import './ListButton.css';
import IconPrevPagi from '../../../../Images_Svg/IconPrevPagi';
import IconNextPagi from '../../../../Images_Svg/IconNextPagi'
import { useDispatch } from 'react-redux';
import { backPage, changePage, nextPage } from '../../../../../Redux/Reducer/reducer';
const ListButton = ({numberPage, currentPage}) => {
	 const dispatch = useDispatch()
	const handleChangePage = (id)=>{
    dispatch(changePage(id))
  } 
  const handlePrev = ()=>{
	if(currentPage !== 1){
		dispatch(backPage())
	}
	
  }
  const handleNext = ()=>{
	if(currentPage !== numberPage.length){
		dispatch(nextPage())
	}
  }
  return (
    <ul className="pagination-button">
		<li onClick={handlePrev}>
          <IconPrevPagi width="20" height="20" color="#0388c5"/>
        </li>
				{numberPage && numberPage.length !== 0 && numberPage.map((item, index) => {
					return(
						<li 
							key={index}
							id={item}
							className={currentPage === index + 1 ? "active" : null}
							onClick={()=>handleChangePage(item)}
						>
							<h1>{item}</h1>
						</li>
					)
				})}
		<li onClick={handleNext}>
          <IconNextPagi width="20" height="20" color="#0388c5" />
        </li>
	</ul> 
  )
}

export default ListButton