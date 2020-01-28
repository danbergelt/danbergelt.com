const windowGlobal = typeof window !== "undefined" && window

export const addDark = () => {
  windowGlobal.localStorage.setItem("dark", true)
}

export const removeDark = () => {
  windowGlobal.localStorage.removeItem("dark")
}
