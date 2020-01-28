import React, { useState, createContext } from "react"
import { useEffect } from "react"

export const DarkContext = createContext()

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(undefined)

  useEffect(() => {
    setDark(localStorage.getItem("dark"))
  }, [])

  return (
    <DarkContext.Provider value={[dark, setDark]}>
      {children}
    </DarkContext.Provider>
  )
}
