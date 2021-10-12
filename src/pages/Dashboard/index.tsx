import React, { useEffect } from 'react';
import './dashboard.scss';
import { useActions } from '../../hooks/use-action';
import Sidebar from './../../components/Sidebar';
import Button from './../../components/Button';
import Tasks from '../../components/Tasks';
import { Redirect } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { loadUser } = useActions();

    useEffect(() => {
        if (localStorage.getItem('chronotask-token')) {
            loadUser(
                JSON.parse(localStorage.getItem('chronotask-token') as string)
            );
        }
    }, []);

    if (!localStorage.getItem('chronotask-token')) {
        return (
            <Redirect
                to={{
                    pathname: '/',
                }}
            />
        );
    }

    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <Sidebar />
            </div>
            <div className="dashboard__content">
                <Button
                    text="Nueva actividad"
                    color="blue"
                    event={() => console.log('hey')}
                />
                <div className="dashboard__contentTasks">
                    <Tasks />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
