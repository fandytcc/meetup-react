import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export const rsvpShape = PropTypes.shape({
  eventName: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired,
  memberPhoto: PropTypes.string.isRequired
})

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
