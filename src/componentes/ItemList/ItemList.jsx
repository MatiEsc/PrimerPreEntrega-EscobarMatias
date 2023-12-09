import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {productos.map((producto) => (
                <Item producto={producto} key={producto.id} />
            ))}
        </div>
    );
};
export default ItemList;
