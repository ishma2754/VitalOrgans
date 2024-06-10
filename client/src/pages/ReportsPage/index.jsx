import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Document, Page } from "react-pdf"; // Correct import for react-pdf
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// To fix missing worker:
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js`;

export default function ReportsPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfReports, setPdfReports] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;

  useEffect(() => {
    fetchPdfReports(); // Fetch PDF reports when component mounts
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("pdfFile", selectedFile);
    formData.append("user_email", cookies.Email);

    try {
      await axios.post("http://localhost:8000/ReportsPage", formData);
      alert("PDF file uploaded successfully");
      fetchPdfReports();
    } catch (error) {
      console.error(error);
      alert("Failed to upload the PDF file");
    }
  };

  const fetchPdfReports = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/ReportsPage/${cookies.Email}`
      );
      setPdfReports(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch PDF reports");
    }
  };

  return (
    <div className="mt-10 mb-40">
      <div className="">
        <input type="file" onChange={handleFileChange} />
        <button
          onClick={handleUpload}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mt-4"
        >
          Upload PDF
        </button>
        <button
          onClick={fetchPdfReports}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mt-4 mb-4"
        >
          Fetch PDF Reports
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {pdfReports.map((report) => (
          <div
            key={report.id}
            className="pdf-item relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="pdf-details p-5 relative">
              <h3 className="font-bold">{report.file_name}</h3>
              <div className="pdf-container relative w-full h-64 overflow-hidden">
                <Document file={`http://localhost:8000/${report.file_path}`}>
                  <Page pageNumber={1} scale={0.8} />{" "}
                  {/* Adjust scale value as needed (e.g., 0.8) */}
                </Document>
              </div>
              <div className="mt-2">
                {" "}
                {/* Add margin-top to create space */}
                <a
                  href={`http://localhost:8000/${report.file_path}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{ display: "inline-block" }}
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
