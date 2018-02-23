import React, {Component} from 'react';
import RecipesContainer from './components/RecipesContainer'

class App extends Component {

  updateRecipe(_id) {
  }

  render() {
    return (
      <div>
        <RecipesContainer updateRecipe={this.updateRecipe.bind(this)}/>
      </div>
    );
  }
}

export default App;
