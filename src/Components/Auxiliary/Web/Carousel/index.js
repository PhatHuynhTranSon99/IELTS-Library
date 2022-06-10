export const CarouselItem = ({ title, text, href }) => (
    <div className="w-48 h-64 bg-slate-300 mx-4 my-5 rounded shadow-lg">
    </div>
);

export const Carousel = ({ children }) => (
    <div className="flex justify-around">{ children }</div>
);

