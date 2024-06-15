import React, { useEffect, useState } from 'react';
import { Card } from '@tremor/react';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import ViewSweets from '../ViewModals/ViewSweets';

export default function Sweets() {
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [liked, setLiked] = useState({});
  const [selectedSweetId, setSelectedSweetId] = useState(null);
  const [openSweetModal, setOpenSweetModal] = useState(false);
  
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/get-sweets');
      const result = res.data;
      setData(result.sweets);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredSweets = Data.filter(sweets =>
    sweets.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleLike = async (id, index) => {
    const newLikedStatus = !liked[index];
    setLiked(prev => ({
      ...prev,
      [index]: newLikedStatus
    }));
    try {
      await axios.post('http://localhost:3000/update-like', { id, liked: newLikedStatus });
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleOpenSweetModal = (id) => {
    setSelectedSweetId(id);
    setOpenSweetModal(true);
  };

  return (
    <>
      <section className="p-5">
        <h2 className="text-center font-semibold m-2">Sweets</h2>
        <div className="searchbar w-[100%]">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            className='flex p-2 w-[30%] rounded-lg'
            placeholder="Search for favourite sweets..."
          />
        </div>
        <div className="sweet-container grid grid-cols-4 gap-x-2 gap-y-10 my-10">
          {filteredSweets.map((sweets, index) => (
            <Card
              key={index}
              className="mx-auto max-w-xs w-56 border-2 rounded-lg p-2 bg-gray-200"
              decoration="top"
              decorationColor="indigo"
              onClick={() => handleOpenSweetModal(sweets._id)}
            >
              <div className="flex justify-end">
                <FaHeart
                  className={`text-xl font-semibold cursor-pointer ${liked[index] ? 'text-red-500' : 'text-tremor-default text-tremor-content dark:text-dark-tremor-content'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(sweets._id, index);
                  }}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center text-xl font-semibold text-tremor-default text-tremor-content dark:text-dark-tremor-content h-[120px] w-[120px] mx-auto border-2 border-black rounded-full"></p>
              </div>
              <p className="text-center text-xl font-semibold text-tremor-default text-tremor-content dark:text-dark-tremor-content">{sweets.recipeName}</p>
            </Card>
          ))}
        </div>
        {openSweetModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setOpenSweetModal(false)}></div>
            <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
              <ViewSweets setOpenSweetModal={setOpenSweetModal} sweetId={selectedSweetId} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
