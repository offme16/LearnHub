import Button from 'shared/UI/Button/Button';
import cls from './StackList.module.scss';
import { useSelector } from 'react-redux';
import { getData } from 'entities/Stack';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { stackService } from 'entities/Stack/model/service/stackService';

const StackList = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getData);

    useEffect(() => {
        dispatch(stackService());
    },[dispatch])

    return (
        <div className={cls.list}>
            {!data ? <span>loading</span> : data?.map((item) => <div key={item.courseId} className={cls.list_box}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                    {item.links?.map((e) => <div key={e.id}>
                        <h4>{e.title}</h4>
                        <a href={e.url} target="_blank">Перейти по ссылке</a>
                    </div>)}
                <Button>Пройти тест</Button>
            </div>)}
        </div>
    )
}
export default StackList;