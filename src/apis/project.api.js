import axiosClient from './api'
import { END_POINT } from './constants'

class ProjectAPI {
  setAuthorization = (token) => (axiosClient.defaults.headers.Authorization = `Bearer ${token}`)

  signIn = ({ data }) => {
    return axiosClient
      .post(END_POINT.SIGN_IN, data)
      .then((res) => this.setAuthorization(res.content.accessToken))
  }
}
const projectAPI = new ProjectAPI()

export default projectAPI
