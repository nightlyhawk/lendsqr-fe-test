import { useState, useEffect } from 'react';


export type UseFetchProps = {
    status: Number,
    statusText: String,
    data: any,
    error: any,
    loading: boolean
}


export const useFetch = (url: string): UseFetchProps => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const getAPIData = async () => {
        setLoading(true);
        try {
          const apiResponse = await fetch(url);
          const json = await apiResponse.json();
          setStatus(apiResponse.status);
          setStatusText(apiResponse.statusText);
          setData(json);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };
      useEffect(() => {
        getAPIData();
      }, [url]);
    
      return { status, statusText, data, error, loading };
    };

