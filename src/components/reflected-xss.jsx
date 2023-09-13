import React from 'react';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

const ReflectedXss = () => {
//  const searchTerm = new URLSearchParams(useLocation().search).get('search');
 const searchTerm = DOMPurify.sanitize(new URLSearchParams(useLocation().search).get('query'));
 
  return (
    <div className='container'>
        <h1>Reflected XSS Example</h1>
        <h2 dangerouslySetInnerHTML={{ __html: `Search results for:  ${searchTerm}` }}></h2>
    </div>
  );
};

export default ReflectedXss;