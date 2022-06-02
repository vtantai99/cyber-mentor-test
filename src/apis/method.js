/* eslint-disable default-case */
import { toast } from "react-toastify";

class ApiError extends Error {
  constructor(message, error, type) {
    super(message);
    this.errors = error;
    this.type = type;
  }
}

const API_ERROR = 2;
function getAuthHeader() {

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}
function readResponseAsJSON(response) {
  return response.json();
}
function logError(error) {
  if (error instanceof ApiError) {
    toast.error({
      toastId: error.errors.messageId,
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  throw error;
}
async function validateResponse(response) {
  if (!response.ok) {
    let error = {};
    const type = API_ERROR;
    switch (response.status) {
      case 404:
        error = {
          messageId: "404",
          message: "Not found",
        };

        break;
    }
    if (error && type !== 1) {
      throw new ApiError(response.statusText, error, type);
    } else {
      throw Error(error.message);
    }
  }
  return response;
}

export function fetchJSON(linkApi) {
  return fetch(linkApi, { headers: getAuthHeader() })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}

export function postJSON(linkApi, body) {
  return fetch(linkApi, {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}
export function putJSON(linkApi, body) {
  return fetch(linkApi, {
    method: "PUT",
    headers: getAuthHeader(),
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}

export function deleteRequest(linkApi) {
  return fetch(linkApi, {
    method: "DELETE",
    headers: getAuthHeader(),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);
}