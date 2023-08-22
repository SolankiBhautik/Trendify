import React from 'react'
import {Link} from "react-router-dom";
import logo from './img/logo.svg'
import profile from "./img/Profile.svg"
import cart from "./img/Cart.svg"

const Navbar = () => {
    return (
        <>
            <nav className='d-flex justify-content-around my-2 fs-5'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className="nav_itm d-flex gap-4">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle p-0 fs-5 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item active" to="/">Action</Link></li>
                            <li><Link className="dropdown-item" to="/">Another action</Link></li>
                            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            <li><Link className="dropdown-item" to="/">Separated link</Link></li>
                        </ul>
                    </div>
                    <Link to="/about" className='my-0'>About</Link>
                    <Link className='my-0'  to="/contect_us">Contect Us</Link>
                </div>
                <div className="icon_box d-flex gap-4">
                    <Link className='my-0' to="/profile"><img src={profile} alt='profile' /></Link>
                    <Link className='my-0' to="/cart"><img src={cart} alt="cart" /></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar