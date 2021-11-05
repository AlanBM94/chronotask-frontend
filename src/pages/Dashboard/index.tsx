import React, { useState, useEffect, useCallback } from 'react';
import './dashboard.scss';
import { useActions } from '../../hooks/use-action';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import Sidebar from './../../components/Sidebar';
import Button from './../../components/Button';
import Tasks from '../../components/Tasks';
import Spinner from '../../components/Spinner';
import Modal from '../../components/Modal';
import { Redirect } from 'react-router-dom';
import NewTaskForm from '../../components/NewTaskForm';

const Dashboard: React.FC = () => {
    const { loadUser } = useActions();
    const [isNewTaskFormVisible, setIsNewTaskFormVisible] = useState(false);
    const auth = useTypedSelector((state) => state.auth);
    const token = localStorage.getItem('chronotask-token');

    useEffect(() => {
        loadUser(JSON.parse(token as string));
    }, [token]);

    if (!token) {
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
            {auth.loading ? (
                <div className="dashboard__loading">
                    <Spinner />
                </div>
            ) : (
                <>
                    <Modal
                        isOpen={isNewTaskFormVisible}
                        size={{
                            width: '300',
                            height: '400',
                        }}
                        onClose={() => setIsNewTaskFormVisible(false)}
                        handleClose={() => setIsNewTaskFormVisible(false)}
                    >
                        <NewTaskForm />
                    </Modal>
                    <div className="dashboard__sidebar">
                        <Sidebar />
                    </div>
                    <div className="dashboard__content">
                        <Button
                            text="Nueva actividad"
                            color="blue"
                            event={() => setIsNewTaskFormVisible(true)}
                        />
                        <div className="dashboard__contentTasks">
                            <Tasks />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
