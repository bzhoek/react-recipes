import React from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'

const LikeButton = props => {

  const classNames = () => {
    let classes = 'like'

    if (props.liked) {
      classes += ' liked'
    }

    return classes
  }

  const toggleLike = () => {
    props.onChange()
  }

  return (
    <p className={classNames()}>
      <button onClick={toggleLike}>
        {props.liked ? '❤️' : '♡'}
      </button>
      <span className="likes">{props.liked ? 'You like this' : null}</span>
    </p>
  )
}

LikeButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  liked: PropTypes.bool
}

export default LikeButton