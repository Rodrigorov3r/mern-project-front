import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editar = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
  });
  const id = useParams();

  const back = useNavigate();

  const URL = 'http://localhost:8000/blogs';

  useEffect(() => getBlogId(), []);

  //traigo la data de la api para editar con el estado(useState)
  const getBlogId = async () => {
    const res = await axios.get(URL + id);
    console.log('getId: ', res.data);
    setData({
      title: res.data.title,
      content: res.data.content,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  //edito la data y la envío a la api con un put
  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(URL + id, {
      title: data.title,
      content: data.content,
    });
    back('/');
  };


  return (
    <div>
      <h2>Crear Post</h2>
      <form onSubmit={updateData}>
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
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default Editar;
