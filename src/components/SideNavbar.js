import React from "react"
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

function SideNavbar(){
    return(
        <div className="bg-secondary position-fixed vh-100 d-flex flex-column p-3" style={{width: '100px'}}>
            <ul className="nav flex-colum mt-3">
                <li className="nav-item">
                <Link to ="/" className="nav-link text-white">
                    <FaHome className="me-2" />Inicio
                </Link>
                <Link to ="/" className="nav-link text-white">
                    <FaUser className="me-2" />Perfil
            </Link>
            </li>
        </ul>
    </div>
    )
}
export default SideNavbar;