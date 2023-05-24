import { Pop } from "./Pop.js"

export function getFormData(form) {
  try {
    const formData = new FormData(form)
    const obj = {}
    formData.forEach((val, key) => {
      // obj[key] = form[key].type == 'checkbox' ? val : false
      obj[key] = val
    })
    return obj
  } catch (error) {
    console.error('[Extracting_Form_Data]', error)
    Pop.error(error)
  }
}
