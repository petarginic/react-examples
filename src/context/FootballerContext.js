import { useState, useEffect, useContext, createContext } from 'react'
import data from '../data.json'

const FootballerContext = createContext()

export const useFootballers = () => {
    return useContext(FootballerContext)
}

export const FootballerProvider = ({ children }) => {
    const [footballer, setFootballer] = useState([])

    useEffect(() => {
        setFootballer(data.footballers)
    }, [])

    return <FootballerContext.Provider value={{ footballer }}>{children}</FootballerContext.Provider>
}
