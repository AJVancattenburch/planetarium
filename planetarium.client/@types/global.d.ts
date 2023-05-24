import { AxiosStatic } from './Axios'

declare global {
  interface Window {
    axios: AxiosStatic
  }
}

export { }

