import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'

const Title = ({content}) => <h1 className="Title">{content}</h1>

Title.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Title