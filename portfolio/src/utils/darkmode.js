export const addDark = () => {
  const windowGlobal = typeof window !== "undefined" && window
  windowGlobal.localStorage.setItem("dark", true)
}

export const removeDark = () => {
  const windowGlobal = typeof window !== "undefined" && window
  windowGlobal.localStorage.removeItem("dark")
}
