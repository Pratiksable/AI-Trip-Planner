import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold">Made with ❤️ by Pratik Sable</h2>
        <p className="mt-2 text-gray-400">All rights reserved © 2024</p>

        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/Pratiksable"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pratiksable2503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/impratiksable"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Follow me on social media for more awesome content!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
