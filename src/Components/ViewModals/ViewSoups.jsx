import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoClose } from "react-icons/io5";

export default function ViewSoups({ setOpenSoupModal, soupId }) {
    const [soups, setSoups] = useState({
        recipeName: '',
        recipeIngredients: '',
        recipeSteps: '',
        recipeImage: '',
    });

    const fetchSoupData = async () => {
        try {
            const res = await axios.get(`https://foodblog-backend.onrender.com/get-soups/${soupId}`);
            console.log(res.data)
            const result = res.data;
            setSoups({
                recipeName: result.recipeName,
                recipeIngredients: result.recipeIngredients,
                recipeSteps: result.recipeSteps,
                recipeImage: result.recipeImage,
            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (soupId) {
            console.log("Fetching data for sweet ID:", soupId);
            fetchSoupData();
        }
    }, [soupId]);

    return (
        <>
            <div className='text-center border-2 bg-gray-200 p-4 relative h-[100%]'>
                <IoClose
                    className='cursor-pointer text-2xl hover:text-red-700 transition duration-300 ease-in-out absolute top-2 right-2'
                    onClick={() => setOpenSoupModal(false)} />
                <h1 className='text-2xl font-semibold mb-2'>{soups.recipeName}</h1>
                <div className='flex justify-evenly m-2'>
                    <div className='border-2 w-[65%] mx-2 p-2'>
                        <div className='flex items-start justify-between my-2'>
                            <label className='font-semibold'>Ingredients:</label>
                            <textarea
                                className='text-justify p-2 bg-gray-100 rounded-lg w-[80%] h-28 resize-none'
                                readOnly
                                value={soups.recipeIngredients} />
                        </div>
                        <div className='flex items-start justify-between my-2'>
                            <label className='font-semibold'>Instructions:</label>
                            <textarea
                                className='text-justify p-2 bg-gray-100 rounded-lg w-[80%] h-[300px] resize-none'
                                readOnly
                                value={soups.recipeSteps} />
                        </div>
                    </div>
                    <div className='border-2 w-[35%] mx-2 p-2 flex items-center justify-center'>
                        <img
                            className='border-2 border-black w-[100%] h-[80%] max-h-64 rounded-full'
                            src={soups.recipeImage}
                            alt="sweet image" />
                    </div>
                </div>
            </div>
        </>
    )
}
