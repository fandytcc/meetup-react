import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './TopicsList.css'

class TopicsList extends PureComponent {
	static propTypes = {
		topics: PropTypes.arrayOf(PropTypes.shape({
            topic: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired
    }))
	}

	render() {
		return (
      <div className="topics-wrapper">
          <h1>Topics Top 10</h1>
        <main>
          <ol>
            { this.props.topics.map(topic =>  (<li>{topic.topic} ({topic.count})</li>)) }
          </ol>
        </main>
      </div>
		)
	}
}

const mapStateToProps = ({ topics }) => ({
  topics
})

export default connect(mapStateToProps)(TopicsList)
