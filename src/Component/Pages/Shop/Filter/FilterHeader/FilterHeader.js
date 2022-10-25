import { useRef } from "react"
import { useDispatch} from "react-redux";
import { changeFilter } from "../../../../../Redux/Reducer/filterReducer";
import IconSearch from "../../../../Images_Svg/IconSearch"
import './FilterHeader.css'
const FilterHeader = () => {
  const dispatch = useDispatch();
 const inputRef = useRef('')
 const filterUsers = () => {
    dispatch(changeFilter(inputRef.current.value))
 }
  return (
    <div className="wrapper-filter-header">
        <input 
          onChange={filterUsers}
          type="text" 
          placeholder="search name" 
          name="Yuric"
          ref={inputRef}
        ></input>
        <div 
          className="button-filter"
          onClick={filterUsers}
        >
            <IconSearch width="20" height="20" color="#7e4c4f" />
        </div>
    </div>
  )
}

export default FilterHeader