import { Pop } from "./Pop.js"

function getElem(id) {
  try {
    const elem = document.getElementById(id)
    if (!elem) {
      throw new Error('Invalid element Id ' + id)
    }
    return elem
  } catch (error) {
    console.error('[ATTEMPTING_TO_SET_HTML]', id)
    Pop.error(error)
  }
}

export function setHTML(id, html) {
  getElem(id).innerHTML = html
}

export function setText(id, text) {
  getElem(id).innerText = text
}