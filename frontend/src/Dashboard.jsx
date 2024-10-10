import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';

// Set the worker src for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Dashboard = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl mb-4">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/upload" className="hover:text-gray-300">Upload PDF</Link>
            </li>
            <li className="mb-2">
              <Link to="/settings" className="hover:text-gray-300">Settings</Link>
            </li>
            <li className="mb-2">
              <Link to="/chat" className="hover:text-gray-300">Chat Bot</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* PDF Display */}
          <div className="border p-4">
            <h3 className="text-lg font-semibold mb-2">Uploaded PDF</h3>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {pdfFile && (
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            )}
          </div>

          {/* Chat Bot */}
          <div className="border p-4">
            <h3 className="text-lg font-semibold mb-2">Chat Bot</h3>
            <div className="h-64 border rounded-lg p-2">Chat Bot Interface</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
