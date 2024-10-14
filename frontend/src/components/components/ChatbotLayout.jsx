import React, { useState } from "react";
import PdfUpload from "@/components/components/PdfUpload"; // Adjust the import path as necessary
import PdfViewer from "@/components/components/PdfViewer"; // Adjust the import path as necessary

const ChatbotLayout = () => {
  const [pdfUploaded, setPdfUploaded] = useState(false);

  const handleUpload = () => {
    setPdfUploaded(true); // Update the state when a PDF is uploaded
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">AI PDF Chatbot</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
        {/* Centered Container for PDF Upload and Viewer */}
        <div className={`w-4/5 ${pdfUploaded ? 'h-[70vh]' : 'h-[25vh]'} bg-white p-4 shadow-lg rounded-lg overflow-auto`}>
          <PdfUpload onUpload={handleUpload} />
          <PdfViewer height={pdfUploaded ? '100%' : '100%'} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 px-8 text-center shadow-md">
        <p className="text-sm text-gray-600">© 2024 AI PDF Chatbot</p>
      </footer>
    </div>
  );
};

export default ChatbotLayout;
