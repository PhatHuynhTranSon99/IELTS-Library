import Icon from "./icon";

const Link = ({ text, href, icon }) => (
    <li className="mb-5 text-lg text-sky-500 ">
        <a href={ href } className="p-3 rounded focus:bg-slate-100 block">
            <Icon>{ icon }</Icon>
            { text }
        </a>
    </li>
);

export default Link;