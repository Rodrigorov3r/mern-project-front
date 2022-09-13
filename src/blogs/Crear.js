import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Crear = () => {
  //   const [data, setData] = useState({
  //     title: '',
  //     content: '',
  //   });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const back = useNavigate();

  const URL = 'http://localhost:8000/blogs';

  //post data
  const store = async (e) => {
    e.preventDefault();
    axios.post(URL, { title: title, content: content });
    back('/');
  };

  //   const handleInput = (e) => {
  //     const { name, value } = e.target;

  //     setData({
  //       ...data,
  //       [name]: value,
  //     });
  //     console.log(value);
  //   };

  return (
    <div>
      <h2>Crear Post</h2>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
};

export default Crear;
