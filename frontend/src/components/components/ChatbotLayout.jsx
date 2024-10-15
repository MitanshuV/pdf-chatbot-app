import React from "react";
import PdfUpload from "@/components/components/PdfUpload"; // Adjust the import path as necessary
import PdfViewer from "@/components/components/PdfViewer"; // Adjust the import path as necessary
import { usePdfContext } from "@/context/PdfContext"; // Import the context

const ChatbotLayout = () => {
  const { uploadPdf } = usePdfContext(); // Access uploadPdf from context

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-1/4 bg-white shadow-lg p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>
        <div className="h-[25vh]">
          <PdfUpload />
        </div>
      </aside>
      <div className="flex-grow flex flex-col p-4">
        <section className="flex-grow bg-white shadow-lg rounded-lg mb-4 p-4 overflow-auto h-[25vh]">
          <h2 className="text-xl font-semibold mb-4">PDF Preview</h2>
          <PdfViewer />
        </section>
      </div>
    </div>
  );
};

export default ChatbotLayout;
