import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const links = [
    { name: "Home", url: "/" },
  ];

  return (
    <header>
      <nav
        expand="md"
        className="navbar navbar-expand-lg navbar-dark bg-dark px-3"
      >
        <div className="navbar-brand" href="/">
          demo
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link}>
                <Link
                  to={link.url}
                  className={`nav-link ${location.pathname === link.url && `active`
                    }`}
                  aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
