import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fecthDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fecthDogImage();
  }, []);

  useEffect(() => {
    const storageUrl = localStorage.getItem('generatedImage');
    if (storageUrl) {
      setImageUrl(storageUrl);
      setIsLoading(false);
    } else {
      fecthDogImage();
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('generatedImage', imageUrl);
      const dog = imageUrl.split('/')[4];
      alert(dog);
    }
  }, [imageUrl, isLoading]);

  return (
    <div>
      <div className="header">
        <h1>Doguinhos</h1>
      </div>
      {isLoading ? <p>Loading...</p> : <img src={ imageUrl } alt="Doguinho aleatório" />}
      <button onClick={ fecthDogImage }>Novo doguinho!</button>
    </div>
  );
}

export default App;
