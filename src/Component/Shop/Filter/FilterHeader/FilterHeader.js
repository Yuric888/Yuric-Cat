import { useState } from "react"
import { useDispatch} from "react-redux";
import { changeFilter } from "../../../../Redux/Reducer/filterReducer";
import IconSearch from "../../../Images_Svg/IconSearch"
import './FilterHeader.css'
const FilterHeader = () => {
  const [valueInput, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleFilter = (valueInput) => {
    dispatch(changeFilter(valueInput));
  }
  return (
    <div className="wrapper-filter-header">
        <input 
          value={valueInput} 
          onChange={(e) => handleChange(e)}
          type="text" 
          placeholder="search name" 
          name="Yuric"
        ></input>
        <div 
          className="button-filter"
          onClick={() => handleFilter(valueInput)}
        >
            <IconSearch width="20" height="20" color="#7e4c4f" />
        </div>
    </div>
  )
}

export default FilterHeader