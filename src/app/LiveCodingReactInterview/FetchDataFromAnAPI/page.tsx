'use client'
import React, { useState, useEffect } from 'react';

const FetchDataFromAnAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data)

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchDataFromAnAPI;