import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card  bg-base-100  border ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-3xl font-medium">{title}</h2>
                <p className="text-orange-400 text-2xl font-semibold">{price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Booking now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;