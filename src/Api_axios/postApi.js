import axios from "axios";
// import {axiosClient} from "./axiosClient";

const getAllPost = () => {
  return axios.get('http://localhost:8080/getAllPost');
}
// const getAllPost = {
//     getAll(){
//         const url = '/getAllPost'
//         return axiosClient.get(url);
//     }
// }

export {getAllPost};
