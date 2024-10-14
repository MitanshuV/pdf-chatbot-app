import React from 'react';
import { usePdfContext } from '@/context/PdfContext'; // Adjust the import path as necessary

const PdfViewer = () => {
  const { pdfFile } = usePdfContext(); // Get pdfFile from context

  return (
    <div className="mt-4 p-4 bg-gray-200 rounded-lg h-96 flex items-center justify-center">
      {pdfFile ? (
        <iframe
          src={URL.createObjectURL(pdfFile)}
          title="PDF Viewer"
          className="w-full h-full"
        />
      ) : (
        <p className="text-gray-600">PDF Preview will appear here.</p>
      )}
    </div>
  );
};

export default PdfViewer;
