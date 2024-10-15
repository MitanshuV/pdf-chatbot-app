import React from "react";
import { usePdfContext } from '@/context/PdfContext'; 

const PdfViewer = () => {
  const { pdfFile } = usePdfContext(); 

  return (
    <div className="w-full h-full flex-grow">
      {pdfFile ? (
        <iframe
          src={URL.createObjectURL(pdfFile)} 
          className="w-full h-full" 
          title="PDF Viewer"
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
