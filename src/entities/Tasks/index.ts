import { TasksSchema } from "./model/type/type";
import { TaskReducer } from "./model/slice/TaskSlice";
import { tasksService } from "./model/service/taskService";
import { getTasks } from "./model/selectors/getTasks";
import { postResultService } from "./model/service/postResultService";
import { sigUpCourse } from "./model/service/sigUpCourse";
import { getCourseID } from "./model/selectors/getCourseID";
export { type TasksSchema , TaskReducer, tasksService, getTasks, postResultService, sigUpCourse, getCourseID};