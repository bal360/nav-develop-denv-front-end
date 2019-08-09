import React, { Component } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

export default class MainContainer extends Component {
  constructor () {
    super()
    this.state = {
      location: [],
      events: [{
        name: "react",
        speaker: "steph",
        url: "url.com",
        location: "The Source"
      }]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/locations')
      .then(response => response.json())
      .then(res => this.setState({
        location: res
      }))
  }


    render () {
      console.log(this.state.location);
      
    const { location } = this.state
    const { events } = this.state
    return (
      <div className='main-container'>
          {/* <NavBar /> */}
          {/* <h1>{this.state.location.name}</h1>
          <img src={this.state.location.picture} alt="name"/>
          <h3>{this.state.location.address}</h3> */}
          <CardContainer location={location} events={events}/>
          {/* <CardContainer events={this.props.events} /> */}
      </div>
    )
  }
}
