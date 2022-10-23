import axios from "axios";
const url = process.env.REACT_APP_URL
const LoginUser = (data) => {
  return axios.post(`${url}/user/login-user`, data);
}
const LoginAdmin = (data) => {
    return axios.post(`${url}/user/login-admin`, data);
}
const RegisterUser = (data) => {
  return axios.post(`${url}/user/register-user`, data)
}
const RegisterAdmin = (data) => {
  return axios.post(`${url}/user/register-admin`, data)
}
export {LoginUser, LoginAdmin, RegisterUser, RegisterAdmin};
