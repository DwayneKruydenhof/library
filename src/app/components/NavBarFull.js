// src/components/NavBar.js
"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Divider, Col, Row } from 'antd';
import SearchBar from './SearchBar';

const NavBarFull = () => {
  const router = useRouter();

  return (
    <Row className="navbar">
      <Col span={8} offset={14} xs={24} sm={24} md={12} lg={14} className="navCol"
      style={{ position: 'sticky'}}>
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

export default NavBarFull;
