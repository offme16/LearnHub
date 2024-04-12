import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getTasks, tasksService } from 'entities/Tasks';
import Button from 'shared/UI/Button/Button';
import cls from './TaskPage.module.scss';
import { ProfileActions } from 'entities/Profile';
import Loader from 'shared/UI/Loader/Loader';
import { TestList } from 'widgets/TestList';
import ResultTest from 'widgets/ResultTest';

const TaskPage = () => {
    const { id } = useParams<{ id: string }>();
    
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks);
    const [step, setStep] = useState(0);
    const [result, setResult] = useState(0);
    
    const task = tasks?.filter(task => task.courseid === Number(id))?.[step];
    
    useEffect(() => {
        dispatch(tasksService());
    }, [id, dispatch]);

    const onClickVariable = (status: number) => {
        console.log(status);
        setStep(step + 1);
        if (status === 1){
            setResult(result+1)
        }
    };

      

    return (
        <div className={cls.container}>
            {task 
                ? <>{step === 2 ? <ResultTest result={result} /> : <TestList task={task} onClickVariable={onClickVariable} step={step}/>}  </> 
                : <Loader />}
        </div>
    );
    
}

export default TaskPage;
