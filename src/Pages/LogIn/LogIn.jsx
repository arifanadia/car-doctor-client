import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const pass = form.password.value;

        signIn(email,pass)
        .then(result => {
            console.log(result);
        })
        .catch(err =>{
            console.err(err);
        })

    }
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className=" w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>New to Car Doctor ?
                        <Link to='/register'><button className='text-[#FF3811]'> Sign Up</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;