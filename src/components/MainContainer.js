import React, { Component } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

export default class MainContainer extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
      events: []
    }
  }

  updateLocation = location => {
    this.setState({
      location: location
    })
  }
  render () {
    const { location } = this.state
    const { events } = this.state

    return (
      <div className='main-container'>
        {console.log(this.state.location)}
        <NavBar location={location} updateLocation={this.updateLocation} />
        <CardContainer location={location} events={events} />
      </div>
    )
  }
}
