import React, { useState, useEffect } from 'react';
import { Card } from '@tremor/react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import ViewSpices from '../ViewModals/ViewSpices';

export default function Spices() {
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [liked, setLiked] = useState({});
  const [selectedSpiceId, setSelectedSpiceId] = useState(null);
  const [openSpiceModal, setOpenSpiceModal] = useState(false);

  const fetchData = async () => {
    axios.get('https://foodblog-backend.onrender.com/get-spices')
      .then(res => {
        const result = res.data
        setData(result.spices)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSpices = Data.filter(spices =>
    spices.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLike = async (id, index) => {
    const newLikedStatus = !liked[index];
    setLiked(prev => ({
      ...prev,
      [index]: newLikedStatus
    }));
    try {
      await axios.post('https://foodblog-backend.onrender.com/update-like', { id, liked: newLikedStatus });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenSpiceModal = (id) => {
    setSelectedSpiceId(id);
    setOpenSpiceModal(true);
  };

  return (
    <>
      <section className="p-5">
        <h2 className="text-center font-semibold m-2">Spices</h2>
        <div className="searchbar w-[100%]">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            className='flex p-2 w-[30%] rounded-lg'
            placeholder="Search for favourite spices..." />
        </div>
        <div className="sweet-container grid grid-cols-4 gap-x-4 gap-y-10 my-10">
          {filteredSpices.map((spices, index) => (
            <Card
              key={index}
              className="mx-auto max-w-xs w-56 border-2 rounded-lg p-2 bg-gray-200"
              decoration="top"
              decorationColor="indigo"
              onClick={() => handleOpenSpiceModal(spices._id)}
            >
              <div className="flex justify-end">
                <FaHeart
                  className={`text-xl font-semibold cursor-pointer ${liked[index] ? 'text-red-500' : 'text-tremor-default text-tremor-content dark:text-dark-tremor-content'}`}
                  onClick={() => handleLike(spices._id, index)}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center text-xl font-semibold text-tremor-default text-tremor-content dark:text-dark-tremor-content h-[120px] w-[120px] mx-auto border-2 border-black rounded-full"></p>
              </div>
              <p className="text-center text-xl font-semibold text-tremor-default text-tremor-content dark:text-dark-tremor-content my-2">{spices.recipeName}</p>
            </Card>
          ))}
        </div>
        {openSpiceModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setOpenSpiceModal(false)}></div>
            <div className="relative bg-white shadow-lg z-50 w-[100%] max-w-4xl h-[80vh]">
              <ViewSpices setOpenSpiceModal={setOpenSpiceModal} spiceId={selectedSpiceId} />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
