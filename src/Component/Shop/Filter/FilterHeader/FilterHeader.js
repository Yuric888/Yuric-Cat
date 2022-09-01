import IconSearch from "../../../Images_Svg/IconSearch"
import './FilterHeader.css'
const FilterHeader = () => {
  return (
    <div className="wrapper-filter-header">
        <input type="text" placeholder="search name" name="Yuric"></input>
        <div className="button-filter">
            <IconSearch width="20" height="20" color="#7e4c4f" />
        </div>
    </div>
  )
}

export default FilterHeader