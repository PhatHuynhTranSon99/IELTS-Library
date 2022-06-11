export const Panel = ({ children }) => (
    <div className="flex">{ children }</div>
);

export const CenterPanel = ({ children }) => (
    <div className="text-center">{ children }</div>
);

export const Centered = ({ children }) => (
    <div className="w-full h-full grid content-center justify-items-start">{ children }</div>
);

export const OneHalfPanel = ({ children }) => (
    <div className="w-1/2">{ children }</div>
);

export const OneThirdPanel = ({ children }) => (
    <div className="w-1/3">{ children }</div>
);

export const OneFourthPanel = ({ children }) => (
    <div className="w-1/4">{ children }</div>
);

export const TwoThirdPanel = ({ children }) => (
    <div className="w-2/3">{ children }</div>
);

export const ThreeFourthPanel = ({ children }) => (
    <div className="w-3/4">{ children }</div>
);