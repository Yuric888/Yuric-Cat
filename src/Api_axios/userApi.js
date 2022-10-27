import axios from "axios";
const url = process.env.REACT_APP_URL

const LoginUser = (data) => {
  return axios.post(`${url}/user/login`, data);
}
const RegisterUser = (data) => {
  return axios.post(`${url}/user/register`, data)
}
const LogoutUser = (accessToken, axiosJWT)=> {
  return axiosJWT.post(`${url}/user/logout`,{
    headers: {token: `Bearer ${accessToken}`}
  })
}
export {LoginUser, RegisterUser, LogoutUser};
