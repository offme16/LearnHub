import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getVacancy = (state: StateSchema) => state?.vacancy.vacancy;