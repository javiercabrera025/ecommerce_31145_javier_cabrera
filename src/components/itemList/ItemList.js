import Item from '../item/Item'

const ItemList = ({products}) => {
    return(
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 gap-4 md:grid-cols-2">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;