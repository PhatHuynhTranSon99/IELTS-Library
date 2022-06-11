import CollectionBlock from "../../../Components/Auxiliary/Web/CollectionBlock";
import { useSelector } from "react-redux";
import {
    getItems,
    getError,
    getLoading
} from "../../../Redux/Collections/Hot/select";

const HotCollection = () => {
    //Select state from redux
    const items = useSelector(getItems);
    const error = useSelector(getError);
    const loading = useSelector(getLoading);

    return (
        <CollectionBlock title="Nổi bật"
            text="Các bộ đề nhận được nhiều sự quan tâm của học sinh."
            items={items}
            error={error}
            loading={loading}/>
    );
};

export default HotCollection;