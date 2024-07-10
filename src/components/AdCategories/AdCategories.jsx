import "./adCategories.css"
import { useState, useEffect } from "react"

let adCounter = -1

const AdCategories = () => {
  const [showAd, setShowAd] = useState(false)

  useEffect(() => {
    adCounter += 1
    if (adCounter % 2 === 0) {
      setShowAd(true)
    } else {
      setShowAd(false)
    }
  }, [])

  return (
    showAd && (
      <div className="ad-categories">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajN4MmZ2M255OXJlaG1mNHp6dWhzdnZ0MDNlZWdhNmdxNHhwbWhiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2YZzTQvyoNYf9YI/giphy.gif"
          alt=""
        />
      </div>
    )
  )
}

export default AdCategories
