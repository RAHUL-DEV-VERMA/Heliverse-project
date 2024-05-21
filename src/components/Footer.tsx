import React from "react";
import "../styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>© 2023 Copywrite. All rights reserved by QodeMatrix</span>
        <span>
          <div>Documentation</div>
          <div>Support</div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
