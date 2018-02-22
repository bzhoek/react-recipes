import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'

class LikeButton extends PureComponent {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool
  }

  classNames() {
    const {liked} = this.props
    let classes = 'like'

    if (liked) {
      classes += ' liked'
    }

    return classes
  }

  toggleLike() {
    this.props.onChange()
  }

  render() {
    const {liked} = this.props
    return (
      <p className={this.classNames()}>
        <button onClick={this.toggleLike.bind(this)}>
          {liked ? '❤️' : '♡'}
        </button>
        <span className="likes">{liked ? 'You like this' : null}</span>
      </p>
    )
  }
}

export default LikeButton