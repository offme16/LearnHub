import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getResourseUrl = (state: StateSchema) => state?.stack?.Url;