

const PopularProductsCards = ({ product }) => {

    return (
        <div className="card card-compact bg-base-100 border ">
            <figure><img className="w-1/2" src={product.img} alt="products" /></figure>
            <div className="card-body flex-grow">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.rating}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>

                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default PopularProductsCards;