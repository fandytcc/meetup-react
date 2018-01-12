import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class TopicsList extends PureComponent {
	static propTypes = {
		topics: PropTypes.arrayOf(PropTypes.shape({
            topic: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired
    }))
	}

	render() {
		return (
      <div className="topics wrapper">
        <header>
          <h1>Topics Top 10</h1>
        </header>

        <main>
          <ol>
            { this.props.topics.map(topic =>  (<li>{topic.topic} ({topic.count})</li>)) }
          </ol>
        </main>
      </div>
		)
	}
}

export default TopicsList
