import React, { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';

const DomBasedXss = () => {
  const divRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerHTML = searchValue;
    }
  }, [searchValue]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchValue(event.target.elements.search.value);
    // setSearchValue(DOMPurify.sanitize(event.target.elements.search.value));
  };

  return (
    <div className='container'>
      <h1>DOM Based XSS Example</h1>
      <h2>Search Results</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <div ref={divRef}></div>
    </div>
  );
};

export default DomBasedXss;
