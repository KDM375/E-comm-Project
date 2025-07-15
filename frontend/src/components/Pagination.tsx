import React from 'react';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ 
  productsPerPage, 
  totalProducts, 
  paginate, 
  currentPage 
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {currentPage > 1 && (
          <li>
            <button onClick={() => paginate(currentPage - 1)}>«</button>
          </li>
        )}

        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage < pageNumbers.length && (
          <li>
            <button onClick={() => paginate(currentPage + 1)}>»</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;