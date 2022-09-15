import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Crear = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
  });
  //const [title, setTitle] = useState('');
  //const [content, setContent] = useState('');
  const back = useNavigate();

  const URL = 'http://localhost:8000/blogs';

  //post data
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URL, { title: data.title, content: data.content });
    back('/');
  };

  const handleInput = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Crear Post</h2>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleInput}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            type="text"
            name="content"
            value={data.content}
            onChange={handleInput}
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
