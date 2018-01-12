import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RsvpItem, { rsvpShape } from './RsvpItem'

class RsvpList extends PureComponent {
	static propTypes = {
		rsvps: PropTypes.arrayOf(rsvpShape).isRequired
	}

  renderRsvp = (rsvp) => (
      <RsvpItem
        memberPhoto={rsvp.member.photo}
        eventName={rsvp.event.event_name}
        memberName={rsvp.member.member_name}
       />
  )

	render() {
		return (
      <div className="rsvp wrapper">
        <h1>RSVP List</h1>
        <main>
            {this.props.rsvps.map(this.renderRsvp.bind(this))}
        </main>
      </div>
		)
	}
}

export default RsvpList
