import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loadingAvatar, setLoadingAvatar] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setName(response.data.name);
        if (response.data.avatar) {
          setAvatar(`data:${response.data.avatar.contentType};base64,${response.data.avatar.data}`);
        } else {
          setAvatar(null);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/name', { name: inputName })
      .then(response => {
        setName(inputName);
        setInputName('');
      })
      .catch(error => {
        console.error('Error submitting name:', error);
      });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setLoadingAvatar(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
      setLoadingAvatar(false);
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatar);
    axios.post('http://localhost:5000/api/upload-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        setAvatar(`data:${response.data.avatar.contentType};base64,${response.data.avatar.data}`);
        setAvatarPreview(null);
      })
      .catch(error => {
        console.error('Error uploading avatar:', error);
      });
  };

  return (
    <div className="App">
      <h1>Hello, {name || 'Guest'}!</h1>
      <form onSubmit={handleNameSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleAvatarSubmit}>
        <input
          type="file"
          onChange={handleAvatarChange}
        />
        <button type="submit">Upload Avatar</button>
      </form>
      {loadingAvatar && (
        <div>Loading avatar...</div>
      )}
      {!loadingAvatar && !avatar && !avatarPreview && (
        <div>No avatar uploaded</div>
      )}
      {avatar && !avatarPreview && (
        <div>
          <h2>Uploaded Avatar</h2>
          <img src={avatar} alt="Uploaded Avatar" style={{ maxWidth: '150px' }} />
        </div>
      )}
      {avatarPreview && !loadingAvatar && (
        <div>
          <h2>Avatar Preview</h2>
          <img src={avatarPreview} alt="Avatar Preview" style={{ maxWidth: '150px' }} />
        </div>
      )}
    </div>
  );
};

export default App;
