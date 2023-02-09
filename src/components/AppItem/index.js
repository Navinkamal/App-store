// Write your code here
import './index.css'

const AppItem = props => {
  const {item} = props
  const {imageUrl, appName} = item
  return (
    <li className="app-head">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
