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
        <div className="col col text-center">
          <Link to={'/crear'} className="btn btn-primary mt-3 mb-3">
            <i class="fa-solid fa-circle-plus"></i>
          </Link>
          <table className="table">
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
                    <Link
                      to={`editar/${blog.id}`}
                      className="btn btn-info mx-2"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarBlog(blog.id)}
                      className="btn btn-danger"
                    >
                      <i class="fa-sharp fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mostrar;
