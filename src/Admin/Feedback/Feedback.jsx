import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { Accordion, AccordionBody, AccordionHeader, AccordionList } from '@tremor/react';

export default function Feedback() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        axios.get('https://foodblog-backend.onrender.com/get-feedback')
            .then(res => {
                const result = res.data
                console.log(result)
                setData(result.feedback)
            })
            .catch(err => {
                console.error(err)
            })
    };

    const deleteFeedback = async (feedbackId) => {
        try {
          console.log(`Deleting feedback with id: ${feedbackId}`);
          await axios.delete(`https://foodblog-backend.onrender.com/delete-feedback/${feedbackId}`);
          fetchData();
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleDelete = (feedbackId) => {
        const confirmed = window.confirm(`Are you sure you want to delete feedback?`);
        if (confirmed) {
          deleteFeedback(feedbackId);
        }
      };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <section className="text-center mx-5">
                <h2 className='my-5'>Client Feedback</h2>
                <AccordionList>
                    {data && data.length > 0 ? (
                        data.map((feedback, index) => (
                            <Accordion key={index}>
                                <AccordionHeader className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong w-[70%]">
                                    <div className='flex justify-between items-center w-[55vw]'>
                                        <div>
                                            {index + 1}
                                        </div>
                                        <div>
                                            {feedback.clientName}
                                        </div>
                                        <div className='flex space-x-1'>
                                            <MdDelete onClick={() => handleDelete(feedback._id)} />
                                        </div>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                                    {feedback.clientEmail}
                                </AccordionBody>
                                <AccordionBody className="leading-6 border-2 mx-auto mb-2 bg-gray-200 rounded-lg text-justify w-[70%]">
                                    {feedback.clientMessage}
                                </AccordionBody>
                            </Accordion>
                        ))
                    ) : (
                        <div className='p-5'>No recipes available</div>
                    )}
                </AccordionList>
            </section>
        </>
    )
}
