import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getCourseID = (state: StateSchema) => state?.task?.userCourseID;