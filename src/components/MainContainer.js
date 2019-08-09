import React, { Component } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

export default class MainContainer extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
      events: [],
      filteredEvents: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/v1/events')
      .then(res => res.json())
      .then(res =>
        this.setState({
          events: res
        })
      )
  }

  updateLocation = location => {
    this.setState({
      location: location
    })
  }

  filterEvents = locationID => {
    let filteredEvents = this.state.events.filter(event => {
      let eventName = event.location_id.toString()
      return eventName.includes(locationID)
    })

    this.setState({
      filteredEvents: filteredEvents
    })
  }

  render () {
    console.log('the one', this.state.filteredEvents)
    const { location } = this.state
    const { events } = this.state
    return (
      <div className='main-container'>
        {console.log(this.state.location)}
        <NavBar
          location={location}
          filterEvents={this.filterEvents}
          updateLocation={this.updateLocation}
        />
        <CardContainer filteredEvents={this.state.filteredEvents} />
      </div>
    )
  }
}
