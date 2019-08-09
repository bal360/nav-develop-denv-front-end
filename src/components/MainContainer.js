import React, { Component } from 'react'

export default class MainContainer extends Component {
  constructor () {
    super()
    this.state = {
      location: 'Zeppelin Station',
      events: ['event 1', 'event 2', 'event 3', 'event 4']
    }
  }

  render () {
    const { location } = this.state
    const { events } = this.state
    return (
      <div className='main-container'>
        <NavBar />
        <CardContainer location={location} events={events} />
      </div>
    )
  }
}
