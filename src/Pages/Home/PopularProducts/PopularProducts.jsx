import { useEffect, useState } from "react";
import PopularProductsCards from "../PopularProductsCards/PopularProductsCards";



const PopularProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('populerProducts.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="mt-20 flex flex-col">
            <div className="text-center space-y-2">
                <h2 className="text-xl font-medium text-orange-500">Popular Products</h2>
                <h3 className="text-3xl font-bold">Browse Our Products</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
                {
                    products.map(product=><PopularProductsCards key={product._id} product={product}></PopularProductsCards>)
                }
            </div>
            
        </div>
    );
};

export default PopularProducts;