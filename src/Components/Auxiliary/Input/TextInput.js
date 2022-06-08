const TextInput = ({ id, placeholder, onInputChange, inputValue, ...rest }) => {
    const onChange = event => {
        onInputChange(id, event.target.value);
    };

    return (
        <input type="text" 
            className="border-2 border-gray-300 m-2 rounded p-1 w-32 text-center focus:outline-blue-300"
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={inputValue ? inputValue(id) : null}
            {...rest}/>
    );
};

export default TextInput;