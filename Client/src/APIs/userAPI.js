import axios from "axios"

    const userAPI = axios.create({
        baseURL: 'http://localhost:3001/users',
    })

export default userAPI