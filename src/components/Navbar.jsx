import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-menu">
        {/* Logo */}

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          className="boton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Enlaces del menú */}
        <div
          className={`md:flex md:items-center gap-6 ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <Link to="/" className="block py-2 hover:text-yellow-400">Inicio</Link>
          <Link to="/about" className="block py-2 hover:text-yellow-400">Acerca</Link>
          <Link to="/contact" className="block py-2 hover:text-yellow-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
