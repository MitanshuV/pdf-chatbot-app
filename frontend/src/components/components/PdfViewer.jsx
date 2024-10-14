import React from "react";
import { usePdfContext } from "@/context/PdfContext"; // Adjust the import path as necessary

const PdfViewer = () => {
  const { pdfFile } = usePdfContext(); // Use the custom hook to access PDF context

  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">PDF Viewer</h2>
      {pdfFile ? (
        <div className="relative w-full lg:w-3/4 mx-auto h-[600px] border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            src={URL.createObjectURL(pdfFile)} // Create a URL for the uploaded PDF file
            className="w-full h-full"
            title="PDF Viewer"
            frameBorder="0"
          >
            This browser does not support PDFs. Please download the PDF to view
            it:
            <a
              href={URL.createObjectURL(pdfFile)}
              className="text-blue-500 underline"
            >
              {" "}
              Download PDF
            </a>
            .
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
