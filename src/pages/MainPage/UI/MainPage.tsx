import { Header } from 'widgets/Header';
import cls from './MainPage.module.scss'
import { StackList } from 'widgets/StackList';
import { TaskPage } from 'pages/TasksPage';
const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <Header />
            <StackList />
        </div>
    )
}

export default MainPage;