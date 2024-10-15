import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Create a context
const PdfContext = createContext();

// Create a provider component
export const PdfProvider = ({ children }) => {
  const [pdfFile, setPdfFile] = useState(null);

  const uploadPdf = (file) => {
    setPdfFile(file);
    getData()
  };

  const getData = async () => {
    const response = await axios.get('http://127.0.0.1:5000/api/data');
    console.log(response.data);
  }

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
