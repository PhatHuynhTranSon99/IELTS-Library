import { useSelector } from "react-redux";
import { getPagination } from "../../Redux/Reading/select";
import Pagination from "../../Components/Pagination";

const PaginationWrapper = () => {
    const pagination = useSelector(getPagination);

    return <Pagination content={pagination}/>
};

export default PaginationWrapper;