import React, { useEffect, useState } from 'react';
import { testApiConnection } from '../api/testApi';

const TestApiConnection = () => {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runTest = async () => {
    setLoading(true);
    const result = await testApiConnection();
    setTestResult(result);
    setLoading(false);
  };

  useEffect(() => {
    runTest();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">API Connection Test</h2>
      {loading ? (
        <p>Testing API connection...</p>
      ) : testResult ? (
        <div>
          <p className={testResult.success ? 'text-green-600' : 'text-red-600'}>
            Status: {testResult.success ? 'Success' : 'Failed'}
          </p>
          {testResult.success ? (
            <div>
              <p>Data received:</p>
              <pre className="bg-white p-2 rounded mt-2 overflow-auto max-h-40">
                {JSON.stringify(testResult.data, null, 2)}
              </pre>
            </div>
          ) : (
            <p>Error: {testResult.error}</p>
          )}
        </div>
      ) : (
        <p>Not tested yet</p>
      )}
      <button 
        onClick={runTest}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Re-run Test
      </button>
    </div>
  );
};

export default TestApiConnection;