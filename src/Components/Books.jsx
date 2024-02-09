import React, { useEffect, useState } from 'react';

const BookSection = ({ searchTerm }) => {
  // State
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books on component mount
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' },
        });
        const data = await response.json();
        const booksWithFreePrice = data.books.map((book) => ({ ...book, price: 'Free' }));
        setBooks(booksWithFreePrice);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();

    // Scroll to the bottom of the page when the component mounts
    window.scrollTo(0, document.body.scrollHeight);

  }, []); // Empty dependency array to run once on component mount

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-section">
      <ul className="book-list">
        {/* Map through filtered books and display */}
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <img src={book.imageLinks.thumbnail} alt={book.title} className="book-cover" />
            <p className="book-title">{book.title}</p>
            <p className="book-price">Price: {book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSection;
