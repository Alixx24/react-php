import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListUser() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/php-for/')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/php-for/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost/php-for/?search=${search}`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  return (
    <div className="container">

      <h2 className="my-4 text-center">List Users</h2>
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-light" type="submit">Search</button>
      </form>
      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table table-bordered table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th style={{ width: "60px" }}>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th style={{ width: "160px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user, key) => (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>

                    <Link
                      to={`user/${user.id}/edit`}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
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

}
