import React, { useState, useCallback } from 'react';
import Button from './../Button';
import './newTaskForm.scss';
import RadioButton from './../RadioButton';
import { RadioChangeEvent } from './../RadioButton';

const NewTaskForm: React.FC = () => {
    const tags = ['Entretenimiento', 'Curso', 'Trabajo'];
    const [taskName, setTaskName] = useState<String>('');
    const [tag, setTag] = useState<string>('');

    const changeTaskNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const changeTagHandler = useCallback(
        (e: RadioChangeEvent) => {
            setTag(e.target.value);
        },
        [tag, setTag]
    );

    return (
        <div className="newTaskForm">
            <div className="newTaskForm__title">
                <h4>Crea tu tarea</h4>
            </div>
            <div className="newTaskForm__form">
                <form>
                    <div className="newTaskForm__form__input">
                        <label
                            htmlFor="taskName"
                            className="newTaskForm__label"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="taskName"
                            value={taskName as string}
                            onChange={changeTaskNameHandler}
                        />
                    </div>
                    <div className="newTaskForm__form__input--radio">
                        <label className="newTaskForm__label">Etiqueta</label>
                        {tags.map((option, index) => {
                            return (
                                <RadioButton
                                    label={option}
                                    name="tag"
                                    value={option}
                                    key={`${option}-${index}`}
                                    checked={tag === option}
                                    onChange={changeTagHandler}
                                />
                            );
                        })}
                    </div>
                    <div className="newTaskForm__form__button">
                        <Button
                            text="Crear"
                            customStyles={{ width: '100%' }}
                            event={() => alert('Creada')}
                            color="blue"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewTaskForm;
