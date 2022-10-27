import axios from "axios";
import jwt_decode from 'jwt-decode'
import { fetchRefreshToken } from "../Redux/Reducer/loginReducer";
const url = process.env.REACT_APP_URL
export const refreshToken = async () => {
    try{
        const res = await axios.post(`${url}/refresh`,{
            withCredentials: true,
        })
        return res.data;
    }catch(err){
        console.log('error refresh token', err)
    }
}
export const createAxios = (user, dispatch)=> {
    console.log('user, dispatch', user)
    let newInstance = axios.create();
    newInstance.interceptors.request.use(
        async(config) => {
            let date = new Date();
            const decodedToken = jwt_decode(user?.accessToken)
            console.log('decodedToken', decodedToken)
            if(decodedToken.exp < date.getTime() / 1000){
                const data = await refreshToken()
                dispatch(fetchRefreshToken());
                config.headers["token"] = "Bearer " + data.accessToken;
            }
            console.log('config', config)
            return config
        }, 
        (err) => {
            return Promise.reject(err)
        }
    )
}