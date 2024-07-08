// src/components/NavBar.js
"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Divider, Col, Row, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setQuery, setResults } from '../../features/searchSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const router = useRouter();

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const fetchData = async (book) => {
    try {
      console.log('Fetching data for:', book);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${book}`);
      console.log('Response:', response); // Check the entire response object
      const results = response.data.docs.map((doc) => ({
        key: doc.key,
        title: doc.title,
        author_name: doc.author_name?.join(', '),
        cover_url: `http://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
      }));
      console.log('Fetched Results:', results); // Check the parsed results
      dispatch(setResults(results));
      router.push('/pages/search-results');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  const handleSearch = (value) => {
    dispatch(setQuery(value));
    fetchData(value);
  };

  return (
    <Row className="navbar">
      <Divider type="vertical" />
      <Col span={8} className="searchBarLength">
        <Input.Search
          placeholder="Search for books"
          enterButton="Search"
          size="medium"
          value={query}
          onSearch={handleSearch}
          onChange={handleInputChange}
          style={{ width: 500 }}
        />
      </Col>
      <Col span={8} offset={14}>
        <nav className="navbarPosition">
          <Link href="/pages/home" passHref>
            <Button type={router.pathname === '/pages/home' ? 'primary' : 'text'}>Home</Button>
          </Link>
          <Divider type="vertical" />
          <Link href="/pages/about" passHref>
            <Button type={router.pathname === '/pages/about' ? 'primary' : 'text'}>About</Button>
          </Link>
        </nav>
      </Col>
    </Row>
  );
};

export default NavBar;
