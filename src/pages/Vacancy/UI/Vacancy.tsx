import { useEffect } from "react";
import cls from "./Vacancy.module.scss"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getVacancy, vacancyService } from "entities/Vacancy";
import { useSelector } from "react-redux";
import Button from "shared/UI/Button/Button";
const Vacancy = () => {
    const data = useSelector(getVacancy)
    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(vacancyService())
    }, [dispatch])

    return (
        <div className={cls.vacancy}>
          <h1 className={cls.title}>Вакансии для вас</h1>
          <p className={cls.subtitle}>"Без опыта работы"</p>
          <div className={cls.vacancy_list}>
            {data.map((item) => (
              <div key={item.id} className={cls.vacancy_item}>
                <h3 className={cls.vacancy_name}>{item.name}</h3>
                <p>{item.snippet.requirement}</p>
                <Button className={cls.button}>
                  <a
                    href={item.alternate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Посмотреть
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      );
    };
export default Vacancy;