import { Pop } from "./Pop.js"

const APP_NAME = "planetarium.client"

export function saveState(key, value) {
  try {
    const keyName = `${APP_NAME}_${key}`
    let data = value
    if (typeof value != 'string') {
      data = JSON.stringify(data)
    }
    window.localStorage.setItem(keyName, data)
    if (typeof value == 'undefined' || value == null) {
      window.localStorage.removeItem(keyName)
    }
  } catch (error) {
    console.error('[SAVING_STATE]', { key, value })
    Pop.error(error)
  }
}

export function loadState(key, instanceType) {
  try {
    const keyName = `${APP_NAME}_${key}`
    if(!instanceType){
      return window.localStorage.getItem(keyName)
    }
    const keyType = Array.isArray(instanceType) ? '[]' : '{}'
    instanceType = Array.isArray(instanceType) ? instanceType[0] : instanceType
    let data = JSON.parse(window.localStorage.getItem(keyName) || keyType)
    if (Array.isArray(data) && instanceType) {
      return data.map(i => new instanceType(i))
    }
    if (instanceType && data) {
      return new instanceType(data)
    }
    if (keyType == '{}' && !Object.keys(data).length) { return null }
    return data
  } catch (error) {
    console.error('[ATTEMPTING_TO_LOAD_STATE]', { key, instanceType })
    Pop.error(error)
  }
}