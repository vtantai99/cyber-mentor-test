import { stringify } from 'qs'
import { ROUTES_NAME } from 'Routes/constans'
import axiosClient from './api'
import { END_POINT } from './constants'

const checkParams = data =>
{
  for (let key in data) {
    if (data[key] === '') {
      data[key] = undefined
    };
  }
  return data
}

class ProjectAPI
{

  setAuthorization = (token) => (axiosClient.defaults.headers.Authorization = `Bearer ${token}`)

  signOut = () => {
    axiosClient.defaults.headers.Authorization = ''
    localStorage.removeItem('token')
  }

  signIn = ({ data, navigate }) =>
  {
    return axiosClient
      .post(END_POINT.SIGN_IN, data)
      .then(async (res) =>
      {
        await localStorage.setItem('token', res.content.accessToken)
      })
      .then(() => navigate(ROUTES_NAME.PROJECTS))
  }

  signUp = ({ data }) =>
  {
    return axiosClient.post(END_POINT.SIGN_UP, data)
  }

  createProject = ({ data }) =>
  {
    return axiosClient.post(END_POINT.CREATE_PROJECT, data)
  }

  getProjects = (...params) =>

    axiosClient.get(`${END_POINT.GET_PROJECTS}?${stringify(checkParams(...params))}`)

}
const projectAPI = new ProjectAPI()

export default projectAPI
