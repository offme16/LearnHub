import Button from "shared/UI/Button/Button";
import style from "./ResultTest.module.scss";
import { ProfileActions } from "entities/Profile";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface Result {
    result: number
}

export const ResultTest: React.FC<Result> = ({result}) => {
  const dispatch = useAppDispatch();
        return (
          <div className={style.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {result} ответа из 10</h2>
            <Button onClick={() => dispatch(ProfileActions.setScore(result))}>Попробовать снова</Button>
          </div>
)};