import { Header } from 'widgets/Header';
import cls from './TaskPage.module.scss';
import { useSelector } from 'react-redux';
import { getTasks } from 'entities/Stack';

const TaskPage = () => {
    const asa = useSelector(getTasks)
    const mas = [1, 2, 3, 4]; 
    return (
        <div>
            <Header />
              {mas.map(e => <div className={cls.container}>
                <div className={cls.container_description}>
                    <h2>QUESTION</h2>
                    <p>fhsdjbuwdsyvcgbywevbwshdvbsdvhsdiov</p>
                </div>
                <form className={cls.container_form}>
                    <h2>Выберите один из вариантов ответа</h2>
                {mas.map(e => <div className={cls.container_form__input} >
                        <input type='radio' id='radioInput' name='radioGroup'/>
                        <label htmlFor='radioInput'>Текст, связанный с инпутом</label>
                    </div>)}
                </form>
            </div>)}
        </div>
    )
}
export default TaskPage;