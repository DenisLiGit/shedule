import axios from "axios";

const userApi = {
    async login(userInfo) {
        try {
            const res = await axios.post('/api/auth/login', {
                userInfo
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            return res.data
        } catch (error) {
            return error.response
        }
    },
    async register(userInfo) {
        try {
            const res = await axios.post('/api/auth/register', {
                userInfo
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            return res
        } catch (error) {
            return error.response
        }
    }
}


export default userApi