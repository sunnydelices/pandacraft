import { AxiosError } from 'axios'

export default function ({ $axios }:any) {
  $axios.onError((error: AxiosError) => {
    console.log(error.response?.status, error.message)
  })
}
