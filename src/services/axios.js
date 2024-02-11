// axios.js
import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

// instance.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('jwt')
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

export default instance