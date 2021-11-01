import React from 'react';
import './sidebar.scss';
import logoutIcon from './../../images/logout.svg';
import { Redirect } from 'react-router';
import { useTypedSelector } from './../../hooks/use-typed-selector';
import Spinner from './../Spinner';
import { useActions } from '../../hooks/use-action';

const SideBar: React.FC = () => {
    const { logout } = useActions();

    const auth = useTypedSelector((state) => state.auth);

    const logoutHandler = () => {
        logout();
    };

    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt="user"
                />
                <h4>{auth.user?.data.user.name}</h4>
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
                <button onClick={logoutHandler}>
                    <img src={logoutIcon} alt="logout-icon" />
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};

export default SideBar;
