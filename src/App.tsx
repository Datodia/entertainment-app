import { createContext, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage';
import { TVseries } from './pages/TVseries/TVseries';
import { Movies } from './pages/Movies/Movies';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { Root } from './pages/Root/Root';
import Data from './data.json'
import { DataType, Props } from './Interface';


export const DataContext = createContext<Props>({
  data: [],
  search: '',
  setData: () => { },
  setSearch: () => { }
})

function App() {

  const [data, setData] = useState<DataType[]>(Data)
  const [search, setSearch] = useState<string>("")



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/tvseries' element={<TVseries />} />
        <Route path='/bookmarked' element={<Bookmark />} />
      </Route>
    ))

  return (
    <DataContext.Provider value={{ data, search, setSearch, setData }}>
      <RouterProvider router={router} />
    </DataContext.Provider >
  )
}

export default App
