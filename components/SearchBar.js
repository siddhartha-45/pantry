// components/SearchBar.js
import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ query, setQuery }) => {
  return (
    <TextField
      label="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
