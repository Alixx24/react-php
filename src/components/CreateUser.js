import { useState } from "react";
import axios from "axios";

export default function CreateUser() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/php-for/', inputs);
        console.log(inputs);
    }

    return (
        <>
            <h1>List User</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>

                <label>
                    Email:
                    <input type="text" name="email" onChange={handleChange} />
                </label>

                <label>
                    Mobile:
                    <input type="text" name="mobile" onChange={handleChange} />
                </label>

                <button type="submit">Save</button>
            </form>
        </>
    );
}