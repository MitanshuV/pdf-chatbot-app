import React, { useState } from "react";
import PdfUpload from "@/components/components/PdfUpload"; // Adjust the import path as necessary
import PdfViewer from "@/components/components/PdfViewer"; // Adjust the import path as necessary

const ChatbotLayout = () => {
  const [pdfFile, setPdfFile] = useState(null); // Store the uploaded PDF file

  const handleUpload = (file) => {
    setPdfFile(file); // Update the state with the uploaded file
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>
        <div className="h-[25vh]"> {/* Fixed height for the PDF upload section */}
          <PdfUpload onUpload={handleUpload} />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col p-4">
        {/* PDF Preview Section */}
        <section className="flex-grow bg-white shadow-lg rounded-lg mb-4 p-4 overflow-auto h-[25vh]">
          <h2 className="text-xl font-semibold mb-4">PDF Preview</h2>
          <PdfViewer pdfFile={pdfFile} />
        </section>
      </div>
    </div>
  );
};

export default ChatbotLayout;
