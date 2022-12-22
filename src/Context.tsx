import { createContext, ReactNode, useState } from "react"
import { DataType, Props } from "./Interface"
import Data from './data.json'


export const DataContext = createContext<Props>({
    data: [],
    search: '',
    setData: () => { },
    setSearch: () => { }
})

const DataContextProvider = (props: { children: ReactNode }) => {
    const [data, setData] = useState<DataType[]>(Data)
    const [search, setSearch] = useState<string>("")


    return (
        <DataContext.Provider value={{ data, search, setSearch, setData }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
