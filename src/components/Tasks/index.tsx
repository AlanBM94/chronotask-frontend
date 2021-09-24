import React from 'react';
import './tasks.scss';
import Task from '../Task';

const Tasks: React.FC = () => {
    return (
        <div className="tasks">
            <Task id={1} title="Chronotask" tag="Entretenimiento" />
            <Task id={2} title="Chronotask" tag="Curso" />
            <Task id={3} title="Chronotask" tag="Trabajo" />
            <Task id={4} title="Chronotask" tag="Entretenimiento" />
            <Task id={5} title="Chronotask" tag="Curso" />
            <Task id={6} title="Chronotask" tag="Trabajo" />
        </div>
    );
};

export default Tasks;
