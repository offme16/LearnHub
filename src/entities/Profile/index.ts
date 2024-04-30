import { ProfileSchema } from "./model/type/type";
import { ProfileReducer } from "./model/slice/ProfileSlice";
import { ProfileActions } from "./model/slice/ProfileSlice";
import { getValue } from "./model/service/getValue";
import { getDate } from "./model/selectors/getDate";
import { getResultScore } from "./model/selectors/getResult";
import { postValue } from "./model/service/postValue";
import { getData } from "./model/selectors/getData";
export { type ProfileSchema, ProfileReducer, getValue, ProfileActions, getResultScore, getDate, postValue, getData};