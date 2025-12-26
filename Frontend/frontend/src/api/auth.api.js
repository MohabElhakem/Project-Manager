// this file conatins functions to talk to my back end
import axios from "axios";

// base URL 
const API_BASE = "http://localhost:3000"

// Login function
export const loginUser = async(email , password) => {
    try{
        const response = await axios.post(`${API_BASE}/manager/user/login`,{
            email,
            password
        });
        // Backend returns data
        return response.data;
    }catch(error){
        throw error.response?.data || error
    }
}

// Sign up function

export const SignUser =  async (email , username , password , role = "member") =>{
    try {
        const response = await axios.post(`${API_BASE}/manager/user/sign`,{
            email,
            password,
            username,
            role
        });
        // Backend Returns
        return response.data
    } catch (error) {
        throw error.response?.data || error
    }
}