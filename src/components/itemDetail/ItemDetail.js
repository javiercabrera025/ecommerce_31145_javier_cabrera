const ItemDetail = ({title, price, pictureUrl,description}) => {
    
    return(
        <div className="">
           <h1>{title}</h1>
           <img src={pictureUrl} alt={title} />
           <p>${price}</p>
           <p>{description}</p>
        </div>
    )
  
}

export default ItemDetail;