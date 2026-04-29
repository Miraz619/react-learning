import React from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div className="mt-12 md:mt-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Books</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
