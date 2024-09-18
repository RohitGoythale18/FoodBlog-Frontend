import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoClose } from 'react-icons/io5';

export default function UpdateRecipe({ id, setUpdateModal, fetchData }) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeSteps, setRecipeSteps] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            console.log('Recipe ID is not defined');
            setLoading(false);
            return;
        }

        axios.get(`https://foodblog-backend.onrender.com/get-sweets/${id}`)
            .then(response => {
                const { recipeName, recipeIngredients, recipeSteps, recipeImage } = response.data;
                setRecipeName(recipeName);
                setRecipeIngredients(recipeIngredients);
                setRecipeSteps(recipeSteps);
                setRecipeImage(recipeImage);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipe data:', error.response?.data || error.message || error);
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('recipeName', recipeName);
        formData.append('recipeIngredients', recipeIngredients);
        formData.append('recipeSteps', recipeSteps);
        if (recipeImage) {
            formData.append('recipeImage', recipeImage);
        }

        axios.put(`https://foodblog-backend.onrender.com/update-recipe/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                alert('Recipe updated successfully!');
                fetchData(); // Refresh the data in parent component
                setUpdateModal(false); // Close the modal
            })
            .catch(error => console.error('Error updating recipe:', error.response?.data || error.message || error));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className='relative'>
            <IoClose
                className='cursor-pointer text-2xl hover:text-red-700 transition duration-300 ease-in-out absolute top-2 right-2'
                onClick={() => setUpdateModal(false)}
            />
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
                        className='w-[80%] bg-gray-100 rounded-lg p-3 h-28 resize-none'
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
                <div className="flex w-[100%] justify-between my-3">
                    <label className='flex items-center'>
                        Upload recipe image
                        <input
                            type="file"
                            onChange={(e) => setRecipeImage(e.target.files[0])}
                            className='w-[50%] my-1 p-3 border-2 rounded-lg bg-gray-100'
                        />
                    </label>
                </div>
                <button className='w-32' type='submit'>Update</button>
            </form>
        </section>
    );
}
