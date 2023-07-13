import React from 'react';
import DOMPurify from 'dompurify';

const StoredXss = () => {
  const comments = [
    {
      author: "Taraka",
      comment: "<p>Hope you are enjoying xss presentation!!</p>"
    },
    {
      author: "Malicious Actor",
      comment: "<p>This is my xss test comment: <script></script></p>"
    //   comment: "<p>This is my xss test comment: <img src=1 onerror=alert('XSS')></p>"
    },
  ];

  return (
    <div>
      <h1>Stored XSS Example</h1>
      <h2>Comments</h2>
      <div className="comment-section">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <p className="author">Author: {comment.author}</p>
            <div className="comment-content" dangerouslySetInnerHTML={{ __html: comment.comment }} />
            {/* <div className="comment-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.comment) }} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoredXss;
