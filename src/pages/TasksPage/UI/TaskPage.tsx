import React, { useState, useEffect  } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getTasks, tasksService } from 'entities/Tasks';
import cls from './TaskPage.module.scss';
import Loader from 'shared/UI/Loader/Loader';
import { TestList } from 'widgets/TestList';
import ResultTest from 'widgets/ResultTest';
import { ProfileActions } from 'entities/Profile';

const TaskPage = () => {
    const { id = '' } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks);
    const [step, setStep] = useState(0);
    const [result, setResult] = useState(0);
    useEffect(() => {
    dispatch(tasksService(Number(id)));
    }, [id, dispatch]);

    const task = tasks.length > 0 ? tasks[0] : null;
    const leng = tasks.length;

    const onClickVariable = (status: number) => {
        setStep(step + 1);
        if (status === 1) {
            setResult(result+1)
        }
    };

    return (
        <div className={cls.container}>
            {task
                ? <> {step === tasks.length  ? <ResultTest result={result} maxLenght={leng} /> : <TestList tasks={tasks} onClickVariable={onClickVariable} step={step} leng={leng}/>}  </> 
                : <Loader />}
        </div>
    );
    
}

export default TaskPage;
