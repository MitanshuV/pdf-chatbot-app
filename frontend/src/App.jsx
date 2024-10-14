import React from "react";
import { Route, Routes } from "react-router-dom";
import { PdfProvider } from "@/context/PdfContext"; // Adjust the import path as necessary
import ChatbotLayout from "@/components/components/ChatbotLayout"; // Adjust the import path as necessary

const App = () => {
  return (
    <PdfProvider>
      <Routes>
        <Route path="/" element={<ChatbotLayout />} />
      </Routes>
    </PdfProvider>
  );
};

export default App;
