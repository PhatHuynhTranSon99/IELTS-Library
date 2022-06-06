import Markdown from "../../Markdown";

const Background = ({ content, onClick, active }) => {
    return (
        <div className={`
            p-2 
            shadow-md 
            rounded-md mb-2 
            ${ active ? "bg-sky-400" : "bg-slate-100" }
            ${ active ? "text-white" : "text-black" }
            cursor-pointer
            `}
            onClick={onClick}>
            <Markdown content={content}/>
        </div>
    );
};

export default Background;