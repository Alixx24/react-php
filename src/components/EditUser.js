import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {

  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost/php-for/${id}`)
      .then(res => setInputs(res.data));
  }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    axios.put(`http://localhost/php-for/${id}`, inputs)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };


  return (
    <div className="container">

      <h2 className="my-4 text-center">Edit User</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label">Mobile:</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                value={inputs.mobile || ""}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success px-4"
            >
              Save Changes
            </button>

          </form>

        </div>
      </div>

    </div>
  );

}
