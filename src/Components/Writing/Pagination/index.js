import { useDispatch, useSelector } from "react-redux";
import { updateFocusedSection } from "../../../Redux/Writing/action";
import { getPagination } from "../../../Redux/Writing/select";
import Pagination from "../../Pagination";

const WritingPagination = ({ pagination, onClick }) => (
    <Pagination content={pagination}
        onClick={onClick}/>
);

const WritingPaginationWrapper = () => {
    //Get pagination from store
    const pagination = useSelector(getPagination);

    //On click -> Set question
    const dispatch = useDispatch();
    const onClick = (section, question) => dispatch(updateFocusedSection(question));

    return (
        <WritingPagination pagination={pagination}
            onClick={onClick}/>
    );
};

export default WritingPaginationWrapper;