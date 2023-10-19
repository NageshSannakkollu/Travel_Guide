import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from './component/TravelItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './App.css'

// Replace your code here
class App extends Component {
  state = {initialTravelsList: [], isLoading: true}

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({initialTravelsList: formattedData, isLoading: false})
  }

  renderLoadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFFF" height={80} width={80} />
    </div>
  )

  renderTravelGuideView = () => (
    <div>
      <h1>Hello</h1>
    </div>
  )

  renderTravelGuideView = () => {
    const {initialTravelsList} = this.state
    return (
      <ul className="list-container">
        {initialTravelsList.map(eachGuide => (
          <TravelItem travelDetails={eachGuide} key={eachGuide.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="travels-guide-heading">Travel Guide</h1>
        {isLoading ? this.renderLoadingView() : this.renderTravelGuideView()}
      </div>
    )
  }
}

export default App
