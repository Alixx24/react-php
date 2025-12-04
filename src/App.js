import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListRole from './components/ListRole';

function App() {
  return (
    <div className="App container py-4">

      <h4 className="text-center mb-4">React CRUD + PHP</h4>

      <BrowserRouter>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
          <div className="container-fluid">

            <Link className="navbar-brand" to="/">Dashboard</Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">

              {/* Menu items */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">List Users</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/user/create">Create User</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/roles">Roles</Link>
                </li>
              </ul>

     


            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="roles" element={<ListRole />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
