// src/pages/search-results/book/[id].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Card } from 'antd';

const { Meta } = Card;

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get(`https://openlibrary.org/works/${id}.json`)
        .then((response) => {
          setBook(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching book data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Card
      style={{ width: '100%', margin: '20px auto' }}
      cover={<img alt={book.title} src={`http://covers.openlibrary.org/b/id/${book.covers ? book.covers[0] : 'default'}-L.jpg`} />}
    >
      <Meta title={book.title} description={`Author: ${book.authors?.map(author => author.name).join(', ')}`} />
      <p>First Publish Year: {book.first_publish_year}</p>
      <p>Description: {book.description ? book.description.value : 'No description available'}</p>
    </Card>
  );
};

export default BookDetail;
