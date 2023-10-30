import axios from "axios";
import { getRefreshToken, setAccessToken, setRefreshToken } from "../utils/cookies";
import { baseURL } from "./config/baseURL";

const authAxiosInstance=axios.create({
  baseURL:`${baseURL}/api/Auth/`,
  timeout:10000,
})

const authAPIs ={
  async fetchNewAccessToken () {
    const refresh=getRefreshToken();

  },

  async userSignin (data){
    console.log(data);
    const response= await authAxiosInstance.post('/CustomerLogin', data);
    if([200,201].includes(response.status)){
      const {access_token,refresh_token}=response?.data?.data;
      // console.log(response.data?.data);
      setAccessToken(access_token);
      setRefreshToken(refresh_token);
    }
    // console.log(response);

    return response.data;

  }

  
};

export const {fetchNewAccessToken, userSignin}=authAPIs;

export default authAPIs;