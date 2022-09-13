import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Crear = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
  });
  const back = useNavigate();

  const URL = 'http://localhost:8000/blogs';

  //post data
  const store = async (e) => {
    e.preventDefault();
    axios.post(URL + '/crear', { title: data.title, content: data.content });
    back('/');
  };
  return <h1>Crear</h1>;
};

export default Crear;
