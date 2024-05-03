import { VacancySchema } from "./model/type/type";
import { VacancyReducer } from "./model/slice/VacancySlice";
import { vacancyService } from "./model/service/getVacancy";
import { getVacancy } from "./model/selectors/getVacancy";
export { type VacancySchema, VacancyReducer, vacancyService, getVacancy};