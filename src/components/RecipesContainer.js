import React, {PureComponent} from 'react'
import RecipeItem from './RecipeItem'
import Title from './Title'

class RecipesContainer extends PureComponent {

  renderRecipe(recipe, index) {
    return <RecipeItem key={index} onChange={() => this.props.updateRecipe(recipe._id)} {...recipe}/>
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes"/>
        </header>

        <main>
          {this.props.recipes.map(this.renderRecipe.bind(this))}
        </main>
      </div>
    )
  }
}

export default RecipesContainer