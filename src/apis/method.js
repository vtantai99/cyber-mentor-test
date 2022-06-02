/* eslint-disable default-case */
import { toast } from 'react-toastify'

class ApiError extends Error {
  constructor(message, error, type) {
    super(message)
    this.errors = error
    this.type = type
  }
}

function getAuthHeader() {
  const tokenCyber =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E'
  const token = JSON.parse(localStorage.getItem('user'))?.token
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    TokenCybersoft: tokenCyber,
    Accept: 'application/json'
  }
}
function readResponseAsJSON(response) {
  return response.json()
}
function logError(error) {
  if (error instanceof ApiError) {
    toast.error({
      toastId: error.errors.messageId,
      position: toast.POSITION.TOP_RIGHT
    })
  }
  throw error
}
async function validateResponse(response) {
  if (!response.ok) {
    let error = {}
    const type = 1
    switch (response.status) {
      case 401:
        error = {
          messageId: 'Authentication failed',
          message: 'Quá thời gian đăng nhập'
        }

        break
    }
    if (error && type !== 1) {
      throw new ApiError(response.statusText, error, type)
    } else {
      throw Error(error.message)
    }
  }
  return response
}

export function fetchJSON(linkApi) {
  return fetch(linkApi, { headers: getAuthHeader() })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError)
}

export function postJSON(linkApi, body) {
  return fetch(linkApi, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify(body)
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError)
}
export function putJSON(linkApi, body) {
  return fetch(linkApi, {
    method: 'PUT',
    headers: getAuthHeader(),
    body: JSON.stringify(body)
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError)
}

export function deleteRequest(linkApi) {
  return fetch(linkApi, {
    method: 'DELETE',
    headers: getAuthHeader()
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError)
}
