import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePdfContext } from "@/context/PdfContext";
import { FiUploadCloud } from "react-icons/fi"; // Importing upload icon
import { AiOutlineFilePdf } from "react-icons/ai"; // Importing PDF file icon

const PdfUpload = () => {
  const { uploadPdf } = usePdfContext();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadPdf(selectedFile);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
        <FiUploadCloud className="text-blue-500" /> {/* Upload Icon */}
        <span>Upload Your PDF</span>
      </h2>
      <p className="text-sm text-gray-500">
        Choose a PDF file from your device to upload and process.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <label
          htmlFor="pdf-upload"
          className="w-full flex justify-center items-center px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <AiOutlineFilePdf className="text-red-500 mr-2" /> {/* PDF Icon */}
          <span className="text-gray-600">Select PDF File</span>
          <input
            id="pdf-upload"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {selectedFile && (
          <Button
            onClick={handleUpload}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
          >
            <FiUploadCloud /> {/* Upload Icon inside Button */}
            <span>Upload PDF</span>
          </Button>
        )}
      </div>
      {selectedFile && (
        <div className="mt-2 text-sm text-gray-600">
          Selected file: <span className="font-medium">{selectedFile.name}</span>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
