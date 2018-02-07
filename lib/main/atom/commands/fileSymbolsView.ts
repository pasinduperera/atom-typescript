import {commands} from "./registry"
import {commandForTypeScript} from "../utils"
import {toggleFileSymbols} from "../views/symbols/symbolsViewMain"

commands.set("typescript:toggle-file-symbols", () => {
  return async e => {
    if (!commandForTypeScript(e)) {
      return
    }
    toggleFileSymbols()
  }
})
