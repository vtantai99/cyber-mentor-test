export const useAuth = () => {
  const auth = window.localStorage.getItem('token')
  return { auth }
}

