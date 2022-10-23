import axios from "axios";
const url = 'http://localhost:8080'
const LoginUser = (data) => {
  return axios.post(`${url}/user/login-user`, data);
}
const LoginAdmin = (data) => {
    return axios.post(`${url}/user/login-admin`, data);
}
export {LoginUser, LoginAdmin};
