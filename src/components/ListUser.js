import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = search.trim()
      ? `http://127.0.0.1:8000/api/user-search?search=${search}`
      : `http://127.0.0.1:8000/api/user-list`;

    axios
      .get(url)
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  }, [search]); // تغییر سرچ باعث اجرای دوباره می‌شود

  //delete function
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    axios
      .delete(`http://127.0.0.1:8000/api/user/${id}`)
      .then(() => {
        //refresh list after delete
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">List Users</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Email</th><th>Mobile</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Link to={`/user/${user.id}/edit`} className="btn btn-warning btn-sm">
                    Edit
                  </Link>
                  {" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No users found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
