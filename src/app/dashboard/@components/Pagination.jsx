import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination({ totalResults, resultsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ChevronLeftIcon className="h-5 w-5" />
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">{(currentPage - 1) * resultsPerPage + 1}</span> to{' '}
            <span className="font-medium">
              {Math.min(currentPage * resultsPerPage, totalResults)}
            </span> of{' '}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1} 
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
              }`}
            >
              {index + 1}
            </button>
            
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
