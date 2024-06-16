import React, { useState } from 'react';
import axios from 'axios';
import { IoClose } from 'react-icons/io5';

export default function AddSoups({ setAddModal }) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeSteps, setRecipeSteps] = useState('');

    const addSoups = (e) => {
        e.preventDefault();
        const newSoups = { recipeName, recipeIngredients, recipeSteps };

        axios.post('https://foodblog-backend.onrender.com/add-soups', newSoups, {
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
                className='cursor-pointer text-2xl hover:text-red-700 transition duration-300 ease-in-out absolute top-0 right-2'
                onClick={() => setAddModal(false)} />
            <h2 className='text-center m-3'>Add a Soup</h2>
            <form onSubmit={addSoups}>
                <div className="flex flex-col text-center w-[70%] mx-auto">
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        className='w-[100%] my-1 p-3 border-2 rounded-lg bg-gray-100'
                        id='recipe-name-input'
                        placeholder='Enter recipe name...' />

                    <textarea
                        value={recipeIngredients}
                        onChange={(e) => setRecipeIngredients(e.target.value)}
                        className='w-[100%] my-1 p-3 border-2 rounded-lg bg-gray-100 h-28 resize-none'
                        id='recipe-ingredients-input'
                        placeholder='Enter ingredients...' />

                    <textarea
                        value={recipeSteps}
                        onChange={(e) => setRecipeSteps(e.target.value)}
                        className='w-[100%] my-1 p-3 border-2 rounded-lg bg-gray-100 h-[200px] resize-none'
                        id='recipe-cooking-steps-input'
                        placeholder='Enter cooking steps...' />
                </div>
                <button
                    type='submit'
                    className='w-[150px] my-1 p-2 font-semibold bg-blue-500 text-white rounded-lg'
                >
                    Add
                </button>
            </form>
        </section>
    )
}
