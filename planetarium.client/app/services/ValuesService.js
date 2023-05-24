import { AppState } from "../AppState.js";
import { Value } from "../models/Value.js";
import { saveState } from "../utils/Store.js";

function save() {
  saveState('values', AppState.values)
}

class ValuesService {
  removeAll() {
    AppState.values = []
    save()
  }
  addValue() {
    AppState.values = [...AppState.values, new Value({ title: Math.round(Math.random() * 20) })]
    save()
  }

  /**
   * @param {string} id
   */
  removeValue(id) {
    AppState.values = AppState.values.filter(v => v.id !== id)
    save()
  }
}

export const valuesService = new ValuesService();

