import { useLoaderData } from "react-router-dom";
import checkOutImg from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {
    const service = useLoaderData()
    const { title, price, _id,img } = service
    console.log(price);
    const {user} = useContext(AuthContext)
    const handleBookService = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;
        const booking ={
            customerName: name,
            date,
            title,
            email,
            img,
            price,
            due,
            service_id:_id
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('order confirm successfully')
            }
            console.log(data);
        })
    }

    return (
        <div>
            <img className="w-full" src={checkOutImg} alt="" />
            <h2 className="text-center text-3xl font-semibold mt-6 mb-6">Book Service</h2>
            {/* order confirm layout */}

            <form onSubmit={handleBookService}> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  defaultValue={user?.email}  name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} name="due" className="input input-bordered" required />
                    </div>
                    
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;