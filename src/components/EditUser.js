import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ name: "", email: "", mobile: "" });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/user/${id}`)
      .then(res => setInputs(res.data.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/user/${id}`, inputs)
      .then(res => {
        alert(res.data.message);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <h2 className="my-4 text-center">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Name" className="form-control mb-2"/>
        <input type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Email" className="form-control mb-2"/>
        <input type="text" name="mobile" value={inputs.mobile} onChange={handleChange} placeholder="Mobile" className="form-control mb-2"/>
        <button className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}
