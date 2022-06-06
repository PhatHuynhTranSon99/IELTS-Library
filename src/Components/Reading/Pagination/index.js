import { useDispatch, useSelector } from "react-redux";
import { updateFocusedQuestion } from "../../../Redux/Reading/action";
import { getPagination } from "../../../Redux/Reading/select";
import Pagination from "../../Pagination";

const PaginationWrapper = () => {
    //Get pagination from store
    const pagination = useSelector(getPagination);

    //Update focused question
    const dispatch = useDispatch();
    const onClick = (section, question) => dispatch(updateFocusedQuestion(section, question));

    return (
        <Pagination content={pagination}
            onClick={onClick}/>
    );
};

export default PaginationWrapper;