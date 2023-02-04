import React, { useEffect, useState } from "react";
import axios from "axios";


export default function BorrowedBook() {
    const [data, setData] = useState(null);
 
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
          const responseData = await makeGetRequest("");
          setData(responseData);
        }
        fetchData();
      }, []);

  return (
    <div>BorrowedBook</div>
  )
}
