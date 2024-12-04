import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./severUrl";
// registerAPI
export const registerAPI=async(reqBody)=>{
return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}
// loginAPI
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
    }