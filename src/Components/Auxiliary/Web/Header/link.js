const Link = ({ title, href }) => (
    <li className="m-5">
        <a className="text-xl" href={href}>{ title }</a>
    </li>
);

export default Link