import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { usePdfContext } from "@/context/PdfContext"; // Adjust the import path as necessary

const PdfUpload = ({ onUpload }) => { // Accept onUpload as a prop
  const { uploadPdf } = usePdfContext(); // Use the context to get the upload function
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadPdf(selectedFile); // Call uploadPdf to set the file in context
      onUpload(); // Notify parent component that a file has been uploaded
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
        <Button onClick={handleUpload} className="w-full bg-blue-500 hover:bg-blue-600">
          Upload PDF
        </Button>
      )}
    </div>
  );
};

export default PdfUpload;
