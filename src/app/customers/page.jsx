"use client";
import React, { useState } from "react";

// Mock data
const mockData = [
  {
    id: "1",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "2",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "3",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "4",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "5",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "6",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "7",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "8",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "9",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "10",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "11",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "12",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "13",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "14",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  {
    id: "15",
    name: 'Apple iMac 20"',
    category: "PC",
    brand: "Apple",
    description: "200",
    price: "$1499",
  },
  {
    id: "16",
    name: "Apple iPhone 14",
    category: "Phone",
    brand: "Samsung",
    description: "1237",
    price: "$999",
  },
  // Add more mock data as needed
];

// Filter options
const filterOptions = [
  { name: "Apple" },
  { name: "Samsung" },
  { name: "Dell" },
  // Add more filter options as needed
];

const ITEMS_PER_PAGE = 10;

const Customers = () => {
  const [showFilterDropDown, setShowFilterDropDown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filterName) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.includes(filterName)
        ? prevSelectedFilters.filter((item) => item !== filterName)
        : [...prevSelectedFilters, filterName]
    );
  };

  const handleActionClick = (action, id) => {
    console.log(`${action} action for product ID: ${id}`);
  };

  const handleMassDelete = () => {
    console.log("Mass delete for product IDs:", selectedIds);
    // You can perform the mass delete action here, e.g., API call
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((item) => item !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Filter mockData based on selectedFilters and searchText
  const filteredData = mockData.filter((product) => {
    const matchesFilter =
      selectedFilters.length === 0 || selectedFilters.includes(product.brand);
    const matchesSearch =
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Calculate pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 min-h-screen">
      <div className="mx-auto max-w-screen-xl items-center justify-center mt-12 sm:mt-20">
        <div className="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                className="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
              <button
                onClick={handleMassDelete}
                type="button"
                className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v1a1 1 0 001 1h1v12a2 2 0 002 2h10a2 2 0 002-2V6h1a1 1 0 001-1V4a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H6zM4 6v12a1 1 0 001 1h10a1 1 0 001-1V6H4zM6 4h12v1H6V4zM5 8h2v10H5V8zm4 0h2v10H9V8zm4 0h2v10h-2V8z"
                    clipRule="evenodd"
                  />
                </svg>
                Mass Delete
              </button>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  onClick={() => setShowFilterDropDown(!showFilterDropDown)}
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-4 w-4 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-3.586l-4.707-4.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Filter
                  <svg
                    className={`${
                      showFilterDropDown ? "transform rotate-180" : ""
                    } h-4 w-4 ml-2`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    showFilterDropDown
                      ? "z-50 w-48 p-3 absolute right-20 top-64 sm:right-4 sm:top-40 lg:right-80 lg:top-40 bg-white rounded-lg shadow dark:bg-gray-700"
                      : "hidden"
                  }`}
                >
                  <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Choose Filter
                  </h6>
                  <ul className="space-y-2 text-sm">
                    {filterOptions.map((option) => (
                      <li key={option.name} className="flex items-center">
                        <input
                          id={option.name}
                          type="checkbox"
                          value={option.name}
                          checked={selectedFilters.includes(option.name)}
                          onChange={() => handleFilterChange(option.name)}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor={option.name}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          {option.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    onChange={(e) => {
                      setSelectedIds(
                        e.target.checked ? mockData.map((item) => item.id) : []
                      );
                    }}
                    checked={selectedIds.length === mockData.length}
                  />
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                 </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">  
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {totalItems === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      No records found
                    </td>
                  </tr>
                ) : paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">{item.brand}</td>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleActionClick("Edit", item.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleActionClick("Delete", item.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
</div>
          {/* Pagination Controls */}
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
