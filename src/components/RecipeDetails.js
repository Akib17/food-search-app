import React from 'react';
import { v4 as uuidv4 } from 'uuid'

const RecipeDetails = ({ingredients}) => {
    return (
        <div>
            <ul className="list-group">
                {
                    ingredients.map(ing => (
                        <li key={uuidv4} className="list-group-item mt-2 border">
                            <span> {ing.text} </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RecipeDetails;