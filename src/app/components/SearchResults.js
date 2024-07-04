// src/components/SearchResults.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);

  return (
    <div>
      {searchResults.map((book) => (
        <Row key={book.key} gutter={[16, 16]}>
          <Col span={24}>
            <Link href={`/search-results/book/${book.key.replace('/works/', '')}`} passHref>
              <Card
                className="cardSize"
                hoverable
                cover={
                  <div className="cardCover">
                    <img alt={book.title} src={book.cover_url} />
                  </div>
                }
              >
                <div className="cardContent">
                  <Meta title={<h2>{book.title}</h2>} description={book.author_name} />
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default SearchResults;
