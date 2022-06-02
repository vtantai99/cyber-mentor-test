import axios from 'axios'

const REACT_APP_API_URL = 'https://jiranew.cybersoft.edu.vn/api'
const TOKEN_CYBER =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMC8wNC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODEwODQ4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY4MTIzMjQwMH0._MPzAQorNhL5oVaR3-Az5_jYKW0_Acc0NBq1nZapr5k'

export const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    TokenCybersoft: TOKEN_CYBER,
    Accept: 'application/json'
  }
})

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config
})
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    // Handle errors
    throw error
  }
)
export default axiosClient
