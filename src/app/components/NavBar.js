"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Divider, Col, Row, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


const NavBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const router = useRouter();

  const handleSearch = (value) => {
    dispatch(setQuery(value));
    router.push('/search-results'); // assuming you have a search results page
  };

  return (
    <Row className="navbar">
      <Divider type="vertical" />
      <Col span={8} offset={2}></Col>
      <Input.Search
          placeholder="Search for books"
          enterButton="Search"
          size="medium"
          value={query}
          onSearch={handleSearch}
        />
      <Col span={8} offset={14}>
      <div>
        <nav className="navbarPosition">
          <Link href="/pages/home" passHref>
            <Button type={router.pathname === '/pages/home' ? 'primary' : 'text'}>Home</Button>
          </Link>
          <Divider type="vertical" />
          <Link href="/pages/about" passHref>
            <Button type={router.pathname === '/pages/about' ? 'primary' : 'text'}>About</Button>
          </Link>

        </nav>
      </div>
      </Col>
      
    </Row>

  );
};

export default NavBar;
