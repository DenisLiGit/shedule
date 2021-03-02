import axios from "axios";

const sheduleApi = {
    async getShedule (userId, sheduleId) {
        try {
            const res = await axios.get(
                `/api/shedule/getShedule?userId=${userId}&sheduleId=${sheduleId}`)

            return res
        } catch (error) {
            return error.response.data
        }
    },
    async setShedule (userId, shedule) {
        try {
            const res = await axios.post(
                `/api/shedule/setShedule`, {
                    userId,
                    shedule
                })

            return res
        } catch (error) {
            return error.response.data
        }
    },
    async deleteShedule (userId, sheduleId) {
        try {
            const res = await axios.delete(
                `/api/shedule/deleteShedule?userId=${userId}&sheduleId=${sheduleId}`)

            return res
        } catch (error) {
            return error.response.data
        }
    }
}

export default sheduleApi