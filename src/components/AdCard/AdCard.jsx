import "./adCard.css"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const AdCard = () => {
  // Use useInView to detect when the component is in view
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  // Define animation variants for the motion.div component
  const variants = {
    hidden: { x: "15vw", opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <div className="ad-card-flex">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="ad-card">
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRidW9hejQzNTU0NGtrNmNhMDgxZTk1dWo1cWJpMDduOHBzbDBueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UgV8Y7bDxsZDCP01eo/giphy-downsized-large.gif"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  )
}

export default AdCard
