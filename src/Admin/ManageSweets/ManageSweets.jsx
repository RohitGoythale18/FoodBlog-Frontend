import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import UpdateRecipe from '../Modals/UpdateRecipe';
import { Accordion, AccordionBody, AccordionHeader, AccordionList } from '@tremor/react';
import AddSweets from '../Modals/AddSweets';

export default function ManageSweets() {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/get-sweets');
      setData(res.data.sweets);
    } catch (err) {
      console.error(err);
    }
  };

  const openModal = () => {
    setAddModal(true);
  };

  const deleteSweet = async (sweetId) => {
    try {
      console.log(`Deleting sweet with id: ${sweetId}`);
      await axios.delete(`http://localhost:3000/delete-sweets/${sweetId}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (sweetId) => {
    const confirmed = window.confirm("Are you sure you want to delete this sweet?");
    if (confirmed) {
      deleteSweet(sweetId);
    }
  };

  const handleUpdateModal = (recipe) => {
    setCurrentRecipe(recipe);
    setUpdateModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="text-center m-5">
        <h2>Sweets Recipes</h2>
        <button
          className='flex items-center justify-center  font-semibold w-[160px] p-2 pt-1 space-x-2'
          onClick={openModal}>
          <FaPlusCircle className='mt-1' />
          <span className='pt-1 font-semibold text-lg'>Add Sweet</span>
        </button>
        <AccordionList>
          {data && data.length > 0 ? (
            data.map((sweet, index) => (
              <Accordion key={index}>
                <AccordionHeader className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong w-[70%]">
                  <div className='flex justify-between items-center w-[55vw]'>
                    <div>
                      {index + 1}
                    </div>
                    <div>
                      {sweet.recipeName}
                    </div>
                    <div className='flex space-x-4'>
                      <FaPen onClick={() => handleUpdateModal(sweet)} />
                      <MdDelete onClick={() => handleDelete(sweet._id)} />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  {sweet.recipeIngredients}
                </AccordionBody>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  {sweet.recipeSteps}
                </AccordionBody>
              </Accordion>
            ))
          ) : (
            <div className='p-5'>No recipes available</div>
          )}
        </AccordionList>

        {addModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setAddModal(false)}></div>
            <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
              <AddSweets setAddModal={setAddModal} fetchData={fetchData} />
            </div>
          </div>
        )}

        {updateModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setUpdateModal(false)}></div>
            <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
              <UpdateRecipe setUpdateModal={setUpdateModal} currentRecipe={currentRecipe} fetchData={fetchData} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
