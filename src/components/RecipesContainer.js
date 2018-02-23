import React from 'react'
import RecipeItem from './RecipeItem'
import Title from './Title'

const RecipesContainer = props => {

  const renderRecipe = (recipe, index) => {
    return <RecipeItem key={index} onChange={() => props.updateRecipe(recipe._id)} {...recipe}/>
  }

  return (
    <div className="recipes wrapper">
      <header>
        <Title content="Recipes"/>
      </header>

      <main>
        {props.recipes.map(renderRecipe)}
      </main>
    </div>
  )
}

export default RecipesContainer