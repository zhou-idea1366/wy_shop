import axios from 'axios'
import {stringify} from 'qs'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise = {}
    if (type === 'GET') {
      // if (JSON.stringify(data) !== '{}') {
      if (data.wpf) {
        url += '?'+ stringify(data)
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, stringify(data))
    }
    promise
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

