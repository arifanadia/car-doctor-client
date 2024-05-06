import { useLoaderData } from "react-router-dom";
import bgImg from "../../assets/images/banner/4.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)

    const { title, price,img,_id} = service

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const price = form.price.value
        const email = user?.email
        const order = {
            CustomerName : name,
            service : title,
            price,
            email,
            img,
            date,
            service_id : _id
        }
        console.log(order);

        fetch('http://localhost:5000/checkOut', {
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'your order is confirmed',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="p-40 rounded-xl mt-14 bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `linear-gradient(#151515FF ,#15151500), url(${bgImg})` }}>
                <h1 className="text-5xl font-bold text-white" >Check Out</h1>
            </div>
            <h1 className="text-4xl mt-36 font-bold text-center">{title}</h1>
            <div className="bg-base-200 rounded-xl p-14 mt-14 ">
                
                <form onSubmit={handleCheckOut} className="card-body space-y-6">
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2 md:mt-0 mt-6">
                            <label className="label">
                                <span className="label-text">Service</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={'$'+price} name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2 md:mt-0 mt-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} placeholder="Your Email" name="email" className="input input-bordered" required />
                        </div>
                    </div>
                    <textarea className="textarea textarea-bordered h-48" name="message" placeholder="Your Message"></textarea>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white">Order Confirm</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;