// MEU CSS
import styles from "./NavBar.module.css";

// MEUS IMPORTS
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={ `${styles.navbar} d-flex justify-content-between align-items-center p-4 ` }>
        <NavLink to="/" className={ styles.brand }>
            <span>Blogzinho</span>
        </NavLink>

        <ul className={ styles.link_list }>
            <li> <NavLink to="/" className={ ({ isActive }) => ( isActive ? styles.active : "") }
            > Home </NavLink> </li>
            {!user && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    Entrar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) => (isActive ? styles.active : 
                      "")}
                  >
                    Cadastrar
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <NavLink
                    to="/post/create"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    Novo Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? styles.active : 
                      "")}
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            <li> <NavLink to="/about" className={ ({ isActive }) => ( isActive ? styles.active : "") }>Sobre</NavLink> </li>
            {user && (
          <li onClick={logout}>Sair</li>
            )}
        </ul>
    </nav>
  )
}

export default NavBar