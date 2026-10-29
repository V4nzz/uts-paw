import { NavLink } from "react-router-dom";

export default function Navbar ({ menu }) {
    return (
        <header id="header-navigasi" className="navbar">
            <strong className="title">VANZFLIX<span style={{ color: '#fff' }}>.</span></strong>
            <nav className="menu">
                {menu.map(({ ke, label }) => (
                    <NavLink key={ke} to={ke} end={ke === '/'}>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}