import React, { Component } from 'react'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: false
    }
  }

  handleClick = location => {
    this.setState({
      location: !this.state.location
    })
    this.props.updateLocation(location)
    this.props.filterEvents(location)
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar '>
          <a href='http://localhost:3001'>
            <img src='https://developdenver.org/img/spinning_happy.6dcd176a.gif' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.id)}
                  className='location'
                  id='1'
                >
                  THE SOURCE HOTEL
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.id)}
                  className='location'
                  id='2'
                >
                  CATALYST
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.id)}
                  className='location'
                  id='5'
                >
                  BIGSBYS FOLLY
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.id)}
                  className='location'
                  id='3'
                >
                  BIG TROUBLE
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.id)}
                  className='location'
                  id='4'
                >
                  HELIKON
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
