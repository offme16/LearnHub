import { Task } from "entities/Tasks/model/type/type";
import style from "./TestList.module.scss";

interface TestListProps {
    task: Task;
    onClickVariable: (id: number) => void;
    step: number;
}

const TestList: React.FC<TestListProps> = ( { task, onClickVariable, step } ) => {
    const progress = task.answers ? Math.round((step / task.answers?.length)*100) : 0; // как будет подкл с бэком, сделать нормально
    
    return (
      <div className={style.container_test}>
        <div className={style.progress}>
          <div style={{ width: `${progress}%` }} className={style.progress__inner}></div>
        </div>
        <h1>{task.description}</h1>
        <ul>
          {task?.answers?.map((e) => <li onClick={()=> onClickVariable(e.status)} key={e.id}>{e.answer}</li>)}
        </ul>
      </div>
    );
}
export default TestList;