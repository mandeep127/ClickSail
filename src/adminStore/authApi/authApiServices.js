const baseUrl=process.env.REACT_APP_BASE_URL


export const authLoginApi=async(data)=>{
    try {
       
        
        const response=axios.get(`${baseUrl}/admin/login`,data)
        return response
    } catch (error) {
        console.log(error)
        return error
        
    }
}