import React, { useState } from 'react';
// import axios from 'axios';
import { IoClose } from 'react-icons/io5';

export default function UpdateRecipe({ setUpdateModal, currentRecipe, fetchData }) {
    const [recipeName, setRecipeName] = useState(currentRecipe.recipeName);
    const [recipeIngredients, setRecipeIngredients] = useState(currentRecipe.recipeIngredients);
    const [recipeSteps, setRecipeSteps] = useState(currentRecipe.recipeSteps);

    const handleUpdate = async (event) => {
        fetchData();
        setUpdateModal(false);

        // event.preventDefault();
        // try {
        //     await axios.put(`http://localhost:3000/update-sweet/${currentRecipe.id}`, {
        //         recipeName,
        //         recipeIngredients,
        //         recipeSteps
        //     });
        //     fetchData();
        //     setUpdateModal(false);
        // } catch (err) {
        //     console.error(err);
        // }
    };

    return (
        <section className='relative'>
            <IoClose
                className='cursor-pointer text-2xl hover:text-red-700 transition duration-300 ease-in-out absolute top-2 right-2'
                onClick={() => setUpdateModal(false)} />
            <h2 className='text-center my-2'>Update Recipe</h2>
            <form onSubmit={handleUpdate} className="w-[90%] mx-auto">
                <div className="flex w-[100%] justify-between">
                    <label className='w-[20%] text-start'>
                        Recipe Name:
                    </label>
                    <input
                        type="text"
                        className='w-[80%] p-3'
                        id='recipe-name-input'
                        placeholder='Enter recipe name...'
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                    />
                </div>
                <div className="flex w-[100%] justify-between my-3">
                    <label className='w-[20%] text-start'>
                        Recipe Ingredients:
                    </label>
                    <textarea
                        className='w-[80%] bg-gray-100 rounded-lg p-3  h-28 resize-none'
                        id='recipe-ingredients-input'
                        placeholder='Enter ingredients...'
                        value={recipeIngredients}
                        onChange={(e) => setRecipeIngredients(e.target.value)}
                    />
                </div>
                <div className="flex w-[100%] justify-between my-3">
                    <label className='w-[20%] text-start'>
                        Recipe Instructions:
                    </label>
                    <textarea
                        className='w-[80%] bg-gray-100 rounded-lg p-3 h-[150px] resize-none'
                        id='recipe-cooking-steps-input'
                        placeholder='Enter cooking steps...'
                        value={recipeSteps}
                        onChange={(e) => setRecipeSteps(e.target.value)}
                    />
                </div>
                <button className='w-32' type='submit'>Update</button>
            </form>
        </section>
    );
}
