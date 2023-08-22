import React from 'react';
import { Link } from 'react-router-dom';
import crossSiteScripting from '../resources/cross-site-scripting.png';

const HomePageContent = () => (
  <div className="container">
    <h1>Part One - Understanding the basics of Cross-site Scripting</h1>
    <div class="image-container">
      <img src={crossSiteScripting} alt="cross-site-scripting" width="600" />
      <p><span class="extra-small">Image source: <a href="https://portswigger.net/web-security/cross-site-scripting">https://portswigger.net/web-security/cross-site-scripting</a></span></p>
    </div>
    <p>
      Cross-site Scripting is a security vulnerability that occurs in web applications when they do not adequately sanitize user input.
      This oversight allows attackers to inject malicious scripts into web pages. These scripts are then executed by the browsers of victim users.
      <br />The consequences of an XSS attack can range from stealing session cookies and impersonating users, to defacing websites, and even distributing malware.
      There are three main types of XSS:
    </p>
    <ol>
      <li>
        <Link to="/reflected-xss">
          <h4>Reflected XSS (or Non-Persistent XSS):</h4>
        </Link>
        The malicious script is embedded in a URL and is only executed when a user clicks on the malicious link. The script is then reflected off the web server, such as in an error message, search result, or any other response that includes some or all of the input sent to the server as part of the request.
      </li>
      <li>
        <Link to="/stored-xss">
          <h4>Stored XSS (or Persistent XSS):</h4>
        </Link>
        The malicious script is permanently stored on the target server, such as in a database, message board, or comment field. When a user accesses the affected page, the malicious script is served and executed.
      </li>
      <li>
        <Link to="/dom-xss">
          <h4>DOM-based XSS:</h4>
        </Link>
        The vulnerability exists in the client-side scripts rather than the server-side scripts. The malicious payload is executed as a result of modifying the DOM (Document Object Model) in the victim's browser.
      </li>
    </ol>
    <Link to="/react-and-xss"><h4>React and XSS</h4></Link>
  </div>
);

export default HomePageContent;
