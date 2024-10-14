import React from "react";

const PdfViewer = ({ pdfFile }) => {
  return (
    <div className="mt-4">
      {pdfFile ? (
        <iframe
          src={URL.createObjectURL(pdfFile)} // Create a URL for the uploaded PDF file
          className="w-full h-[400px]" // Set a fixed height for the viewer
          title="PDF Viewer"
          frameBorder="0"
        >
          This browser does not support PDFs. Please download the PDF to view it:
          <a href={URL.createObjectURL(pdfFile)} className="text-blue-500 underline"> Download PDF</a>.
        </iframe>
      ) : (
        <p className="text-gray-600">PDF Preview will appear here.</p>
      )}
    </div>
  );
};

export default PdfViewer;
