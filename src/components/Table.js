// src/components/Table.js
import React from 'react';
import './Table.css'; // Create this CSS file

const Table = ({ data, onSort, sortConfig }) => {
  const getSortArrow = (columnName) => {
    if (sortConfig.column === columnName) {
      if (sortConfig.order === 'asc') return ' ▲';
      if (sortConfig.order === 'desc') return ' ▼';
    }
    return '';
  };

  const getColumnHeaderClass = (columnName) => {
    return sortConfig.column === columnName ? 'active-sort' : '';
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => onSort('postId')}
              className={getColumnHeaderClass('postId')}
            >
              Post ID{getSortArrow('postId')}
            </th>
            <th
              onClick={() => onSort('name')}
              className={getColumnHeaderClass('name')}
            >
              Name{getSortArrow('name')}
            </th>
            <th
              onClick={() => onSort('email')}
              className={getColumnHeaderClass('email')}
            >
              Email{getSortArrow('email')}
            </th>
            <th>Comment</th> {/* Comment column is not sortable as per requirements */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.postId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;