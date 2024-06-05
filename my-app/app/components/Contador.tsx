'use client'
import { useEffect, useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCount = async () => {
    const response = await fetch('/api/');
    const data = await response.json();
    setCount(data.count);
  };

  const incrementCount = async () => {
    setLoading(true);
    const response = await fetch('/api/', { method: 'POST' });
    const data = await response.json();
    setCount(data.count);
    setLoading(false);
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="p-6 bg-white rounded-full shadow-md text-center w-64 h-64 flex flex-col justify-center items-center"
        style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }} // Aquí se agrega la sombra debajo del círculo
      >
        <h1 className="text-3xl font-bold italic mb-3 text-gray-800" style={{ fontFamily: 'Calibri, sans-serif' }}>{count}</h1>
        <button
          onClick={incrementCount}
          className={`px-6 py-3 bg-blue-500 text-white rounded-full text-lg italic ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
          style={{ fontFamily: 'Calibri, sans-serif' }}
        >
          {loading ? 'Cargando...' : 'Aumentar'}
        </button>
      </div>
    </div>
  );
};

export default Contador;

