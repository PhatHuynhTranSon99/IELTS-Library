const TextArea = ({ placeholder = "", defaultValue = "", onChange, ...rest }) => (
    <textarea className="border border-slate-300 rounded p-3 m-3 w-full h-full focus:outline-blue-300" 
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        value={defaultValue}
        {...rest}/>
);

export default TextArea;