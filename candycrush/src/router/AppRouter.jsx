import { Routes, Route } from "react-router-dom"
import Home from "../components/Home"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default AppRouter