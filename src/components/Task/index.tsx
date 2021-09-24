import React from 'react';
import './task.scss';
import courseIcon from './../../images/computer.svg';
import briefcaseIcon from './../../images/briefcase.svg';
import youtubeIcon from './../../images/youtube.svg';
import timeIcon from './../../images/time.svg';
import editIcon from './../../images/edit.svg';
import trashIcon from './../../images/trash.svg';
import { Link } from 'react-router-dom';

interface ITask {
    title: string;
    tag: 'Curso' | 'Trabajo' | 'Entretenimiento';
    id: number;
}

const Task: React.FC<ITask> = ({ title, tag, id }) => {
    return (
        <div className={`task task--${tag}`}>
            <div className="task__title">
                <h4>{title}</h4>
            </div>
            <div className="task__tag">
                <p>{tag}</p>
                {tag === 'Curso' && <img src={courseIcon} alt="course-icon" />}
                {tag === 'Trabajo' && (
                    <img src={briefcaseIcon} alt="job-icon" />
                )}
                {tag === 'Entretenimiento' && (
                    <img src={youtubeIcon} alt="entertainment-icon" />
                )}
            </div>
            <div className="task__buttons">
                <Link to={`task/${id}`}>
                    <img src={timeIcon} alt="time-icon" />
                </Link>
                <button>
                    <img src={editIcon} alt="edit-icon" />
                </button>
                <button>
                    <img src={trashIcon} alt="trash-icon" />
                </button>
            </div>
        </div>
    );
};

export default Task;
