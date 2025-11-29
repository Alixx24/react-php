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
        <>
            <h1>Edit User</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Mobile:
                    <input
                        type="text"
                        name="mobile"
                        value={inputs.mobile || ""}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Save</button>
            </form>
        </>
    );
}
