import { AiFillTruck } from "react-icons/ai";
function TopNavbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">SEVICIOS TECNICOS S,A</span>
                
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        <AiFillTruck  className="me-2"/> Servicios
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <button className="dropdown-item" onClick={()=>{}}>Reparacion de Equipos</button>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Venta de PC</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default TopNavbar;