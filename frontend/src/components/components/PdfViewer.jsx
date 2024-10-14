import React from "react";
import { usePdfContext } from "@/context/PdfContext"; // Adjust the import path as necessary

const PdfViewer = () => {
  const { pdfFile } = usePdfContext(); // Use the custom hook to access PDF context

  return (
    <div className="mt-4">
      {pdfFile ? (
        <iframe
          src={URL.createObjectURL(pdfFile)} // Create a URL for the uploaded PDF file
          width="100%"
          height="600px"
          title="PDF Viewer"
          frameBorder="0"
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href={URL.createObjectURL(pdfFile)}> Download PDF</a>.
        </iframe>
      ) : (
        <p className="text-gray-600">PDF Preview will appear here.</p>
      )}
    </div>
  );
};

export default PdfViewer;
