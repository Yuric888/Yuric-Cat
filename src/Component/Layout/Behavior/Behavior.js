import './Behavior.css'
import CatUnplash from '../../Images_Svg/Cat-unplash-1.svg'
const DataBehavior = [{
  id: 1,
  url: "https://i.postimg.cc/9FLjBVny/Cat-behavior-4.jpg",
  title: 'Cat Behavior 1',
  content: 'dl;sfah;lshfd'
},{
  id: 2,
  url: "https://i.postimg.cc/V6SH8Pf0/Cat-behavior-3.jpg",
  title: 'Cat Behavior 2',
  content: '.k,j'
},{
  id: 3,
  url: "https://sieupet.com/sites/default/files/tap_tinh_cua_meo6.jpg",
  title: 'Cat Behavior 3',
  content: 'dgfc'
},]
const Behavior = () => {
  return (
    <div className="wrapper-behavior">
      <div className="container-behavior">
          <div className="content-behavior">
          <img atl="" src={CatUnplash} />
           <div className="info-behavior">
            </div>
          </div>
      </div>
    </div>
  )
}

export default Behavior