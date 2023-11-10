import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useClientData() {
  const [clientData, setClientData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/clients`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (Status: ${response.status})`);
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
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        },
        body: JSON.stringify(newClient),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error(`Error adding client (Status: ${response.status})`);
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
