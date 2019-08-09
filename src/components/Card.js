import React from 'react'

export default function Card (props) {
  const { event } = props
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>
          {event.name} - {event.time} - Day: {event.day}
        </h5>
        <p className='card-text'>
          {' '}
          <a href={event.speaker_url}>{event.speaker_name} </a>{' '}
        </p>
        <p className='card-text'> {event.description} </p>
      </div>
    </div>
  )
}
