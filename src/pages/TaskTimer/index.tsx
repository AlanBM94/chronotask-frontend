import React, { useEffect, useState } from 'react';
import './../Dashboard/dashboard.scss';
import './taskTimer.scss';
import { useParams } from 'react-router-dom';
import RoundedButton from './RoundedButton';
import Display from './../../components/Display';
import entertainmentIcon from './../../images/youtube.svg';
import PlayIcon from './../../images/PlayIcon';
import PauseIcon from './../../images/PauseIcon';
import RedoIcon from './../../images/RedoIcon';
import CheckIcon from './../../images/CheckIcon';
import Sidebar from '../../components/Sidebar';

const TaskTimer: React.FC = () => {
    let { id } = useParams<{ id?: string }>();
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState<NodeJS.Timeout | null>(null);
    const [status, setStatus] = useState(0);
    const [disabledButtons, setDisabledButtons] = useState({ play: false });
    const [resumeButtonActive, setResumeButtonActive] = useState(false);
    const [pauseButtonActive, setPauseButtonActive] = useState(false);
    let updatedMs = time.ms;
    let updatedS = time.s;
    let updatedM = time.m;
    let updatedH = time.h;

    let task = {
        name: 'Test',
        tag: 'Entretenimiento',
    };

    const setIcon = () => {
        switch (task.tag) {
            case 'Entretenimiento':
                return entertainmentIcon;
            default:
                return '';
        }
    };

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }

        updatedMs++;
        return setTime({
            ms: updatedMs,
            s: updatedS,
            m: updatedM,
            h: updatedH,
        });
    };

    const pause = () => {
        if (status !== 1) {
            setPauseButtonActive(true);
            setTimeout(() => {
                setPauseButtonActive(false);
            }, 100);
            return;
        }
        clearInterval(interv as NodeJS.Timeout);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv as NodeJS.Timeout);
        setStatus(0);
        setTime({
            ms: 0,
            s: 0,
            m: 0,
            h: 0,
        });
        setResumeButtonActive(true);
        setTimeout(() => {
            setResumeButtonActive(false);
        }, 100);
    };

    const finish = () => {};

    useEffect(() => {
        if (status === 1) {
            return setDisabledButtons({ play: true });
        }
        setDisabledButtons({ play: false });
    }, [status]);

    if (!id) {
        return null;
    }

    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <Sidebar />
            </div>
            <div className="dashboard__content">
                <div className={`taskTimer taskTimer--${task.tag}`}>
                    <div className="taskTimer__top">
                        <div className="taskTimer__info">
                            <div className="taskTimer__name">{task.name}</div>
                            <div className="taskTimer__tag">
                                {task.tag}{' '}
                                <img src={setIcon()} alt={task.tag} />
                            </div>
                        </div>
                        <div className="taskTimer__close" />
                    </div>
                    <div className="taskTimer__timer">
                        <div className="taskTimer__timerButtons">
                            <RoundedButton
                                disabled={disabledButtons.play}
                                active={status === 1}
                                onClick={start}
                            >
                                <PlayIcon />
                            </RoundedButton>
                            <RoundedButton
                                onClick={pause}
                                active={status === 2 || pauseButtonActive}
                            >
                                <PauseIcon />
                            </RoundedButton>
                            <RoundedButton
                                onClick={reset}
                                active={resumeButtonActive}
                            >
                                <RedoIcon />
                            </RoundedButton>
                            <RoundedButton onClick={finish}>
                                <CheckIcon />
                            </RoundedButton>
                        </div>
                        <div className="taskTimer__display">
                            <Display time={time} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskTimer;
