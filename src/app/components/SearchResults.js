// src/components/SearchResults.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row, Modal, Button, Pagination, Skeleton } from 'antd';
import noImage from '../../assets/no_image.png'

const { Meta } = Card;

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const showModal = (book) => {
    setSelectedBook(book);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedBook(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {loading ? (
        <Row gutter={[16, 16]}>
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <Col span={24} key={index}>
              <Card className="cardSize">
                <Skeleton loading={true} active />
              </Card>
            </Col>
          ))}
        </Row>
      ) : searchResults.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '16px' }}>No results found</div> //Returns "No results found" in case no results get returned
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {currentItems.map((book) => (
              <Col span={24} key={book.key}>
                <Card
                  bordered={false}
                  hoverable
                  cover={<div className='cardCover'><img alt={book.title} src={book.cover_url ? book.cover_url : noImage} /></div>}
                  onClick={() => showModal(book)}
                  className="cardSize"
                >
                  <Meta title={<h3>{book.title}</h3>} description={book.author_name} />
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination
            current={currentPage}
            total={searchResults.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
            style={{ textAlign: 'center', marginTop: '16px' }}
            align='center'
          />
          {selectedBook && (
            <Modal
              closable={false}
              title={selectedBook.title}
              open={isModalVisible}
              onCancel={handleClose}
              footer={[
                <Button key="close" onClick={handleClose}>
                  Close Window
                </Button>,
              ]}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={10}>
                  <img
                    alt={selectedBook.title}
                    src={selectedBook.cover_url}
                    style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
                  />
                </Col>
                <Col xs={24} sm={24} md={14}>
                  <p><strong>Author:</strong> {selectedBook.author_name}</p>
                  <p><strong>Description:</strong> {selectedBook.description?.value || 'No description available'}</p>
                  <p><strong>Published Date:</strong> {selectedBook.first_publish_year || 'No date available'}</p>
                </Col>
              </Row>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
