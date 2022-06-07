import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../Components/Pagination";
import { setFocusedQuestion } from "../../../Redux/Listening";
import { getPagination } from "../../../Redux/Listening/select";

const ListeningPagination = () => {
    //Get pagination from listening slice
    const pagination = useSelector(getPagination);

    //On click -> Set focused section
    const dispatch = useDispatch();
    const onClick = (section, question) => dispatch(setFocusedQuestion(section, question));

    return (
        <Pagination content={pagination}
            onClick={onClick}/>
    );
};

export default ListeningPagination;