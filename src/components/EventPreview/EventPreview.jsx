import "./eventPreview.css"
import Slider from "../Slider/Slider"

export default function EventPreview() {
  return (
    <section>
      <h1 className="previewTitle">Evenements</h1>
      <div className="previewContainer">
        <Slider />
      </div>
    </section>
  )
}
