import cls from './TaskPage.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getTasks, tasksService } from 'entities/Tasks';
import Button from 'shared/UI/Button/Button';

const TaskPage = () => {
    const { id } = useParams<{ id: string}>();
    const dispatch = useAppDispatch();
    const tasks = useSelector( getTasks );
    const task = tasks?.filter(task => task.id === Number(id));

    console.log(task);
    useEffect(() => {
        dispatch(tasksService());
    },[id, dispatch]);

    return (
        <div className={cls.container}>
              {task?.map(e => <div className={cls.container_box} key={e.id}>
                <div className={cls.container_description} >
                    <h2>Вопрос </h2>
                    <p>{e.description}</p>
                </div>
                <form className={cls.container_form}>
                    <h2>Выберите один из вариантов ответа</h2>
                {e.answers?.map(item => <div className={cls.container_form__input} key={item.id}>
                        <input type='radio' id='radioInput' name='radioGroup'/>
                        <label htmlFor='radioInput'>{item.answer}</label>
                    </div>)}
                </form>
            </div>)}
            <Button className={cls.btn}>Завершить тест</Button>
        </div>
    )
}
export default TaskPage;