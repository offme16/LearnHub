import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getResultScore = (state: StateSchema) => state?.profile.score;