import React, { useEffect, useState } from 'react';
import './Tables.css';

const Tables = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        // Dummy API call
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderTable = () => (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderCards = () => (
        <div className="cards">
            {currentItems.map(item => (
                <div className="card" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>ID: {item.id}</p>
                </div>
            ))}
        </div>
    );

    const renderPagination = () => (
        <div className="pagination">
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={currentPage === i + 1 ? 'active' : ''}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );

    return (
        <div className="tables-container">
            <h2>Tables</h2>
            <div className="responsive-table">
                {window.innerWidth > 768 ? renderTable() : renderCards()}
            </div>
            {renderPagination()}
        </div>
    );
};

export default Tables;
