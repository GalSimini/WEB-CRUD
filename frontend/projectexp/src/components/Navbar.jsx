import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Sistema de Usuários
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Lista de Usuários
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cadastro" className="nav-links">
                            Cadastrar Novo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;