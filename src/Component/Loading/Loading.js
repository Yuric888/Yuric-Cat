import LogoLoading from '../Images_Svg/LogoLoading'
import './Loading.css'
const Loading = () => {
  return (
    <div className="wrapper-loading">
      <div className="container-loading">
       <LogoLoading />
       <p>Please wait minutes...</p>
      </div>
    </div>
  )
}

export default Loading