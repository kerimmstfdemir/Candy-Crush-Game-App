/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const GameBoard = () => {
  
  const [colorsArr, setColorsArr] = useState([]) 
  
  const width = 8
  const candyCrushColors = [
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "yellow"
  ]

  //? Check the matching 3-colors in the columns at the same time and assign blank if any.
  const checkColumnOfThree = () => {
    for (let i = 0; i <=(width * (width - 2) - 1); i++) {
      const columnOfThree = [i, i + width, i + 2 * width]
      const checkedColor = colorsArr[i]

      if (columnOfThree.every(square => colorsArr[square] === checkedColor)) {
        columnOfThree.forEach(square => colorsArr[square] = "")
      }
    }
  }

  const createBoard = () => {
    const randomColors = []
    for (let i = 0; i < width*width; i++){
      const randomColor = candyCrushColors[Math.floor(Math.random() * candyCrushColors.length)]
      randomColors.push(randomColor)
    }
    setColorsArr(randomColors)
  }

  useEffect(() => {
    createBoard();
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
        checkColumnOfThree()
        setColorsArr([...colorsArr])
    },100)

    return () => {
      clearInterval(timer)
    }
  }, [checkColumnOfThree])

  console.log(colorsArr)

  return (
    <div className="flex justify-center p-12">
    <div className="w-[35rem] h-[35rem] flex flex-wrap">
      {colorsArr.map((item, index) => {
        return(
          <>
          <img
          className="w-[4.375rem] h-[4.375rem]"
          alt={item} 
          style={{ backgroundColor:item }} />
          </>
        )
      }) }
    </div>
    </div>
  )
}

export default GameBoard