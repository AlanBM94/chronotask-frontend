import React from 'react';
import './tasks.scss';
import Task from '../Task';

const Tasks: React.FC = () => {
    return (
        <div className="tasks">
            <Task id={1} title="Chronotask" tag="Entretenimiento" />
            <Task id={1} title="Chronotask" tag="Curso" />
            <Task id={1} title="Chronotask" tag="Trabajo" />
            <Task id={1} title="Chronotask" tag="Entretenimiento" />
            <Task id={1} title="Chronotask" tag="Curso" />
            <Task id={1} title="Chronotask" tag="Trabajo" />
        </div>
    );
};

export default Tasks;
