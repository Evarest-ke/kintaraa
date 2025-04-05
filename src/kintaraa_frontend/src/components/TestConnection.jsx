import React, { useState } from 'react';
import { api } from '../services/api';

function TestConnection() {
  const [description, setDescription] = useState('');
  const [reportId, setReportId] = useState(null);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const id = await api.submitReport(description);
      setReportId(id);
      
      // Get the report back to verify
      const reportData = await api.getReport(id);
      setReport(reportData);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Test Backend Connection</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Report Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Submit Report
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {reportId && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p>Report submitted successfully! ID: {reportId}</p>
        </div>
      )}

      {report && (
        <div className="mt-4 p-4 bg-blue-100 rounded">
          <h3 className="font-bold">Retrieved Report:</h3>
          <pre className="mt-2 whitespace-pre-wrap">
            {JSON.stringify(report, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default TestConnection;