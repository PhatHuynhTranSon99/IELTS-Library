import { IconContext } from "react-icons";

const Icon = ({ children }) => (
    <span className="mr-3">
        <IconContext.Provider value={{ className: "inline" }}>
            { children }
        </IconContext.Provider>
    </span>
);

export default Icon;