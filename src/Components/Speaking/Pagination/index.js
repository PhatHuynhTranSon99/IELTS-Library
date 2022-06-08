import { useDispatch, useSelector } from "react-redux";
import { updateFocusedSection } from "../../../Redux/Speaking/action";
import { getPagination } from "../../../Redux/Speaking/select";
import Pagination from "../../Pagination";

const SpeakingPagination = () => {
    //Get pagination content from slice
    const pagination = useSelector(getPagination);

    //On click -> Set focused section
    const dispatch = useDispatch();
    const onClick = (section, question) => {
        dispatch(updateFocusedSection(question));
    };

    return (
        <Pagination content={pagination}
            onClick={onClick}/>
    );
};

export default SpeakingPagination;