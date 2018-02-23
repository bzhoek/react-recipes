import React from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from './LikeButton'

const RecipeItem = (props) => {

  const toggleLike = () => {
    props.onChange(props._id)
  }

  const {title, summary, vegan, vegetarian, pescatarian, liked} = props

  return (
    <article className="recipe">
      <h1>{title}</h1>
      <div>
        <p>{summary}</p>
        <ul>
          {pescatarian && <li><img src={Pescatarian}/></li>}
          {vegan && <li>🌾</li>}
          {vegetarian && <li>🥕</li>}
        </ul>
        <LikeButton liked={liked} onChange={toggleLike}/>
      </div>
    </article>
  )
}

RecipeItem.propTypes = {
  _id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool,
}

export default RecipeItem