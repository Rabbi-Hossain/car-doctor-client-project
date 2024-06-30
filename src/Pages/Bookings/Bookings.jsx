import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TabelRaw from "./TabelRaw";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings`

    useEffect(() => {
        axios.get(url)
        .then(res=>{
            setBookings(res.data)
        })
    }, [])


    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'delete',
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('delete is successfully')
                    const remaining = bookings.filter(booking=> booking._id !==id)
                    setBookings(remaining)
                }
                console.log(data);
            })
        }
    }

    const handleBookingConfirm = id=>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                const remaining = bookings.filter(booking=>booking._id !== id)
                const updated = bookings.find(booking=>booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
            console.log(data);
        })
    }


    return (
        <div>
            <h2 className="text-3xl font-medium text-center">booking length:{bookings.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>IMAGE</th>
                            <th>CUSTOMER</th>
                            <th>DATE</th>
                            <th>PRICE</th>
                            <th>STATUS</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <TabelRaw key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></TabelRaw>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;