import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import createRecipe from '../actions/recipes/create'
import './RecipeEditor.css'

const TYPES = [
  'vegan',
  'vegatarian',
  'pescatarian'
]

class RecipeEditor extends PureComponent {
  constructor(props) {
    super()

    const {title, summary, vegan, vegetarian, pescatarian, photo} = props

    this.state = {
      title,
      summary,
      vegan,
      vegetarian,
      pescatarian,
      photo,
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({title: this.refs.title.value})
  }

  updatePhoto(event) {
    this.setState({photo: this.refs.photo.value})
  }

  updateIntro(event) {
    this.setState({summary: this.refs.summary.value})
  }

  setType(event) {
    this.setState({
      vegan: event.target.value === 'vegan',
      vegetarian: event.target.value === 'vegetarian',
      pescatarian: event.target.value === 'pescatarian',
    })
  }

  saveRecipe() {
    const {
      title,
      summary,
      vegetarian,
      vegan,
      pescatarian,
      photo
    } = this.state

    const recipe = {
      title,
      summary,
      vegetarian,
      vegan,
      pescatarian,
      liked: false,
      photo
    }

    console.log(recipe)
    this.props.createRecipe(recipe)
  }

  render() {
    return (
      <div className="editor">
        <input type="text" ref="title"
               defaultValue={this.state.title}
               onChange={this.updateTitle.bind(this)}
               onKeyDown={this.updateTitle.bind(this)}/>
        <textarea ref="summary" onChange={this.updateIntro.bind(this)}>
          {this.state.summary}
        </textarea>
        <input type="text" ref="photo"
               defaultValue={this.state.photo}
               onChange={this.updatePhoto.bind(this)}
               onKeyDown={this.updatePhoto.bind(this)}/>
        {TYPES.map((type) =>
          (<label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)}/>
            {type}
          </label>)
        )}

        <button onClick={this.saveRecipe.bind(this)}>Save</button>
      </div>
    )
  }
}


export default connect(null, {createRecipe})(RecipeEditor)