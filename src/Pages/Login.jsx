import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providiers/AuthProvider";


const Login = () => {
    const{login}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');

        login(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div >
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mt-4">Please Log in</h2>
            {/* <div className="hero min-h-screen bg-base-200"> */}
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4 ">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
          <button className="btn btn-primary" >Login</button>
        </div>
      </form>
      <p className="text-center mt-3">Dont have an account <Link to='/register' className="text-blue-400">Register</Link></p>
    </div>
  </div>
 </div>
       
    );
};

export default Login;