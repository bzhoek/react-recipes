import React, {PureComponent} from 'react'
import RecipeItem from './RecipeItem'
import Title from './Title'

const RecipesContainer = (props) => {

  const renderRecipe = (recipe, index) => {
    return <RecipeItem key={index} onChange={onChange} {...recipe}/>
  }

  const onChange = (_id) => {
    props.updateRecipe(_id)
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