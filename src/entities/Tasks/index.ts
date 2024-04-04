import { TasksSchema } from "./model/type/type";
import { TaskReducer } from "./model/slice/TaskSlice";
import { tasksService } from "./model/service/taskService";
import { getTasks } from "./model/selectors/getTasks";
export { type TasksSchema , TaskReducer, tasksService, getTasks};