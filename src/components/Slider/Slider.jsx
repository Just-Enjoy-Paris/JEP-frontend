import { useState, useEffect, useCallback } from "react"

import "./Slider.css"

export default function Slider() {
  const examples = [
    { text: "Exemple 1" },
    { text: "Exemple 2" },
    { text: "Exemple 3" }
  ]

  const [currentExampleIndex, setCurrentExampleIndex] = useState(0)

  const goToNextExample = useCallback(() => {
    setCurrentExampleIndex(
      prevIndex => (prevIndex + 1 + examples.length) % examples.length
    )
  }, [examples.length])

  useEffect(() => {
    const intervalId = setInterval(goToNextExample, 3000)
    return () => clearInterval(intervalId)
  }, [goToNextExample])

  const currentExampleNumber = currentExampleIndex + 1
  const totalExamples = examples.length

  return (
    <div className="slider">
      <div className="exampleContainer">
        <div className="example">{examples[currentExampleIndex].text}</div>
        <span className="exampleCounter">{`${currentExampleNumber}/${totalExamples}`}</span>
      </div>
    </div>
  )
}
