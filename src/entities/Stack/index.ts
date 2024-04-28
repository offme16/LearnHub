import { StackSchema } from "./model/type/type";
import { StackReducer } from "./model/slice/StackSlice";
import { getData } from "./model/selectors/getData";
import { stackService } from "./model/service/stackService";
import { getIsLoading } from "./model/selectors/getIsLoading";
import { getError } from "./model/selectors/getError";

export {type StackSchema, StackReducer, getData, stackService, getIsLoading, getError};