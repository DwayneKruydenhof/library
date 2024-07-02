"use client"; // Ensure this is at the top

import React from 'react';
import axios from 'axios';
import { Button, Divider } from 'antd';

export default function Page() {
  const fetchData = (book) => {
    axios.get('https://openlibrary.org/search.json?q=${book}')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <p>Home Page</p>
      <Divider />
      <Button onClick={fetchData}>
        Fetch Data
      </Button>
    </div>
  );
}
