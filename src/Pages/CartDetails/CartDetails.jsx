import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CartTableRow from "./CartTableRow";
import Swal from "sweetalert2";


const CartDetails = () => {
    const { user } = useContext(AuthContext);
    const [cartDetails, setCartDetails] = useState([])

    const url = `http://localhost:5000/checkOut?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCartDetails(data)
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkOut/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        
                        }
                        const remaining = cartDetails.filter(cartDetail => cartDetail._id !== id);
                        setCartDetails(remaining)
                      
                    })
            }
        });
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/checkOut/${id}`,{
            method : 'PATCH',
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify({status : "confirm"})

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // update
                const remaining = cartDetails.filter(cartDetail => cartDetail._id !== id)
                const update = cartDetails.find(cartDetail => cartDetail._id == id)
                update.status = "Confirm"
                const newCheckOut = [update,...remaining];
                setCartDetails(newCheckOut)

            }
        })
    }
    console.log(cartDetails);
    return (
        <div className="overflow-x-auto max-w-7xl mx-auto mt-20">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartDetails.map(cartDetails =>
                            <CartTableRow
                                key={cartDetails._id}
                                cartDetails={cartDetails}
                                handleDelete={handleDelete}
                                handleConfirm ={handleConfirm}
                            ></CartTableRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default CartDetails;