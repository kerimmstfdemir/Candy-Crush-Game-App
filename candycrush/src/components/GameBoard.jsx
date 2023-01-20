/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

//? import candy images
import blueCandy from "../assets/game-images/blue-candy.png"
import greenCandy from "../assets/game-images/green-candy.png"
import orangeCandy from "../assets/game-images/orange-candy.png"
import purpleCandy from "../assets/game-images/purple-candy.png"
import redCandy from "../assets/game-images/red-candy.png"
import yellowCandy from "../assets/game-images/yellow-candy.png"
import blank from "../assets/game-images/blank.png"

const GameBoard = () => {

  const [colorsArr, setColorsArr] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [validMove, setValidMove] = useState(false)

  const width = 8
  const candyCrushColors = [
    blueCandy,
        greenCandy,
        orangeCandy,
        purpleCandy,
        redCandy,
        yellowCandy
  ]

  //? Check the matching 5-colors in the columns at the same time and assign blank if any.
  const checkColumnOfFive = () => {
    for (let i = 0; i <= (width * (width - 4) - 1); i++) {
      const columnOfFive = [i, i + width, i + 2 * width, i + 3 * width, i + 4 * width]
      const checkedColor = colorsArr[i]

      if (columnOfFive.every(square => colorsArr[square] === checkedColor)) {
        columnOfFive.forEach(square => colorsArr[square] = blank)
        return true
      }
    }
  }

  //? Check the matching 5-colors in the rows at the same time and assign blank if any.
  const checkRowOfFive = () => {
    const notValid = []
    //* creates notValid array for row of three
    for (let i = 0; i < width * width; i++) {
      if (i % width === width - 4 || i % width === width - 3 || i % width === width - 2 || i % width === width - 1) {
        notValid.push(i)
      }
    }

    for (let i = 0; i < width * width; i++) {
      const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4]
      const checkedColor = colorsArr[i]

      if (notValid.includes(i)) continue

      if (rowOfFive.every(square => colorsArr[square] === checkedColor)) {
        rowOfFive.forEach(square => colorsArr[square] = blank)
        return true
      }
    }
  }

  //? Check the matching 4-colors in the columns at the same time and assign blank if any.
  const checkColumnOfFour = () => {
    for (let i = 0; i <= (width * (width - 3) - 1); i++) {
      const columnOfFour = [i, i + width, i + 2 * width, i + 3 * width]
      const checkedColor = colorsArr[i]

      if (columnOfFour.every(square => colorsArr[square] === checkedColor)) {
        columnOfFour.forEach(square => colorsArr[square] = blank)
        return true
      }
    }
  }

  //? Check the matching 4-colors in the rows at the same time and assign blank if any.
  const checkRowOfFour = () => {
    const notValid = []
    //* creates notValid array for row of three
    for (let i = 0; i < width * width; i++) {
      if (i % width === width - 3 || i % width === width - 2 || i % width === width - 1) {
        notValid.push(i)
      }
    }

    for (let i = 0; i < width * width; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const checkedColor = colorsArr[i]

      if (notValid.includes(i)) continue

      if (rowOfFour.every(square => colorsArr[square] === checkedColor)) {
        rowOfFour.forEach(square => colorsArr[square] = blank)
        return true
      }
    }
  }

  //? Check the matching 3-colors in the columns at the same time and assign blank if any.
  const checkColumnOfThree = () => {
    for (let i = 0; i <= (width * (width - 2) - 1); i++) {
      const columnOfThree = [i, i + width, i + 2 * width]
      const checkedColor = colorsArr[i]

      if (columnOfThree.every(square => colorsArr[square] === checkedColor)) {
        columnOfThree.forEach(square => colorsArr[square] = blank)
        return true
      }
    }
  }

  //? Check the matching 3-colors in the rows at the same time and assign blank if any.
  const checkRowOfThree = () => {
    const notValid = []
    //* creates notValid array for row of three
    for (let i = 0; i < width * width; i++) {
      if (i % width === width - 2 || i % width === width - 1) {
        notValid.push(i)
      }
    }

    for (let i = 0; i < width * width; i++) {
      const rowOfThree = [i, i + 1, i + 2]
      const checkedColor = colorsArr[i]

      if (notValid.includes(i)) continue

      if (rowOfThree.every(square => colorsArr[square] === checkedColor)) {
        rowOfThree.forEach(square => colorsArr[square] = blank)
        return true
      }
    }
  }

  //? This fuction makes the candies go from top to bottom.
  const moveIntoSquareBelow = () => {
    for (let i = 0; i < width * width - width; i++) {
      const firstRow = Array.from({ length: width }, (_, i) => i);
      const isFirstRow = firstRow.includes(i)

      if (isFirstRow && colorsArr[i] === blank) {
        const randomNumber = Math.floor(Math.random() * candyCrushColors.length)
        colorsArr[i] = candyCrushColors[randomNumber]
      }

      if (colorsArr[i + width] === blank) {
        colorsArr[i + width] = colorsArr[i]
        colorsArr[i] = blank
      }
    }
  }

  const dragStart = (e) => {
    console.log(e.target);
    console.log("Drag started")
    setSquareBeingDragged(e.target)
  }

  const dragDrop = (e) => {
    console.log(e.target)
    console.log("Drag dropped")
    setSquareBeingReplaced(e.target)
  }

  const dragEnd = (e) => {
    console.log("Drag ended")

    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute("data-id"))
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute("data-id"))

    colorsArr[squareBeingReplacedId] = squareBeingDragged.getAttribute("src")
    colorsArr[squareBeingDraggedId] = squareBeingReplaced.getAttribute("src")

    console.log("squareBeingDraggedId :", squareBeingDraggedId);
    console.log("squareBeingReplacedId :", squareBeingReplacedId);

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width
    ]

    setValidMove(true ? validMoves.includes(squareBeingReplacedId) : false)
    console.log(validMove);

    const isAColumnOfFive = checkColumnOfFive()
    const isARowOfFive = checkRowOfFive()
    const isAColumnOfFour = checkColumnOfFour()
    const isARowOfFour = checkRowOfFour()
    const isAColumnOfThree = checkColumnOfThree()
    const isARowOfThree = checkRowOfThree()

    if (squareBeingReplacedId &&
      validMove &&
      (isAColumnOfFive || isARowOfFive || isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {

      setSquareBeingDragged(null)
      setSquareBeingReplaced(null)
    } else {
      colorsArr[squareBeingReplacedId] = squareBeingReplaced.getAttribute("src")
      colorsArr[squareBeingDraggedId] = squareBeingDragged.getAttribute("src")
      setColorsArr([...colorsArr])
    }
  }

  const createBoard = () => {
    const randomColors = []
    for (let i = 0; i < width * width; i++) {
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
      checkColumnOfFive()
      checkRowOfFive()
      checkColumnOfFour()
      checkRowOfFour()
      checkColumnOfThree()
      checkRowOfThree()
      moveIntoSquareBelow()
      setColorsArr([...colorsArr])
    }, 150)

    return () => {
      clearInterval(timer)
    }
  }, [checkColumnOfFive, checkRowOfFive, checkColumnOfFour, checkRowOfFour, checkColumnOfThree, checkRowOfThree, moveIntoSquareBelow, colorsArr])

  return (
    <div className="flex justify-center p-12]">
      <div className="w-[35rem] h-[35rem] flex flex-wrap">
        {colorsArr.map((item, index) => {
          return (
            <>
              <img
                key={index}
                className="w-[4.375rem] h-[4.375rem] hover:cursor-grab active:cursor-grabbing"
                alt={item}
                src={item}
                data-id={index}
                draggable={true}
                onDragStart={dragStart}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onDrop={dragDrop}
                onDragEnd={dragEnd}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default GameBoard