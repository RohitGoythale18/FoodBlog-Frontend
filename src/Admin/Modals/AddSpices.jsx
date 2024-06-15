import React, { useState } from 'react';
import axios from 'axios';
import { IoClose } from 'react-icons/io5';

export default function AddSpices({ setAddModal }) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeSteps, setRecipeSteps] = useState('');

    const addSpices = (e) => {
        e.preventDefault();
        const newSpices = { recipeName, recipeIngredients, recipeSteps };

        axios.post('http://localhost:3000/add-spices', newSpices, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log('Recipe added successfully');
                setAddModal(false);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <section className='relative'>
            <IoClose
                className='cursor-pointer text-2xl hover:text-red-700 transition duration-300 ease-in-out absolute top-2 right-2'
                onClick={() => setAddModal(false)} />
            <h2 className='text-center m-5'>Add a Spice</h2>
            <form>
                <div className="flex flex-col text-center w-[70%] mx-auto">
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        className='w-[100%] my-2 p-3 border-2 rounded-lg bg-gray-100'
                        id='recipe-name-input'
                        placeholder='Enter recipe name...' />

                    <textarea
                        value={recipeIngredients}
                        onChange={(e) => setRecipeIngredients(e.target.value)}
                        className='w-[100%] my-2 p-3 border-2 rounded-lg bg-gray-100 h-28 resize-none'
                        id='recipe-ingredients-input'
                        placeholder='Enter ingredients...' />

                    <textarea
                        value={recipeSteps}
                        onChange={(e) => setRecipeSteps(e.target.value)}
                        className='w-[100%] my-2 p-3 border-2 rounded-lg bg-gray-100 h-[200px] resize-none'
                        id='recipe-cooking-steps-input'
                        placeholder='Enter cooking steps...' />
                </div>
                <button
                    onClick={addSpices}
                    type='submit'
                    id='add-recipe-button'>
                    Add
                </button>
            </form>
        </section>
    )
}
