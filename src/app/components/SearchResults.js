// src/components/SearchResults.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.results);

  return (
    <Row gutter={16}>
      {searchResults.map((book) => (
        <Col span={8} key={book.key}>
          <Link href={`/book/${encodeURIComponent(book.key)}`} passHref>
            <Card
              hoverable
              cover={<img alt={book.title} src={book.cover_url} />}
            >
              <Meta title={book.title} description={book.author_name} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default SearchResults;
