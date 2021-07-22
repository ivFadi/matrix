import axios from "axios";

const API_ROOT = 'http://127.0.0.1:3500'

export default function request({url, method="GET", payload=null}) {
  return axios({
    method,
    url: `${API_ROOT}${url}`,
    data: payload
  })

  .then(responseData => {
    return {
      status: responseData.status,
      data: responseData.data
    };
  })

  .catch(error => {
    return {
      status: error.status,
      data: error.data
    };
  })
}