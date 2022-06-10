export const Panel = ({ children }) => (
    <div className="flex">{ children }</div>
);

export const PanelItem = ({ children, className, ...rest }) => (
    <div className={className + " grid content-center justify-items-start"} {...rest}>{ children }</div>
);