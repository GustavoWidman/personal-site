import { Routes, Route } from "react-router-dom"
import { StrictMode } from "react"

import MainPage from "./pages/Main"
import NotFoundPage from "./pages/NotFound"


const App = () => {
  return (
    <StrictMode>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </StrictMode>
  )
}

export default App
