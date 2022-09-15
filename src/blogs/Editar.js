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

  //traigo la data de la api para editar con el estado(useState)
  const getBlogId = async () => {
    const res = await axios.get(URL + id);
    console.log('getId: ', res.data);
    setData({
      title: res.data.title,
      content: res.data.content,
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

  return <div>Editar</div>;
};

export default Editar;
