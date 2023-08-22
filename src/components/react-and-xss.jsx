import React from 'react'

export default function ReactAndXSS() {
  return (
    <div className='container'>
        <h1>React and XSS</h1>
        <p>
            React escapes content by default, preventing most forms of Cross-Site Scripting (XSS) attacks. This means that direct script execution from strings like <b><code>&lt;script&gt;...&lt;/script&gt;</code></b> is prevented.
        </p>
        <p>
            However, there are other XSS vectors, such as event handlers in HTML tags (e.g., <code>&lt;img src=1 onerror=alert('XSS')&gt;</code>), which can be exploited if raw input is directly rendered in the DOM without sanitization.
        </p>
        <h2>dangerouslySetInnerHTML</h2>
        <p>
            React provides a property called <code>dangerouslySetInnerHTML</code> to insert raw HTML into components. As the name suggests, it's dangerous because it can introduce XSS vulnerabilities if not used carefully. Always sanitize any HTML content before using this property.
        </p>
        <h2>Protection Measures</h2>
        <ul>
            <li>Avoid using <b><code>dangerouslySetInnerHTML</code></b></li>
            <li>If inserting raw HTML is necessary, always sanitize it first using libraries like DOMPurify.</li>
            <li>Implement a strong Content Security Policy (CSP) to restrict inline script execution.</li>
        </ul>
    </div>
  )
}
