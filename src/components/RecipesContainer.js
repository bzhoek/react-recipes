import React from 'react'
import {connect} from 'react-redux'
import RecipeItem from './RecipeItem'
import RecipeEditor from './RecipeEditor'
import Title from './Title'

export const RecipesContainer = props => {

  const renderRecipe = (recipe, index) => {
    return <RecipeItem key={index} onChange={() => props.updateRecipe(recipe._id)} {...recipe}/>
  }

  return (
    <div className="recipes wrapper">
      <header>
        <Title content="Recipes"/>
        <RecipeEditor/>
      </header>

      <main>
        {props.recipes.map(renderRecipe)}
      </main>
    </div>
  )
}

const mapStateToProps = ({recipes}) => ({recipes})

export default connect(mapStateToProps)(RecipesContainer)