import { useSelector } from "react-redux";
import { getFocusedSection } from "../../../Redux/Writing/select";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";
import { TASK_ONE, TASK_TWO } from "./types";

const Task = ({ type, ...rest }) => (
    <div>
    {
        (() => {
            switch(type) {
                case TASK_ONE:
                    return <TaskOne {...rest}/>;
                case TASK_TWO:
                    return <TaskTwo {...rest}/>;
                default:
                    return null;
            }
        })()
    }
    </div>
);

const TaskWrapper = () => {
    //Get focused section from store
    const task = useSelector(getFocusedSection);

    return (
        <Task {...task}/>
    );
};

export default TaskWrapper;