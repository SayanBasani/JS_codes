import { useContext, useState } from 'react';
import { TheContext } from '../../../Storages/Store&Functions';

export default function Uplodepost() {
  const {selectedFiles, setSelectedFiles} = useContext(TheContext)

  console.log(selectedFiles);
  

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file) => ({
      file,
      fileURL: URL.createObjectURL(file),
    }));
    setSelectedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
  };

  const handleRemoveFile = (fileURL) => {
    // Remove file from preview
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f.fileURL !== fileURL));
  };

  const renderPreview = () => {
    if (selectedFiles.length === 0) return null;

    return selectedFiles.map(({ file, fileURL }, index) => {
      const fileType = file.type;

      return (
        <div key={index} className="flex flex-col items-start space-y-2 p-2 border border-gray-300 rounded-md mb-4">
          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">{file.name}</p>
            <button
              className="text-red-500 text-xs hover:underline"
              onClick={() => handleRemoveFile(fileURL)}
            >
              Remove
            </button>
          </div>
          {/* File Preview */}
          {fileType.startsWith('image/') && (
            <img src={fileURL} alt="Preview" className="max-w-[150px] h-auto" />
          )}
          {fileType === 'application/pdf' && (
            <iframe src={fileURL} title="PDF Preview" className="w-[150px] h-[150px]" />
          )}
          {fileType.startsWith('video/') && (
            <video src={fileURL} controls className="max-w-[150px] h-auto" />
          )}
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-[1fr_auto] h-screen">
      {/* Main Content Area */}
      <div className="flex items-center justify-center w-full bg-gray-50 dark:bg-gray-700">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, GIF, MP4, PDF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange} // Handle file change
            multiple // Allow multiple file selection
          />
        </label>
      </div>

      {/* Preview Section */}
      <div className="w-[320px] p-4 bg-white dark:bg-gray-800 border-l border-gray-300 overflow-auto">
        {selectedFiles.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              File Previews
            </h3>
            {renderPreview()}
          </div>
        )}
      </div>
    </div>
  );
}
