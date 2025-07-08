// src/pages/CommentsDashboard.js
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchComments } from '../services/api';
import {
  getPersistedState,
  setPersistedState,
} from '../utils/localStorageUtils';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import './CommentsDashboard.css'; // Create this CSS file

const CommentsDashboard = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for persistence
  const [searchTerm, setSearchTerm] = useState(
    getPersistedState('searchTerm', '')
  );
  const [sortConfig, setSortConfig] = useState(
    getPersistedState('sortConfig', { column: null, order: null })
  ); // { column: 'postId', order: 'asc' }
  const [currentPage, setCurrentPage] = useState(
    getPersistedState('currentPage', 1)
  );
  const [pageSize, setPageSize] = useState(
    getPersistedState('pageSize', 10)
  );

  const navigate = useNavigate();

  useEffect(() => {
    const getCommentsData = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (err) {
        setError('Failed to load comments data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getCommentsData();
  }, []);

  // Persist state on change
  useEffect(() => {
    setPersistedState('searchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setPersistedState('sortConfig', sortConfig);
  }, [sortConfig]);

  useEffect(() => {
    setPersistedState('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    setPersistedState('pageSize', pageSize);
  }, [pageSize]);

  const filteredComments = useMemo(() => {
    let filtered = comments;

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (comment) =>
          comment.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          comment.email.toLowerCase().includes(lowerCaseSearchTerm) ||
          comment.body.toLowerCase().includes(lowerCaseSearchTerm) // Assuming 'phone' refers to 'body' for comments, or if a user data is joined. Based on image, 'comment' column
      );
    }
    return filtered;
  }, [comments, searchTerm]);

  const sortedAndFilteredComments = useMemo(() => {
    let sortableItems = [...filteredComments];
    if (sortConfig.column !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.column];
        let bValue = b[sortConfig.column];

        // Handle case-insensitive sorting for strings
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }

        if (aValue < bValue) {
          return sortConfig.order === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.order === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredComments, sortConfig]);

  const paginatedComments = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedAndFilteredComments.slice(startIndex, endIndex);
  }, [sortedAndFilteredComments, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedAndFilteredComments.length / pageSize);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  }, []);

  const handleSort = useCallback((columnName) => {
    setSortConfig((prevSortConfig) => {
      if (prevSortConfig.column === columnName) {
        // Cycle: asc -> desc -> no sort
        if (prevSortConfig.order === 'asc') {
          return { column: columnName, order: 'desc' };
        } else if (prevSortConfig.order === 'desc') {
          return { column: null, order: null }; // No sort
        } else {
          return { column: columnName, order: 'asc' };
        }
      } else {
        // New column clicked, sort ascending
        return { column: columnName, order: 'asc' };
      }
    });
    setCurrentPage(1); // Reset to first page on new sort
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handlePageSizeChange = useCallback((size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page on page size change
  }, []);

  if (loading) return <div>Loading comments...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <Header username="Ervin Howell" /> {/* You can pass actual user name if stored */}
      <div className="dashboard-content">
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        <Table
          data={paginatedComments}
          onSort={handleSort}
          sortConfig={sortConfig}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          totalItems={sortedAndFilteredComments.length}
        />
        <button onClick={() => navigate('/')}>View Profile</button>
      </div>
    </div>
  );
};

export default CommentsDashboard;