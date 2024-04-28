import Button from 'shared/UI/Button/Button';
import cls from './StackList.module.scss';
import { useSelector } from 'react-redux';
import { getData, getError, getIsLoading } from 'entities/Stack';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { stackService } from 'entities/Stack';
import Loader from 'shared/UI/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import NotResult from 'widgets/NotResult/NotResult';

const StackList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const loading  = useSelector(getIsLoading);
    const data = useSelector(getData);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(stackService());
    },[dispatch])

    const getID = (id: number) => {
        navigate(`/tasks/${id}`);
    }
    
    return (
        <div className={cls.list}>
            {error ? <NotResult error={error}/>
             :  loading ? <Loader /> : data?.map((item) => <div key={item.courseID} className={cls.list_box}>
             <h2>{item.title}</h2>
             <p>{item.description}</p>
                 {item.links?.map((e) => <div key={e.id} className={cls.list_box__links}>
                     <h4>{e.title}</h4>
                     <a href={e.url} target="_blank">Перейти по ссылке</a>
                 </div>)}
             <Button onClick={() => getID(item.courseID)}>Пройти тест</Button>
         </div>)}
           
        </div>
    )
}
export default StackList;