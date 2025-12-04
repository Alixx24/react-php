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
        <div className="container">

            <h2 className="my-4 text-center">Create / Edit User</h2>

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
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary px-4"
                        >
                            Save
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );

}