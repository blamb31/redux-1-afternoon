import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";

import store from '../../store'

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      recipes: reduxState.recipies
    };
  }

  componentDidMount() {
    store.subscribe( () => {
      const reduxState = store.getState()

      

      this.setState({
        recipes: reduxState.recipies
      })
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          index={i}
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
