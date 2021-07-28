import React from 'react';
import './sidebar.scss';
import logoutIcon from './../../images/logout.svg';

const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt="user"
                />
                <h4>Juanita Peréz</h4>
            </div>
            <div className="sidebar__navigation">
                <ul>
                    <li>
                        <a href="#">Actividades</a>
                    </li>
                    <li>
                        <a href="#">Tiempo de uso</a>
                    </li>
                    <li>
                        <a href="#">Reportes</a>
                    </li>
                    <li>
                        <a href="#">Perfil</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar__logout">
                <a href="#">
                    <img src={logoutIcon} alt="logout-icon" />
                    Cerrar sesión
                </a>
            </div>
        </div>
    );
};

export default SideBar;
