'use client';
import { useState } from 'react';

export const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');

  console.log("searchbar term: ", term); //this will log the current search term to the console

  return (
    <div className='search-bar'>
      <input 
        value={term} 
        onChange={(e) => {
          setTerm(e.target.value); 
          onSearchTermChange(e.target.value);
        }}
      />
    </div>
  );
};