import React from 'react';
import './dashboard.scss';
import Sidebar from './../../components/Sidebar';
import Button from './../../components/Button';
import Tasks from '../../components/Tasks';
import { Redirect } from 'react-router-dom';

const Dashboard: React.FC = () => {
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
