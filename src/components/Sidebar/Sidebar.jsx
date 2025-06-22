import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import sectaLogo from "../../assets/secta_logo.svg";
import "./sidebar.css";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  const navItems = [
    { to: "/", icon: <FaHome />, label: "HOME" },
    { to: "/about", icon: <FaInfoCircle />, label: "SOBRE NOSOTROS" },
    { to: "/contact", icon: <FaEnvelope />, label: "CONTACTANOS" },
  ];

  return (
    <>
      <button className="toggle-btn" onClick={() => setIsOpen(true)}>
        <FaBars size={20} />
      </button>

      <aside ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn md:hidden" onClick={() => setIsOpen(false)}>
          <FaTimes size={20} />
        </button>

        <div className="sidebar-header">
          <img src={sectaLogo} alt="Secta Banditos" />
        </div>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-item${pathname === item.to ? " active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
