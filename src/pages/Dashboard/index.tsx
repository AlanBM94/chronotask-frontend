import React from 'react';
import './dashboard.scss';
import Sidebar from './../../components/Sidebar';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <Sidebar />
            </div>
            <div className="dashboard__content"></div>
        </div>
    );
};

export default Dashboard;
