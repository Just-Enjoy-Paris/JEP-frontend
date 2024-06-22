import { useState, useEffect, useCallback } from "react"
import "./slider.css"

export default function Slider() {
  // Array of example objects with text properties
  const examples = [
    { text: "Exemple 1" },
    { text: "Exemple 2" },
    { text: "Exemple 3" }
  ]

  // State variable to track the current example index
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0)

  // Function to go to the next example, wrapped in useCallback for memoization
  const goToNextExample = useCallback(() => {
    setCurrentExampleIndex(
      prevIndex => (prevIndex + 1 + examples.length) % examples.length
    )
  }, [examples.length])

  // useEffect to set up an interval for automatic slide transition
  useEffect(() => {
    const intervalId = setInterval(goToNextExample, 3000)
    return () => clearInterval(intervalId)
  }, [goToNextExample])

  // Variables to track the current example number and total number of examples
  const currentExampleNumber = currentExampleIndex + 1
  const totalExamples = examples.length

  return (
    <div className="slider">
      <div className="exampleContainer">
        {/* Display the current example text */}
        <div className="example">{examples[currentExampleIndex].text}</div>
        {/* Display the current example number and total number of examples */}
        <span className="exampleCounter">{`${currentExampleNumber}/${totalExamples}`}</span>
      </div>
    </div>
  )
}
