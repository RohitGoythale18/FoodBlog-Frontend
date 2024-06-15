import React, { useState } from 'react'
import './CRUD.css'
import AddSweets from '../../Admin/Modals/AddSweets';
import AddSpices from '../../Admin/Modals/AddSpices';
import AddSoups from '../../Admin/Modals/AddSoups';

export default function CRUD() {
  const [openSweetModal, setOpenSweetModal] = useState(false);
  const [openSpiceModal, setOpenSpiceModal] = useState(false);
  const [openSoupModal, setOpenSoupModal] = useState(false);

  return (
    <>
      <section className="crud-container">
        <button
          className="crud-operations"
          onClick={() => handleOpenModal(true) }
        >
          Add Recipe
        </button>

      </section>
      {openSweetModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setOpenSweetModal(false)}></div>
          <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
            <AddSweets setOpenSweetModal={setOpenSweetModal} />
          </div>
        </div>
      )}
      {openSpiceModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setOpenSpiceModal(false)}></div>
          <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
            <AddSpices setOpenSpiceModal={setOpenSpiceModal} />
          </div>
        </div>
      )}
      {openSoupModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setOpenSoupModal(false)}></div>
          <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
            <AddSoups setOpenSoupModal={setOpenSoupModal} />
          </div>
        </div>
      )}
    </>
  )
}
