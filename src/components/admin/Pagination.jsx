import React from 'react';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, prevPage, nextPage, paginate }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={prevPage} className="page-link">
            <MdSkipPrevious />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button onClick={nextPage} className="page-link">
            <MdSkipNext />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
