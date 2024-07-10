"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Col, Row, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/Magic Library alt.svg'; // Importing the logo image
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter(); // Next.js router hook for navigation
  const [drawerVisible, setDrawerVisible] = useState(false); // State to manage drawer visibility

  // Function to show the drawer menu
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Function to close the drawer menu
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Menu items configuration with links and button types based on current route
  const menuItems = [
    {
      key: 'home',
      label: (
        <Link href="/pages/home" passHref>
          <Button type={router.pathname === '/pages/home' ? 'primary' : 'text'}>Home</Button>
        </Link>
      ),
    },
    {
      key: 'about',
      label: (
        <Link href="/pages/about" passHref>
          <Button type={router.pathname === '/pages/about' ? 'primary' : 'text'}>About</Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      {/* Navbar layout using Ant Design components */}
      <Row className="dropdownNavbar">
        {/* Logo with click event to navigate home */}
        <Image
          src={logo}
          alt='Logo'
          className='navbar-logo'
          onClick={() => {
            router.push('/pages/home');
          }}
        />
        {/* Menu button for small screens */}
        <Col xs={6} sm={4} className="navbarPosition">
          <Button
            className="menuButton"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            type="text"
          />
        </Col>
      </Row>
      {/* Drawer component for responsive menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        {/* Menu items rendered dynamically */}
        <Menu mode="inline" items={menuItems} />
      </Drawer>
    </div>
  );
};

export default NavBar;
