// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, changeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesDetails

  const buttonIdClick = () => {
    changeImage(id)
  }

  return (
    <li className="lists">
      <button type="button" onClick={buttonIdClick} className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
