"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Divider, Col, Row, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import SearchBar from './SearchBar';

const NavBar = () => {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

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
      <Row className="dropdownNavbar">
        <Col xs={6} sm={4} className="navbarPosition">
          <Button
            className="menuButton"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            type="text"
          />
        </Col>
      </Row>
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Menu mode="inline" items={menuItems} />
      </Drawer>
    </div>
  );
};

export default NavBar;
