import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../Components/Pagination";
import { updateFocusedQuestion } from "../../../Redux/Listening/action";
import { getPagination } from "../../../Redux/Listening/select";

const ListeningPagination = () => {
    //Get pagination from listening slice
    const pagination = useSelector(getPagination);

    //On click -> Set focused section
    const dispatch = useDispatch();
    const onClick = (section, question) => {
        dispatch(updateFocusedQuestion(section, question));
    };

    return (
        <Pagination content={pagination}
            onClick={onClick}/>
    );
};

export default ListeningPagination;