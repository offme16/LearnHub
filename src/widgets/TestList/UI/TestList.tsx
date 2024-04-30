import { Task } from "entities/Tasks/model/type/type";
import style from "./TestList.module.scss";

interface TestListProps {
  tasks: Task[];
  onClickVariable: (id: number) => void;
  step: number;
  leng: number;
}

const TestList: React.FC<TestListProps> = ( { tasks, onClickVariable, step, leng } ) => {
    const progress = tasks ? Math.round((step / leng)*100) : 0;
    console.log(tasks);
    
    const task = tasks[step];

    return (
      <div className={style.container_test}>
        <div className={style.progress}>
          <div style={{ width: `${progress}%` }} className={style.progress__inner}></div>
        </div>
        <h1>{task.description}</h1>
        <ul>
          {task.answers.map((e) => <li onClick={()=> onClickVariable(e.status)} key={e.resultID}>{e.answer}</li>)}
        </ul>
      </div>
    );
}
export default TestList;