import axios from "axios";
// import {axiosClient} from "./axiosClient";

const getAllPost = () => {
  return axios.get('https://be-nodejs-mongodb.herokuapp.com/getAllPost');
}
// const getAllPost = {
//     getAll(){
//         const url = '/getAllPost'
//         return axiosClient.get(url);
//     }
// }

export {getAllPost};
