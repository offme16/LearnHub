import cls from './MainPage.module.scss'
import { StackList } from 'widgets/StackList';
import { TaskPage } from 'pages/TasksPage';
const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <StackList />
        </div>
    )
}

export default MainPage;