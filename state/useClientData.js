import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useClientData() {
  const [clientData, setClientData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/clients`)
      .then((response) => {
        if (response.status >= 300) {
          setError(`Error getting client (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setClientData(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching client data:', error);
      });
  }, []);

  const addClient = async (newClient) => {
    try {
      console.log(`${baseUrl}/clients`);
      const response = await fetch(`${baseUrl}/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });

      if (response.status >= 300) {
        setError(`Error adding client (Status: ${response.status})`);
      }
      const data = await response.json();
      setClientData([...clientData, data]);
    } catch (error) {
      setError(error.message);
      console.error('Error adding client:', error);
    }
  };

  return { clientData, addClient, error };
}
