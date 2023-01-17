import { Routes, Route } from "react-router-dom"
import GameBoard from "../components/GameBoard"
import Home from "../components/Home"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/candycrush" element={<GameBoard />}/>
    </Routes>
  )
}

export default AppRouter