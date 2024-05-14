import Button from 'shared/UI/Button/Button';
import cls from './StackList.module.scss';
import { useSelector } from 'react-redux';
import { getData, getError, getIsLoading, getResourse } from 'entities/Stack';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { stackService } from 'entities/Stack';
import Loader from 'shared/UI/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import NotResult from 'widgets/NotResult/NotResult';
import map from "../../../shared/assets/211858_map_icon.png"
import Modal from 'shared/UI/Modal/Modal';
import RoadMap from 'widgets/RoadMap/RoadMap';
import { sigUpCourse } from 'entities/Tasks';

const StackList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const loading  = useSelector(getIsLoading);
    const data = useSelector(getData);
    const error = useSelector(getError);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        dispatch(stackService());
        dispatch(getResourse());
    },[dispatch])

    const getID = (id: number) => {
        const handleClick = async () => {
            await dispatch(sigUpCourse(id));
            navigate(`/tasks/${id}`);
        }
        handleClick();
    }


    return (
        <div className={cls.list}>
            <div className={cls.btn_roadmap} onClick={() => setVisible(true)}><img src={map} alt="roadmap" /></div>
            {error ? <NotResult error={error}/>
             :  loading ? <Loader /> : data?.map((item) => <div key={item.courseID} className={cls.list_box}>
             <h2>{item.title}</h2>
             <p>{item.description}</p>
                <div className={cls.list__btns}>
                 <Button onClick={() => getID(item.courseID)}>Пройти тест</Button>
                </div>
             
         </div>)}
        <Modal visible={visible} setVisible={setVisible}><RoadMap /></Modal>
        </div>
    )
}
export default StackList;