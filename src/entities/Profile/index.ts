import { ProfileSchema } from "./model/type/type";
import { ProfileReducer } from "./model/slice/ProfileSlice";
import { ProfileActions } from "./model/slice/ProfileSlice";
import { getValue } from "./model/service/getValue";
import { getData } from "./model/selectors/getDate";
import { getResultScore } from "./model/selectors/getResult";
export { type ProfileSchema, ProfileReducer, getValue, ProfileActions, getResultScore, getData};