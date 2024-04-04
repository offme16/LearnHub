import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getTasks = (state: StateSchema) => state?.task?.data;