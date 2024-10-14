import React from "react";
import { Route, Routes } from "react-router-dom";
import { PdfProvider } from "@/context/PdfContext";
import ChatbotLayout from "@/components/components/ChatbotLayout";

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
