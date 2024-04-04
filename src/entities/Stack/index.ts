import { StackSchema } from "./model/type/type";
import { StackReducer } from "./model/slice/StackSlice";
import { getData } from "./model/selectors/getData";
import { stackService } from "./model/service/stackService";
export {type StackSchema, StackReducer, getData, stackService};