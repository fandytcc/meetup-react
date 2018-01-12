import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './RsvpItem.css'

export const rsvpShape = PropTypes.shape({
  eventName: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired,
  memberPhoto: PropTypes.string
})

// event = PropTypes.shape({
//  event_name: PropTypes.string.isRequired
// })
// member = PropTypes.shape({
//  member_name: PropTypes.string.isRequired,
//  photo: PropTypes.string
// })

class RsvpItem extends PureComponent {

	static propTypes = {
		...rsvpShape.isRequired
	}

	render() {
    const { eventName, memberName, memberPhoto } = this.props

		return (
      <article className="RsvpItem">

        <div>
          <img src={ memberPhoto } alt="memberPhoto"/>
          <h2>{ eventName }</h2>
          <h2>{ memberName } is joining this event.</h2>
        </div>

      </article>
		)
	}
} //class ends

export default RsvpItem
