import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import UpdateRecipe from '../Modals/UpdateRecipe';
import { Accordion, AccordionBody, AccordionHeader, AccordionList } from '@tremor/react';
import AddSpices from '../Modals/AddSpices';

export default function ManageSpices() {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const fetchData = async () => {
    axios.get('https://foodblog-backend.onrender.com/get-spices')
      .then(res => {
        const result = res.data
        setData(result.spices)
      })
      .catch(err => {
        console.error(err)
      })
  };

  const openModal = () => {
    setAddModal(true);
  }

  const deleteSpice = async (spiceId) => {
    try {
      console.log(`Deleting spice with id: ${spiceId}`);
      await axios.delete(`https://foodblog-backend.onrender.com/delete-spices/${spiceId}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (spiceId) => {
    const confirmed = window.confirm("Are you sure you want to delete this spice?");
    if (confirmed) {
      deleteSpice(spiceId);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateModal = (recipe) => {
    setCurrentRecipe(recipe);
    setUpdateModal(true);
  };



  return (
    <>
      <section className="text-center m-5">
        <h2 className=''>Spices Recipes</h2>
        <button
          className='flex items-center justify-center  font-semibold w-[160px] p-2 pt-1 space-x-2'
          onClick={openModal}>
          <FaPlusCircle className='mt-1' />
          <span className='pt-1 font-semibold text-lg'>Add Spice</span>
        </button>
        <AccordionList>
          {data && data.length > 0 ? (
            data.map((spice, index) => (
              <Accordion key={index}>
                <AccordionHeader className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong w-auto">
                  <div className='flex justify-between items-center w-full'>
                    <div>
                      {index + 1}
                    </div>
                    <div>
                      {spice.recipeName}
                    </div>
                    <div className='flex space-x-4'>
                      <FaPen onClick={() => handleUpdateModal(spice)} />
                      <MdDelete onClick={() => handleDelete(spice._id)} />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  {spice.recipeIngredients}
                </AccordionBody>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  {spice.recipeSteps}
                </AccordionBody>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  <img
                    src={spice.recipeImage}
                    alt={spice.recipeName}
                    className="text-xl font-semibold text-tremor-default text-tremor-content dark:text-dark-tremor-content h-[120px] w-[120px] border-2 border-black rounded-full" />
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
              <AddSpices setAddModal={setAddModal} fetchData={fetchData} />
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
  )
}
