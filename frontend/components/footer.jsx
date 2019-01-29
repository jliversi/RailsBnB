import React from 'react';
import { Link } from 'react-router-dom';
const AppFooter = (props) => {



  return (
    <footer className="app-footer">
      <div className="footer-wrapper">
        <div className="footer-links">
          <Link to="/">
            <span className="footer-logo">R</span>
          </Link>
          <a href="mailto:jliversidge1@gmail.com">Email</a>
          <a href="https://github.com/jliversi">Github</a>
          <a href="https://www.linkedin.com/in/jliversi/">LinkedIn</a>
        </div>
        <div className="copyright">
          <span>© 2019 Joshua Ashmall-Liversidge</span>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;