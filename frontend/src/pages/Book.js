import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

function Book() {
  const [data, setData] = useState(null);
  const [number, setNumber] = useState(1);

  async function makeGetRequest(url) {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const responseData = await makeGetRequest('http://localhost:3000/books/');
      setData(responseData);
    }

    fetchData();
  }, []);

  return (
    <div className='book-content'>
      {data === null ? (
        <p>Loading...</p>
      ) : (
        data.map((data, number) => {
          number++;
          return (<BookCard number={number} title={data.title} author={data.author} description={data.description}/>);
        }
          
        )
      )}
    </div>
  );
}

export default Book;

