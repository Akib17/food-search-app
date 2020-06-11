import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import { v4 as uuidv4 } from 'uuid'

const Recipe = ({ recipes }) => {
    const [show, setShow] = useState(false)
    const { label, image, ingredients } = recipes.recipe
    return (
        <div className="card card-body mx-2 shadow border-0">
            <img src={image} alt="" />
            <h4 className="font-weight-normal mt-3">{label}</h4>

            <button onClick={() => setShow(!show)} className="btn btn-info sm">See details</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default Recipe;