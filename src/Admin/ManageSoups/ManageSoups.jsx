import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import UpdateRecipe from '../Modals/UpdateRecipe';
import { Accordion, AccordionBody, AccordionHeader, AccordionList } from '@tremor/react';
import AddSoups from '../Modals/AddSoups';

export default function ManageSoups() {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const fetchData = async () => {
    axios.get('http://localhost:3000/get-soups')
      .then(res => {
        const result = res.data
        setData(result.soups)
      })
      .catch(err => {
        console.error(err)
      })
  };

  const openModal = () => {
    setAddModal(true);
  };

  const deleteSoup = async (soupId) => {
    try {
      console.log(`Deleting soup with id: ${soupId}`);
      await axios.delete(`http://localhost:3000/delete-soups/${soupId}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (soupId) => {
    const confirmed = window.confirm("Are you sure you want to delete this soup?");
    if (confirmed) {
      deleteSoup(soupId);
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
      <section className="h-[100vh] text-center m-5">
        <h2 className=''>Soups Recipes</h2>
        <button
          className='flex items-center justify-center  font-semibold w-[160px] p-2 pt-1 space-x-2'
          onClick={openModal}>
          <FaPlusCircle className='mt-1' />
          <span className='pt-1 font-semibold text-lg'>Add Soup</span>
        </button>
        <AccordionList>
          {data && data.length > 0 ? (
            data.map((soup, index) => (
              <Accordion key={index}>
                <AccordionHeader className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong w-[70%]">
                  <div className='flex justify-between items-center w-[54vw]'>
                    <div>
                      {index + 1}
                    </div>
                    <div>
                      {soup.recipeName}
                    </div>
                    <div className='flex space-x-4'>
                      <FaPen onClick={() => handleUpdateModal(soup)} />
                      <MdDelete onClick={() => handleDelete(soup._id)} />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  {soup.recipeIngredients}
                </AccordionBody>
                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                  {soup.recipeSteps}
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
              <AddSoups setAddModal={setAddModal} fetchData={fetchData} />
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
