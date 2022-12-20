import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage';
import { TVseries } from './pages/TVseries/TVseries';
import { Movies } from './pages/Movies/Movies';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { Root } from './pages/Root/Root';

function App() {
  const [count, setCount] = useState(0)

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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
