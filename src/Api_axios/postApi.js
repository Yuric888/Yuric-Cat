import axios from "axios";
// import {axiosClient} from "./axiosClient";

const getAllPost = () => {
  return axios.get(`${process.env.REACT_APP_URL}/getAllPost`);
}
// const getAllPost = {
//     getAll(){
//         const url = '/getAllPost'
//         return axiosClient.get(url);
//     }
// }

export {getAllPost};
