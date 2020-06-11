import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from './components/Recipe';
import nextId from "react-id-generator";

function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipe] = useState([])

  const htmlId = nextId()

  const APP_ID = 'b0b60c8c'
  const APP_KEYS = 'c71faf6bc583a5afe759e2dae5838dd8'
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}&from=0&to=3&calories=591-722&health=alcohol-free`


  const getData = async () => {
    const result = await Axios.get(url)
    setRecipe(result.data.hits)
    // console.log(result)
  }

  const changeHandler = e => {
    setQuery(e.target.value)
  }

  const submitHandler = e => {
    if (!query) {
      alert('Please add your food')
    } else {
      let textFormate = /^(^[a-zA-Z ]*$)/
      if (!textFormate.test(query)) {
        alert('Please add a valid food')
      } else {
        getData()
      }
    }
    e.preventDefault()
    setQuery('')
  }

  return (
    <div className="container my-5 text-center">
      <h1 className="font-weight-normal">Food search app</h1>
      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search your food" onChange={changeHandler} value={query} />
              <button className="btn btn-info mt-3">Search</button>
            </div>
          </form>
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex">
          {recipes !== [] && recipes.map(recipe => <Recipe key={Math.round(Math.random() * 100000)} recipes={recipe} />)}
        </div>
      </div>
    </div>
  );
}

export default App;