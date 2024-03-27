import { Header } from 'widgets/Header';
import cls from './TaskPage.module.scss';
import { useSelector } from 'react-redux';
import { getTasks } from 'entities/Stack';
import Button from 'shared/UI/Button/Button';

const TaskPage = () => {
    const asa = useSelector(getTasks)
    
    return (
        <div>
            <Header />
            <div className={cls.container}>
                <div className={cls.container_description}>
                        <h2>QUESTION</h2>
                </div>
                <form className={cls.container_form}>
                <div className={cls.container_form__input}>
                        <input type='radio' id='radioInput' name='radioGroup'/>
                        <label htmlFor='radioInput'>Текст, связанный с инпутом</label>
                    </div>
                    <div className={cls.container_form__input}>
                        <input type='radio' id='radioInpu' name='radioGroup'/>
                        <label htmlFor='radioInpu'>Текст, связанный с инпутом</label>
                    </div>
                    <Button >Следующий</Button>
                </form>
            </div>
        </div>
    )
}
export default TaskPage;