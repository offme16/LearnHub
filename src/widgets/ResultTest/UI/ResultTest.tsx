import Button from "shared/UI/Button/Button";
import style from "./ResultTest.module.scss";
import { ProfileActions } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import photo from '../../../shared/assets/2278992.png'
interface Result {
    result: number;
};

export const ResultTest: React.FC<Result> = ({result}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const todayDay = `${day}.${month}.${year}`;
    return todayDay;
  }

  const onSubmitClik = () => {
    dispatch(ProfileActions.setScore(result));
    dispatch(ProfileActions.setDate(getDate()));
    navigate("/")
  };
        return (
          <div className={style.result}>
            <img src={photo} />
            <h2>Вы ответили на {result} из 10</h2>
            <Button onClick={onSubmitClik}>Вернуться на главную</Button>
          </div>
)};