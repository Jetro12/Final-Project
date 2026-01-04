import { Link, NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
    opacity: isActive ? 1 : 0.75,
    textDecoration: "none",
    color: "inherit",
    fontWeight: isActive ? 700 : 500,
});

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="brand">Roamer</Link>

            <nav className="nav">
                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/destinations" style={linkStyle}>Destinations</NavLink>
                <NavLink to="/auth" style={linkStyle}>Login / Sign up</NavLink>
            </nav>
        </header>
    );
}
