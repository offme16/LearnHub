import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getTasks, tasksService } from 'entities/Tasks';
import Button from 'shared/UI/Button/Button';
import cls from './TaskPage.module.scss';
import { ProfileActions } from 'entities/Profile';

const TaskPage = () => {
    const { id } = useParams<{ id: string}>();
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks);
    const task = tasks?.filter(task => task.id === Number(id));

    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        dispatch(tasksService());
    }, [id, dispatch]);

    const handleFieldChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSelectedAnswers(prev => ({ ...prev, [name]: Number(value) }));
    }, []);

    const handleSubmit = () => {
        const scores = Object.values(selectedAnswers);
        dispatch(ProfileActions.setScore(selectedAnswers)); // Передача объекта в действие setScore
    };

    return (
        <div className={cls.container}>
            {task && task.map(taskItem => (
                <div className={cls.container_box} key={taskItem.id}>
                    <div className={cls.container_description}>
                        <h2>Вопрос</h2>
                        <p>{taskItem.description}</p>
                    </div>
                    <form className={cls.container_form}>
                        <h2>Выберите один из вариантов ответа</h2>
                        {taskItem.answers?.map(item => (
                            <div className={cls.container_form__input} key={item.id}>
                                <input
                                    type='radio'
                                    id={`radioInput_${item.id}`}
                                    name={`radioGroup_${(item.id)}`} // Преобразуем в строку
                                    value={item.status}
                                    checked={selectedAnswers[item.id] === item.status}
                                    onChange={handleFieldChange}
                                />
                                <label htmlFor={`radioInput_${item.id}`}>{item.answer}</label>
                            </div>
                        ))}
                    </form>
                </div>
            ))}
            <Button className={cls.btn} onClick={handleSubmit}>Завершить тест</Button>
        </div>
    );
    
}

export default TaskPage;
