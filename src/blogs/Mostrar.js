import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:8000/blogs/';

const Mostrar = () => {
  const [blogs, setBlogs] = useState([]);

  const traerBlogs = async () => {
    await axios.get(URL).then((response) => setBlogs(response.data));
  };

  const eliminarBlog = async (id) => {
    await axios.delete(URL + id);
    traerBlogs();
  };

  useEffect(() => {
    traerBlogs();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content} </td>
                  <td>
                    <Link to={`editar/${blog.id}`} className="btn btn-info">
                      Editar
                    </Link>
                    <button
                      onClick={() => eliminarBlog(blog.id)}
                      className="btn btn-danger"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mostrar;
