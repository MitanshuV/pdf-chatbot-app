import React from "react";
import PdfUpload from "@/components/components/PdfUpload"; // Adjust the import path as necessary
import PdfViewer from "@/components/components/PdfViewer"; // Adjust the import path as necessary

const ChatbotLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">AI PDF Chatbot</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
  {/* Centered Container for PDF Upload and Viewer */}
  <div className="w-full max-w-[500px] h-[70vh] bg-white p-4 shadow-lg rounded-lg overflow-auto">
    <PdfUpload />
    <PdfViewer />
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
