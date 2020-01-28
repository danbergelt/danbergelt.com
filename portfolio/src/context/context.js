import React, { useState, createContext } from "react"

export const DarkContext = createContext()

const windowGlobal = typeof window !== "undefined" && window

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(
    windowGlobal.localStorage.getItem("dark") ? true : false
  )

  return (
    <DarkContext.Provider value={[dark, setDark]}>
      {children}
    </DarkContext.Provider>
  )
}
