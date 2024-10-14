import React, { createContext, useContext, useState } from 'react';

// Create a context
const PdfContext = createContext();

// Create a provider component
export const PdfProvider = ({ children }) => {
  const [pdfFile, setPdfFile] = useState(null);

  const uploadPdf = (file) => {
    setPdfFile(file);
  };

  return (
    <PdfContext.Provider value={{ pdfFile, uploadPdf }}>
      {children}
    </PdfContext.Provider>
  );
};

// Create a custom hook to use the PdfContext
export const usePdfContext = () => {
  return useContext(PdfContext);
};
