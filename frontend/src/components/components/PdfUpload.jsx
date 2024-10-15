import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePdfContext } from "@/context/PdfContext";

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
    <div className="space-y-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      {selectedFile && (
        <Button
          onClick={handleUpload}
          className="w-full bg-blue-500 hover:bg-blue-600"
        >
          Upload PDF
        </Button>
      )}
    </div>
  );
};

export default PdfUpload;
