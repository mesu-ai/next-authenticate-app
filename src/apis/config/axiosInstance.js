import axios from "axios"
import { baseURL } from "./baseURL"
import { accessTokenHandeler } from "./requestInterseptors";
import { refreshTokenHandler } from "./responseInterseptors";


const api=axios.create({
  baseURL:baseURL,
  timeout:10000,
})

api.interceptors.request.use(
  (config)=>accessTokenHandeler(config),
  (error)=>Promise.reject(error),
)

api.interceptors.response.use(undefined,
  (error)=>{return refreshTokenHandler(error);
  })

export default api;