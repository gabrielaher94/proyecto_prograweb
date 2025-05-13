import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="bg-dark text-white custom-footer">
        <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className='text-uppercase mb-4 font-weight-bold text-primary' style={{marginLeft:'30px'}}>Acerca de</h5>
            <hr className='mb-4'style={{marginLeft:'30px'}}/>
            <p style={{marginLeft: "30px"}}>Servisios tecnicos S.A. Especialistas en dar un soporte técnico con el mejor respaldo a nivel nacinal</p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className='text-uppercase mb-4 font-weight-bold text.primary'style={{marginLeft:'30px'}}>Enlaces útiles</h5>
            <hr className='mb-4'style={{marginLeft:'30px'}}/>
            <ul className="list-unstyled small" style={{marginLeft:'30px'}}>
                <li><a href="#" className="text-white">Inicio</a></li>
                <li><a href="#" className="text-white">Servicios</a></li>
                <li><a href="#" className="text-white">Contacto</a></li>
                </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className='text-uppercase mb-4 font-weight-bold text.primary'>Síguenos</h5>
            <hr className='mb-4'/>
            <ul className="list-unstyled small" style={{marginLeft:'30px'}}>
            <li><a href="#" className="text-white me-2">Facebook</a></li>
            <li><a href="#" className="text-white me-2">Twitter</a></li>
            <li><a href="#" className="text-white me-2">Instagram</a></li>
            </ul>
            </div>
            </div>
            <small style={{marginLeft:'30px'}}>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</small>
            </div>
    </footer>
    );
};

export default Footer;
