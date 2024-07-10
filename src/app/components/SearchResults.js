import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook from React-Redux for accessing Redux store state
import { Card, Col, Row, Modal, Button, Pagination, Skeleton } from 'antd'; // Import necessary components from Ant Design
import Image from 'next/image'; // Import Image component from Next.js for optimized image loading
import noImage from '../../assets/no_image.png'; // Import placeholder image for books without covers

const { Meta } = Card; // Destructure Meta component from Card

// SearchResults component definition
const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results); // Retrieve search results from Redux store
  const loading = useSelector((state) => state.search.loading); // Retrieve loading state from Redux store
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [selectedBook, setSelectedBook] = useState(null); // State for currently selected book
  const [currentPage, setCurrentPage] = useState(1); // State for current page of pagination
  const itemsPerPage = 20; // Number of items per page

  // Function to show modal and set selected book
  const showModal = (book) => {
    setSelectedBook(book);
    setIsModalVisible(true);
  };

  // Function to close modal
  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedBook(null);
  };

  // Function to handle page change in pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem); // Slice search results based on pagination

  // Placeholder image component for books without cover image
  const emptyImage = <Image alt='No image' src={noImage}/>;

  return (
    <div className='results-container'>
      <h1>Search Results</h1>
      {/* Display skeleton cards when loading */}
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
        <div style={{ textAlign: 'center', marginTop: '16px' }}>No results found</div> // Display message when no results found
      ) : (
        <>
          {/* Display search results in cards */}
          <Row gutter={[16, 16]}>
            {currentItems.map((book) => (
              <Col offset={0} span={[24]} key={book.key}>
                <Card
                  bordered={false}
                  hoverable
                  cover={<div className='cardCover'><img alt={book.title} src={book.cover_url ? book.cover_url : emptyImage} /></div>}
                  onClick={() => showModal(book)}
                  className="cardSize"
                >
                  <Meta title={<h3>{book.title}</h3>} description={book.author_name} />
                </Card>
              </Col>
            ))}
          </Row>
          {/* Pagination component */}
          <Pagination
            current={currentPage}
            total={searchResults.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
            style={{ textAlign: 'center', marginTop: '16px' }}
            align='center'
          />
          {/* Modal to display detailed book information */}
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
              {/* Book details displayed in modal */}
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

export default SearchResults; // Export SearchResults component
