import './index.css'

const TravelItem = props => {
  const {travelDetails} = props
  const {imageUrl, name, description} = travelDetails
  return (
    <li className="travels-list-container">
      <img src={imageUrl} alt={name} className="travel-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  )
}

export default TravelItem
