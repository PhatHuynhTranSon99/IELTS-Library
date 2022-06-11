const ItemCard = ({ id, name, image }) => (
    <div className="rounded-md w-48 h-64 bg-slate-200 shadow-xl mb-10 relative">
        <p className="w-full bg-white text-center py-3 absolute inset-x-0 bottom-0 rounded-b-md">{ name }</p>
    </div>
);

export default ItemCard;