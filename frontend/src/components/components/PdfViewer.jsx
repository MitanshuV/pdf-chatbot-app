import React from "react";
import { usePdfContext } from "@/context/PdfContext"; // Adjust the import path as necessary

const PdfViewer = ({ height }) => { // Accept height as a prop
  const { pdfFile } = usePdfContext(); // Use the custom hook to access PDF context

  return (
    <div className="mt-4" style={{ height }}>
      {pdfFile ? (
        <div className="relative w-full h-full border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            src={URL.createObjectURL(pdfFile)} // Create a URL for the uploaded PDF file
            className="w-full h-full"
            title="PDF Viewer"
            frameBorder="0"
          >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href={URL.createObjectURL(pdfFile)} className="text-blue-500 underline"> Download PDF</a>.
          </iframe>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-600">PDF Preview will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
