import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import { LinkProps } from "react-router-dom";
import "./Navbar.css";
import Home from "../pages/Home";
import Book from "../pages/Book";

export default function Navbar() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Book />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: 20,
  };

  const activeLinkStyle = {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "white",
    textDecoration: "none",
    width: "200px",
    display: "block",
    padding: 20,
  };

  return (
    <div>
      <Link style={match ? activeLinkStyle : linkStyle} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">Book</CustomLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
