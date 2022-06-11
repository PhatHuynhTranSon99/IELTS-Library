import Link from "./link";
import { FaHotjar } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai"

const SideNav = () => (
    <ul>
        <Link text="Nổi bật"
            href="#"
            icon={<FaHotjar />} />

        <Link text="Mới nhất"
            href="#"
            icon={<AiOutlineFieldTime />} />

        <Link text="Cambridge IELTS"
            href="#"
            icon={<FaHotjar />} />

        <Link text="GEL IELTS"
            href="#"
            icon={<FaHotjar />} />
    </ul>
);

export default SideNav;