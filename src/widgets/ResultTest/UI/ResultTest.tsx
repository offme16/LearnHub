import Button from "shared/UI/Button/Button";
import style from "./ResultTest.module.scss";
import { ProfileActions, postValue } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import photo from '../../../shared/assets/2278992.png'
import { useSelector } from "react-redux";
import { USER_COURSE_ID } from "shared/const/localStorage";
interface Result {
    result: number;
    maxLenght: number;
};

export const ResultTest: React.FC<Result> = ({result}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const date = useSelector(getDate);
  const score = result;
  const userCourseId = JSON.parse(localStorage.getItem(USER_COURSE_ID) || 'null')


  function getDate() {
    const date = new Date();
    return date;
  }

  const onSubmitClik = async () => {
    dispatch(ProfileActions.setDate(getDate()));
    await dispatch(postValue({date, score, userCourseId}));
    navigate("/");
  };
        return (
          <div className={style.result}>
            <img src={photo} />
            <h2>Вы ответили на {result*10}%</h2>
            <Button onClick={onSubmitClik}>Вернуться на главную</Button>
          </div>
)};