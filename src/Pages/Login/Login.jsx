import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import axios from 'axios';
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const handleLogin = e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const loggedInUser = result.user
            console.log(loggedInUser);
            const user = { email } 
            
            axios.post('http://localhost:5000/jwt', user )
            .then(res=>{
                console.log(res.data)

            })
            
        })

        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:text-left mr-12">
                   <img src={login} alt="" />
                   
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center p-4 font-bold">Login</h1>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    <p className='text-center mt-4'>Have an account <Link to='/signup' className='text-orange-500 font-bold'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;