import { useContext, useEffect } from "react"
import { motion } from "framer-motion"
import "./loader.css"
import { DataContext } from "../../../context/data.context"

const Loader = () => {
  const { setShowLoader } = useContext(DataContext)
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false)
    }, 3200)
  }, [setShowLoader])

  const createLogoAnimation = delay => ({
    hidden: {
      opacity: 0,
      fill: "rgb(255, 255, 255)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgb(255, 255, 255)",
      transition: {
        default: { duration: 1, ease: "easeIn", delay: delay },
        fill: {
          duration: 1,
          color: "rgb(19, 26, 34)",
          ease: "easeIn",
          delay: delay
        }
      }
    }
  })

  return (
    <main>
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 754.4">
        <motion.circle
          className="cls-18"
          cx="338.58"
          cy="256.95"
          r="18.68"
          initial="hidden"
          animate="visible"
          variants={createLogoAnimation(0.6)}
        />
        <g id="_Répétition_radiale_">
          <motion.circle
            className="cls-3"
            cx="585.48"
            cy="353.48"
            r="19.84"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(2.6)}
          />
        </g>
        <g id="_Répétition_radiale_-2">
          <motion.circle
            className="cls-2"
            cx="601.13"
            cy="399.48"
            r="19.84"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(2.2)}
          />
        </g>
        <g id="_Répétition_radiale_-3">
          <motion.circle
            className="cls-1"
            cx="591.68"
            cy="447.13"
            r="19.84"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(1.8)}
          />
        </g>
        <g id="_Répétition_radiale_-4">
          <motion.circle
            className="cls-5"
            cx="559.67"
            cy="483.67"
            r="19.84"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(1.4)}
          />
        </g>
        <g id="_Répétition_radiale_-5">
          <motion.circle
            className="cls-4"
            cx="513.67"
            cy="499.32"
            r="19.84"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(1)}
          />
        </g>
        <g>
          <motion.path
            d="M323.26,378.47v19.73c0,13.64-5.1,21.7-10.09,25.82-5.85,4.83-14.45,6.9-20.59,5.71-9.73-1.88-15.12-7.28-17.94-11.48-3.75-5.6-5.14-12.52-3.83-18.98,2.88-14.15,14.89-23.66,37.4-23.66h10.87s39.34,0,39.34,0h0c2.85,0,5.78,0,8.81,0v-31c-4.52,0-8.84,0-12.98,0h0s-31,0-31,0h0s-15.04,0-15.04,0c-34.09,0-61.96,19.93-67.78,48.47-2.96,14.52,.12,29.98,8.44,42.41,8.61,12.87,22.05,21.64,37.83,24.68,15.31,2.95,32.27-1.73,45.35-12.53,14.32-11.82,22.21-29.38,22.21-49.44v-19.73h-31Z"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(0.6)}
          />
          <motion.path
            className="cls-12"
            d="M354.26,341.73v-44.76c0-8.56-6.94-15.5-15.5-15.5s-15.5,6.94-15.5,15.5v44.76h31Z"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(0.6)}
          />
          <motion.path
            className="cls-13"
            d="M447.51,429.09c-31.47-3.32-46.1-29.1-46.44-53.45,.01,0,.04-32.68,.04-32.68,0,0-.05-3.77-.02-5.46,.14-9.77-.74-15.53,5.17-21.47,.94-.94,2.56-2.19,5.13-2.95,1.6-.47,3.45-.83,5.61-.73,3.2,.15,6.2,1.2,8.44,3.05,1.4,1.16,2.56,2.66,3.26,4,2.02,3.86,2.8,10.4-.53,15.61s-8.52,8.36-24.18,9.35v31.16c19.11-.96,36.37-5.32,48.84-22.78,10-14,11.32-32.21,3.44-47.53-7.65-14.86-22.07-23.74-38.59-23.74h0c-13.07,0-24.35,4.41-32.61,12.75-9.83,9.93-15.15,25.42-14.96,43.59,.02,2.05,.03,4.32,.03,6.79,0,0-.01,32.34-.01,32.34,.48,21.78,8.22,42,21.93,57.13,13.96,15.4,33.46,24.51,55.47,26.11v-31.09Z"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(0.6)}
          />
          <motion.path
            className="cls-14"
            d="M480.88,487.81c.17,.2,.34,.4,.49,.61v12.72c0,8.56-6.94,15.5-15.5,15.5s-15.5-6.94-15.5-15.5v-13.05c2.92-3.58,7.09-6.16,12-7,1.14-.2,2.27-.29,3.39-.29,3.55,0,6.96,.96,9.91,2.66,.49,.28,.96,.59,1.43,.92,.93,.64,1.81,1.38,2.62,2.18,.41,.4,.79,.82,1.16,1.25Z"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(0.6)}
          />
          <motion.path
            className="cls-15"
            d="M564.59,399.59c0,15.8-5.92,30.46-16.65,41.26-16.1,16.2-38.84,19.6-55.09,19.6h-8.59v-31h8.59c21.38,0,31.67-7.06,36.54-14.73,3-4.17,4.76-9.28,4.76-14.8,0-14.04-11.39-25.43-25.43-25.43s-24.18,11.5-26.27,24.95c-.8,5.9-1.08,12.71-1.08,21.41v63.12c-4.1-3.86-9.61-6.17-15.61-6.17-1.3,0-2.61,.11-3.9,.33-4.45,.77-8.38,2.78-11.49,5.63v-62.91c0-20.28,3.53-36.88,10.49-49.34,9.82-17.6,26.14-26.91,47.19-26.91,32.23,0,56.54,23.64,56.54,54.99Z"
            initial="hidden"
            animate="visible"
            variants={createLogoAnimation(0.6)}
          />
        </g>
        <g id="_Répétition_radiale_-6">
          <g>
            <motion.path
              className="cls-16"
              d="M469.11,520.19c-.57,.1-1.14,.18-1.71,.22-2.67,.23-5.27-.09-7.7-.87-.91-.28-1.79-.64-2.64-1.05-.34-.17-.67-.34-.99-.52-.18-.1-.36-.21-.54-.32-.53-.32-1.05-.66-1.55-1.04-3.99-2.92-6.89-7.34-7.79-12.6-1.02-5.89,.68-11.63,4.18-15.92,2.92-3.58,7.09-6.16,12-7,1.14-.2,2.27-.29,3.39-.29,3.55,0,6.96,.96,9.91,2.66,.49,.29,.97,.59,1.43,.92,.93,.64,1.81,1.38,2.62,2.18,.4,.4,.79,.82,1.16,1.25,.17,.2,.34,.4,.49,.61,.02,.02,.04,.04,.05,.06,.35,.45,.69,.92,1,1.4,1.4,2.18,2.4,4.67,2.87,7.39,1.86,10.8-5.38,21.06-16.18,22.92Z"
              initial="hidden"
              animate="visible"
              variants={createLogoAnimation(0.8)}
            />
            <motion.path
              className="cls-17"
              d="M469.11,520.19c-.57,.1-1.14,.18-1.71,.22-.57,.06-1.13,.08-1.69,.08-2.08,0-4.1-.33-6.01-.95-.91-.28-1.79-.64-2.64-1.05-.34-.16-.67-.34-.99-.52-.18-.1-.36-.21-.54-.32-.54-.31-1.05-.66-1.55-1.04-3.99-2.92-6.89-7.34-7.79-12.6-1.02-5.89,.68-11.63,4.18-15.92,2.92-3.58,7.09-6.16,12-7,1.14-.2,2.27-.29,3.39-.29,3.55,0,6.96,.96,9.91,2.66,.49,.28,.96,.59,1.43,.92,.93,.64,1.81,1.38,2.62,2.18,.41,.4,.79,.82,1.16,1.25,.17,.2,.34,.4,.49,.61,.02,.02,.04,.04,.05,.06,.35,.45,.69,.92,1,1.4,1.4,2.18,2.4,4.67,2.87,7.39,1.86,10.8-5.38,21.06-16.18,22.92Z"
              initial="hidden"
              animate="visible"
              variants={createLogoAnimation(0.6)}
            />
          </g>
        </g>
      </motion.svg>
    </main>
  )
}

export default Loader
