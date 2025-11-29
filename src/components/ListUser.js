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
        axios.delete(`http://localhost/php-for/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <>
            <h1>List User</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`}>Edit</Link>
                                <button onClick={() => deleteUser(user.id) }>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
