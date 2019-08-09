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
    console.log(location)
    this.props.updateLocation(location)
  }

  render () {
    console.log()
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar '>
          <img src='https://developdenver.org/img/spinning_happy.6dcd176a.gif' />
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
                  onClick={event => this.handleClick(event.target.innerHTML)}
                  className='location'
                >
                  THE SOURCE HOTEL
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.innerHTML)}
                  className='location'
                >
                  CATALYST
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.innerHTML)}
                  className='location'
                >
                  BIGSBYS FOLLY
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.innerHTML)}
                  className='location'
                >
                  ZEPPELIN STATION
                </span>
              </li>
              <li className='nav-item'>
                <span
                  onClick={event => this.handleClick(event.target.innerHTML)}
                  className='location'
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

