const ButtonLink = ({ text, href }) => (
    <a className="rounded bg-blue-500 text-white inline-block px-3 py-2 my-2" href={href}>
        { text }
    </a>
);

export default ButtonLink;