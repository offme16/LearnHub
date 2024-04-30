import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getDate = (state: StateSchema) => state?.profile.date;