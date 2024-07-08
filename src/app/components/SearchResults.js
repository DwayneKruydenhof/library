// src/components/SearchResults.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row, Modal, Button, Pagination } from 'antd';

const { Meta } = Card;

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);
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
      <Row >
        {currentItems.map((book) => (
          <Col span={24} key={book.key}>
            <Card
              bordered={false}
              hoverable
              cover={<div className='cardCover'><img alt={book.title} src={book.cover_url} /></div>}
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
      />
      {selectedBook && (
        <Modal
          title={selectedBook.title}
          open={isModalVisible}
          closable={false}
          footer={null}
        >
          <Button onClick={handleClose}>Close Window</Button>
          
          <Row>
            <Col>
            <img
            alt={selectedBook.title}
            src={selectedBook.cover_url}
            style={{ width: '100%'}}
          />
            </Col>
            <Col>
          <p><strong>Author:</strong> {selectedBook.author_name}</p>
          <p><strong>Description:</strong> {selectedBook.description?.value || 'No description available'}</p>
          </Col>
          </Row>
        </Modal>
      )}
    </div>
  );
};

export default SearchResults;
