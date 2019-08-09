import React from 'react'
import Card from './Card'

const CardContainer = props => {
  const cards = props.filteredEvents.map(event => {
    return <Card event={event} key={event.id} />
  })
  return <React.Fragment>{cards}</React.Fragment>
}
export default CardContainer
